import React, { createContext, useContext, useReducer } from 'react';
import { runResearchAgent } from '../lib/gemini';

const AgentContext = createContext();

const initialState = {
  // Chat History: Starts with a greeting
  messages: [
    { 
      id: 'init-1', 
      role: 'agent', 
      content: 'I am ready to assist with your Account Planning. Which company are we analyzing today?', 
      type: 'text' 
    }
  ],
  // The Living Document: A structured object that the AI can target specifically
  accountPlan: {
    targetCompany: 'Untitled Analysis',
    sections: [
      { id: 'exec-summary', title: 'Executive Summary', content: '*Analysis pending...*' },
      { id: 'financials', title: 'Financial Health', content: '*Analysis pending...*' },
      { id: 'competitors', title: 'Competitive Landscape', content: '*Analysis pending...*' },
      { id: 'strategy', title: 'Strategic Opportunities', content: '*Analysis pending...*' }
    ]
  },
  // The Cognitive State: Drives the UI animations
  agentStatus: 'idle', // 'idle' | 'thinking' | 'working' | 'error'
  currentAction: null, // e.g., "Scanning Bloomberg..."
};

function agentReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { 
        ...state, 
        messages: [...state.messages, action.payload] 
      };
    
    case 'SET_STATUS':
      return { 
        ...state, 
        agentStatus: action.payload.status, 
        currentAction: action.payload.action 
      };

    case 'UPDATE_PLAN_SECTION':
      // Critical: Updates only the specific section targeted by the AI
      const updatedSections = state.accountPlan.sections.map(section => 
        section.id === action.payload.id 
          ? { ...section, content: action.payload.content } 
          : section
      );
      return { 
        ...state, 
        accountPlan: { ...state.accountPlan, sections: updatedSections } 
      };

    case 'SET_TARGET_COMPANY':
      return { 
        ...state, 
        accountPlan: { ...state.accountPlan, targetCompany: action.payload } 
      };

    case 'LOAD_PLAN':
        // Used when loading from Firebase
        return {
            ...state,
            accountPlan: action.payload
        };

    default:
      return state;
  }
}

export function AgentProvider({ children }) {
  const [state, dispatch] = useReducer(agentReducer, initialState);

  // The Bridge between UI and Gemini
  const triggerResearch = async (query) => {
    // 1. UI: Show user message immediately
    dispatch({ 
        type: 'ADD_MESSAGE', 
        payload: { id: Date.now(), role: 'user', content: query } 
    });
    
    // 2. UI: Enter "Thinking" Mode
    dispatch({ 
        type: 'SET_STATUS', 
        payload: { status: 'thinking', action: 'Initializing research protocols...' } 
    });

    try {
      // 3. API: Call the Gemini Brain
      // We pass the *current* plan so the AI knows context
      const response = await runResearchAgent(state.messages, state.accountPlan, query);

      // 4. UI: Update Status (The "Brain" Panel)
      if (response.thought_process) {
        dispatch({ 
            type: 'SET_STATUS', 
            payload: { status: 'working', action: response.thought_process } 
        });
      }

      // 5. Logic: Handle Conflicts (Crucial for Hackathon Requirement)
      if (response.conflict_detected) {
         dispatch({ 
           type: 'ADD_MESSAGE', 
           payload: { 
             id: Date.now() + 1, 
             role: 'agent', 
             content: `⚠️ **CONFLICT DETECTED**: ${response.conflict_details}`,
             isWarning: true
           } 
         });
      }

      // 6. Logic: Write to the Document
      if (response.document_updates && response.document_updates.length > 0) {
        response.document_updates.forEach(update => {
          dispatch({ 
            type: 'UPDATE_PLAN_SECTION', 
            payload: { id: update.section_id, content: update.content } 
          });
        });
        // Implicitly update the company name if it's the first interaction
        if (state.accountPlan.targetCompany === 'Untitled Analysis') {
             // Simple heuristic: assume the query contained the company name
             // In a real app, we'd ask the AI to extract the name specifically
             dispatch({ type: 'SET_TARGET_COMPANY', payload: query }); 
        }
      }

      // 7. UI: Final Chat Response
      dispatch({ 
        type: 'ADD_MESSAGE', 
        payload: { 
          id: Date.now() + 2, 
          role: 'agent', 
          content: response.chat_response 
        } 
      });

    } catch (err) {
      console.error("Agent Breakdown:", err);
      dispatch({ 
          type: 'ADD_MESSAGE', 
          payload: { id: Date.now(), role: 'agent', content: "My connection was interrupted. Please try again." } 
      });
    } finally {
      // 8. UI: Reset to Idle
      dispatch({ type: 'SET_STATUS', payload: { status: 'idle', action: null } });
    }
  };

  return (
    <AgentContext.Provider value={{ state, dispatch, triggerResearch }}>
      {children}
    </AgentContext.Provider>
  );
}

export function useAgent() {
  return useContext(AgentContext);
}
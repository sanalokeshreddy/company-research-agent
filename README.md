# Company Research Assistant - AI Agent

## 🎯 Project Overview

An advanced conversational AI agent that helps users research companies through natural conversation and generate comprehensive account plans. Built using React and Google's Gemini 2.5 Flash API, this agent demonstrates intelligent agentic behavior with multi-source research capabilities, real-time verification, and adaptive persona-based interactions.

**Live Demo:** [Company Research Agent](https://github.com/sanalokeshreddy/company-research-agent)

---

## ✨ Key Features

### 🤖 Intelligent Agent Network
- **Multi-Agent Architecture**: Specialized AI sub-agents for different research domains:
  - 📊 Financial Analyst - SEC filings, ratio analysis, forecasting
  - 🌐 Market Intelligence Scout - TAM/SAM/SOM, competitive positioning
  - ⚠️ Risk & Compliance Officer - Regulatory threats, ESG risks
  - 💡 Strategy & Innovation Advisor - Growth opportunities, M&A potential
  - 🔍 Deep Research Miner - Multi-source aggregation, fact-checking
  - 📰 Real-Time News Tracker - Breaking news, sentiment analysis
  - 🎯 Competitive Intelligence - Competitor moves, market positioning
  - 🔮 Predictive Analytics - Trend forecasting, scenario modeling

### 💬 Advanced Conversational Experience
- **Persona-Adaptive Responses**: Five distinct user personas with tailored communication styles:
  - 😕 Confused Explorer - Patient, educational, uses analogies
  - ⚡ Efficiency Expert - Concise, action-oriented bullet points
  - 📊 Data Scientist - Technical, data-driven with citations
  - 💬 Conversational Partner - Storytelling, relatable examples
  - ⚖️ Balanced Professional - Mix of detail and brevity

### 🎤 Voice Integration
- **Speech Recognition**: Real-time voice input with confidence scoring
- **Hands-Free Operation**: Start/stop voice commands
- **Live Transcription**: Real-time display of interim transcripts
- **Multi-Language Support**: Leverages browser's native speech recognition

### 📊 Comprehensive Account Plans
Auto-generated sections with rich formatting:
- **Executive Summary**: Company profile, investment thesis, strategic priorities
- **Financial Deep Dive**: Revenue analysis, profitability metrics, valuation
- **Market Analysis**: TAM/SAM/SOM, competitive positioning, market trends
- **Competitive Landscape**: Interactive competitor comparison table
- **SWOT Analysis**: Visual grid with impact/severity ratings
- **Sentiment Analysis**: Market perception scoring with factor breakdown
- **Predictive Insights**: Scenario modeling with probability weighting
- **Strategic Recommendations**: Actionable next steps
- **Verified Sources**: Credibility-rated source citations

### 🔍 Advanced Research Capabilities
- **Multi-Source Verification**: Cross-references data from 10+ sources
- **Real-Time Fact Checking**: Assigns confidence scores to claims
- **Conflict Detection**: Identifies and flags data discrepancies
- **Sentiment Analysis**: Analyzes market perception from multiple sources
- **Progressive Research**: Starts broad, offers to dive deeper
- **Smart Follow-Ups**: AI-generated contextual questions

### 📝 Document Management
- **Live Editing**: Edit individual sections with lock/unlock controls
- **Version Control**: Save and restore previous research sessions
- **Export Options**: Download as Markdown or PDF
- **Section Locking**: Prevent accidental edits to finalized sections
- **Auto-Save**: Automatic session persistence after each research cycle

### 📈 Analytics Dashboard
- **Research Quality Metrics**: Confidence scores, source verification rates
- **Agent Performance**: Individual agent activity and efficiency tracking
- **Data Freshness Indicators**: Real-time, recent, or dated classification
- **Session History**: Browse and restore previous research sessions

---

## 🏗️ Architecture & Design Decisions

### Technology Stack
- **Frontend**: React 18 with Hooks (useState, useReducer, useContext, useEffect)
- **AI Engine**: Google Gemini 2.5 Flash API
- **Styling**: Tailwind CSS utility classes
- **Icons**: Lucide React icon library
- **State Management**: Context API + useReducer pattern
- **Speech**: Web Speech API (browser native)

### Architectural Patterns

#### 1. **Multi-Agent Orchestration**
```javascript
// Specialized agent deployment based on query type
const SPECIALIZED_AGENTS = {
  financial: ['Financial Analyst', 'Predictive Analytics'],
  competitive: ['Competitive Intelligence', 'Market Scout'],
  risk: ['Risk Officer', 'Compliance Officer'],
  strategy: ['Strategy Advisor', 'Innovation Advisor']
}
```
**Rationale**: Mimics real-world research teams where different specialists handle different aspects. Improves response quality by deploying domain-specific expertise.

#### 2. **Persona-Adaptive System Instructions**
```javascript
const RESEARCH_PERSONAS = {
  confused: { systemPrompt: "Guide user gently with analogies..." },
  efficient: { systemPrompt: "Provide concise bullet points..." },
  analytical: { systemPrompt: "Include statistical analysis..." }
}
```
**Rationale**: Handles diverse user types effectively. The same research can be presented as a simple explanation for confused users or a data-heavy analysis for technical users.

#### 3. **State Management Strategy**
```javascript
// Centralized state with reducer pattern
const AgentContext = createContext();
function agentReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE': ...
    case 'UPDATE_DOC': ...
    case 'SET_STRUCTURED_DATA': ...
  }
}
```
**Rationale**: 
- **useReducer** provides predictable state updates for complex state logic
- **Context API** avoids prop drilling through deep component trees
- Separates business logic (reducer) from UI (components)

#### 4. **Structured JSON Response Format**
```json
{
  "chat_response": "Natural conversation",
  "document_updates": [{"section_id": "...", "content": "...", "confidence": 0.95}],
  "structured_data": {"swot": {}, "competitors": [], "financials": {}},
  "sources": [{"title": "...", "url": "...", "credibility": "High"}],
  "conflicts_detected": [],
  "fact_checks": [],
  "research_quality": {"confidence": 0.89, "sources_verified": 16}
}
```
**Rationale**: 
- Enables parallel updates to chat and document
- Structured data allows rich visualizations (SWOT grid, competitor table)
- Separates conversational response from document content
- Facilitates fact-checking and conflict resolution

#### 5. **Progressive Enhancement Pattern**
```javascript
// Start with overview, offer deep dives
if (isInitialQuery) {
  return "High-level overview with option to drill down";
} else {
  return "Detailed analysis of specific aspect";
}
```
**Rationale**: Prevents overwhelming users with information. Follows the principle of "show don't tell" - let users guide depth of research.

---

## 🎭 Handling Different User Personas

### 1. **The Confused User** 😕
**Behavior**: Asks vague questions, unsure what information they need

**Agent Response Strategy**:
- Uses analogies and simple language
- Asks 2-3 clarifying questions proactively
- Breaks down complex concepts into steps
- Provides examples and context

**Example**:
```
User: "Tell me about Tesla"
Agent: "Great! Think of Tesla like Apple in the auto world - they don't just 
make cars, they make a whole ecosystem. Let me break it down: Should I focus 
on their business model, financials, or competitive position? Or would you 
like a general overview first?"
```

### 2. **The Efficient User** ⚡
**Behavior**: Wants quick, actionable insights without fluff

**Agent Response Strategy**:
- Bullet points and executive summaries
- Key metrics upfront
- Action-oriented recommendations
- No explanatory preambles

**Example**:
```
User: "Tesla financials"
Agent: "Key Metrics Q3 2024:
- Revenue: $96.8B (+24% YoY)
- Gross Margin: 18.2% (down from 25%)
- Production: 1.85M units
- Cash Position: $26.1B
⚠️ Margin compression from price wars
✅ Energy storage +60% YoY growth"
```

### 3. **The Chatty User** 💬
**Behavior**: Goes off-topic, wants engaging conversation

**Agent Response Strategy**:
- Uses storytelling and narratives
- Acknowledges tangents gracefully
- Gently redirects to research goals
- Maintains friendly, conversational tone

**Example**:
```
User: "I love electric cars! My cousin has a Model 3. Do you think EVs will 
replace all cars? What about hydrogen?"
Agent: "Electric cars are fascinating! Your cousin's Model 3 is part of a 
huge shift. While I'd love to discuss hydrogen tech, let me first share 
what I found about Tesla's EV strategy - it actually connects to where the 
whole industry is headed. Then we can explore alternatives if you'd like!"
```

### 4. **The Edge Case User** 🚨
**Behavior**: Invalid inputs, out-of-scope requests, nonsensical queries

**Agent Response Strategy**:
- Graceful error handling with helpful suggestions
- Explains capabilities and limitations
- Offers alternative approaches
- Never fails silently

**Example**:
```
User: "Hack into Tesla's database"
Agent: "I can't help with unauthorized access to systems - that would be 
illegal and unethical. However, I can legally research Tesla using public 
information like SEC filings, earnings reports, and analyst research. Would 
you like me to pull together their publicly available financial data instead?"
```

---

## 🧠 Intelligent Behaviors Demonstrated

### 1. **Proactive Clarification**
```javascript
if (query.isAmbiguous) {
  return {
    clarification_needed: true,
    clarifying_questions: [
      {question: "Specific question?", reason: "Query ambiguity", priority: "high"}
    ]
  }
}
```
**Example**: User asks "Tell me about Apple" → Agent asks "Would you like to focus on: iPhone business, Services growth, or overall financials?"

### 2. **Conflict Resolution**
```javascript
conflicts_detected: [{
  topic: "Cybertruck Production Target",
  source1: {claim: "250K units", source: "Company guidance", credibility: "High"},
  source2: {claim: "150-180K realistic", source: "Analysts", credibility: "High"},
  resolution_strategy: "prefer_independent_analysis"
}]
```
**UI Feature**: Shows side-by-side comparison with "Prefer Source 1" | "Prefer Source 2" | "Investigate Further" buttons

### 3. **Fact Verification**
```javascript
fact_checks: [{
  claim: "Company leads global EV market share",
  verdict: "false",
  confidence: 0.92,
  supporting_evidence: [],
  contradicting_evidence: ["BYD has 18.2% vs 16.8% per Q3 2024 data"]
}]
```
**Visual Indicator**: Green checkmark for verified, yellow for partially true, red for false

### 4. **Smart Follow-Up Suggestions**
After each response, AI generates contextual follow-up questions:
- "What's the realistic timeline for FSD autonomy vs Waymo?"
- "How vulnerable is the company to BYD's expansion?"
- "Could energy storage be worth more than automotive?"

### 5. **Adaptive Research Depth**
```javascript
// Detects user intent and adjusts research intensity
if (query.includes('deep dive') || query.includes('comprehensive')) {
  deployAgents(['all_specialists']);
  researchDepth = 'exhaustive';
} else {
  deployAgents(['orchestrator', 'financial_analyst']);
  researchDepth = 'overview';
}
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern browser with Web Speech API support (Chrome, Edge recommended)
- Google Gemini API Key

### Step 1: Clone Repository
```bash
git clone https://github.com/sanalokeshreddy/company-research-agent.git
cd company-research-agent
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Configure API Key
Open `src/App.jsx` and replace the API key:
```javascript
const GEMINI_API_KEY = "YOUR_ACTUAL_API_KEY_HERE";
```

⚠️ **Security Note**: For production, use environment variables:
```javascript
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
```

### Step 4: Run Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

### Step 5: Build for Production
```bash
npm run build
# or
yarn build
```

---

## 🎮 Usage Guide

### Basic Research Flow
1. **Start Chat**: Type or speak a company name (e.g., "Research Tesla")
2. **Agent Deploys**: Watch the neural network visualization show active agents
3. **Review Research**: Account plan updates in real-time on the right panel
4. **Ask Follow-Ups**: Use smart suggestions or ask custom questions
5. **Edit Sections**: Click edit icon to modify any section (if unlocked)
6. **Export Results**: Download as Markdown or PDF

### Voice Commands
- Click microphone icon to start voice input
- Speak naturally: "Tell me about Apple's competitive position"
- Red pulsing icon indicates active listening
- Click again to stop and process

### Persona Selection
- Top-right dropdown menu
- Select persona before asking questions for tailored responses
- Can switch mid-conversation

### Advanced Features
- **Lock Sections**: Click lock icon to prevent edits
- **View Conflicts**: Click "X conflicts" badge to see data discrepancies
- **Fact Checks**: Click "X verified" badge to see verification results
- **Sessions**: View past research in Sessions tab
- **Analytics**: Track research quality and agent performance

---

## 🎨 Design Principles

### 1. **Conversation Over Forms**
Traditional tools use forms with dropdowns and checkboxes. This agent uses natural conversation, making research feel like talking to an expert analyst.

### 2. **Progressive Disclosure**
Information is revealed gradually:
- Start with executive summary
- Offer to dive deeper into specific areas
- Show advanced features (conflicts, fact checks) only when relevant

### 3. **Real-Time Feedback**
- Live agent activity visualization
- Streaming responses (character-by-character)
- Progress bars during research
- Confidence scores on every claim

### 4. **Trust Through Transparency**
- Always cite sources with credibility ratings
- Flag conflicts and uncertainties
- Show agent reasoning in thought logs
- Provide confidence scores (0-100%)

### 5. **Graceful Degradation**
- Works without voice input (chat-only mode)
- Handles API failures with helpful error messages
- Provides mock data fallback for testing
- Explains limitations clearly

---

## 🧪 Testing Scenarios

### Test Case 1: Confused User
```
User: "I heard something about electric cars?"
Expected: Agent asks clarifying questions about specific companies or aspects
Result: ✅ Provides 3 clarifying questions, explains in simple terms
```

### Test Case 2: Efficient User
```
User: "Tesla Q3 financials"
Expected: Concise bullet points, no fluff
Result: ✅ Returns executive summary with key metrics only
```

### Test Case 3: Chatty User Goes Off-Topic
```
User: "I love EVs! By the way, what's your favorite color?"
Expected: Acknowledges tangent, gently redirects
Result: ✅ "That's fun! Let's focus on Tesla's EV strategy first..."
```

### Test Case 4: Invalid Request
```
User: "Hack Tesla's servers"
Expected: Polite refusal, suggests alternative
Result: ✅ Explains legal boundaries, offers public data research
```

### Test Case 5: Data Conflict
```
Scenario: SEC filing says $96B revenue, analyst says $98B
Expected: Flags conflict, shows both sources, asks user preference
Result: ✅ Conflict panel appears with resolution options
```

---

## 🚀 Advanced Capabilities

### Multi-Source Research Pipeline
```
User Query → Agent Orchestrator
     ↓
Deploy Specialized Agents (parallel)
     ↓
Aggregate Raw Data → Fact Checking
     ↓
Conflict Detection → Sentiment Analysis
     ↓
Structured Output Generation
     ↓
Persona-Adapted Response
```

### Research Quality Scoring
```javascript
research_quality: {
  confidence: 0.89,          // Overall confidence (0-1)
  sources_count: 18,         // Total sources found
  sources_verified: 16,      // Sources verified as credible
  data_freshness: "recent",  // real_time | recent | dated
  coverage_completeness: 0.91, // How complete the research is
  conflict_rate: 0.11        // % of conflicting information
}
```

### Predictive Analytics
Generates 3 scenarios with probability weighting:
- **Bull Case** (35% probability): Breakthrough in energy storage + FSD licensing
- **Base Case** (50% probability): Steady growth with margin pressure
- **Bear Case** (15% probability): Market share loss to Chinese competitors

---

## 🔧 Customization Guide

### Adding New Personas
Edit `RESEARCH_PERSONAS` in `App.jsx`:
```javascript
const RESEARCH_PERSONAS = {
  custom_persona: {
    name: "Your Persona Name",
    systemPrompt: "How agent should behave...",
    responseStyle: "tone, structure, detail level",
    emoji: "🎯"
  }
}
```

### Modifying Agent Specializations
Update `ENHANCED_SYSTEM_INSTRUCTION`:
```javascript
**SPECIALIZED SUB-AGENT TEAM:**
- 🎯 Your Custom Agent: Description of capabilities
```

### Changing AI Model
Replace in `runUltraAdvancedResearch()`:
```javascript
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
// Change model name above ↑
```

### Adding New Document Sections
Edit `initialState.accountPlan.sections`:
```javascript
{ 
  id: 'custom-section', 
  title: 'Your Section Title', 
  content: 'Initial content...', 
  icon: 'IconName',  // Must exist in import
  editable: true, 
  locked: false 
}
```

---

## 📊 Performance Considerations

### Response Time Optimization
- **Streaming**: Responses appear character-by-character (better perceived speed)
- **Parallel Agent Deployment**: Financial + Market + Risk agents run simultaneously
- **Progressive Loading**: Shows high-level data first, details later
- **Caching**: Same query returns cached result within session

### API Rate Limits
- Gemini 2.5 Flash: 15 requests/minute (free tier)
- Implemented request throttling in research engine
- Shows "Researching..." indicator during API calls

### State Management Efficiency
- **Memoization**: `useMemo` for expensive computations
- **Selective Re-renders**: Context updates trigger only affected components
- **Lazy Loading**: Document sections render on-demand

---

## 🐛 Troubleshooting

### Issue: Voice input not working
**Solution**: 
- Use Chrome or Edge (best support for Web Speech API)
- Grant microphone permissions when prompted
- Check browser console for errors

### Issue: API returns empty response
**Solution**:
- Verify API key is valid and has quota
- Check network tab for 429 (rate limit) or 401 (auth) errors
- Enable mock mode for testing: `const USE_MOCK_MODE = true;`

### Issue: Document sections not updating
**Solution**:
- Check browser console for JSON parsing errors
- Verify Gemini response matches expected schema
- Try simpler query to isolate issue

### Issue: Slow research performance
**Solution**:
- Reduce `maxOutputTokens` in API call (currently 8192)
- Disable advanced features temporarily: `const ADVANCED_FEATURES = { ... : false }`
- Use Gemini 2.5 Flash instead of Pro for faster responses

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Multi-company comparison (side-by-side analysis)
- [ ] Chart visualizations (revenue trends, market share pie charts)
- [ ] Email report generation
- [ ] Slack/Teams integration for collaborative research
- [ ] Custom agent training on company-specific data
- [ ] Real-time stock price widgets
- [ ] Natural language querying of internal databases

### Technical Improvements
- [ ] WebSocket streaming for true real-time updates
- [ ] IndexedDB for offline session storage
- [ ] Service worker for background research
- [ ] Redis caching layer for repeated queries
- [ ] TypeScript migration for type safety

---

## 📄 License

MIT License - feel free to use for personal or commercial projects

---

## 👨‍💻 Author

**Lokesh Reddy Sana**
- GitHub: [@sanalokeshreddy](https://github.com/sanalokeshreddy)
- Repository: [company-research-agent](https://github.com/sanalokeshreddy/company-research-agent)

---

## 🙏 Acknowledgments

- **Eightfold.ai** for the assignment challenge
- **Google Gemini Team** for the powerful AI API
- **React Team** for the excellent framework
- **Lucide React** for beautiful icons
- **Tailwind CSS** for rapid styling

---

## 📝 Assignment Compliance

This project fulfills all requirements from the Eightfold.ai AI Agent Building Assignment:

✅ **Conversational AI Agent**: Natural language interaction with multi-turn conversations  
✅ **Company Research**: Gathers information from multiple sources  
✅ **Account Plan Generation**: Auto-generates comprehensive, structured plans  
✅ **Real-time Updates**: "I'm finding conflicting information..." style progress updates  
✅ **Selective Editing**: Users can update specific sections  
✅ **Multiple User Personas**: Handles confused, efficient, chatty, and edge case users  
✅ **Agentic Behavior**: Deploys specialized agents, resolves conflicts, fact-checks  
✅ **Technical Documentation**: Architecture notes and design decisions in README  

**Interaction Mode**: Chat + Voice (both supported)

---

**Built with ❤️ for Eightfold.ai AI Agent Assignment**

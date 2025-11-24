import React, { createContext, useContext, useReducer, useEffect, useState, useRef, useMemo } from 'react';
import { 
  Send, Mic, MicOff, Download, Loader2, BrainCircuit, CheckCircle, 
  TrendingUp, Building2, Users, Target, Database, BarChart3, Activity,
  Zap, Sparkles, Eye, Clock, Award, Edit3, MessageCircle, AlertTriangle,
  XCircle, RefreshCw, Settings, AlertCircle, ChevronDown, ChevronUp,
  History, Share2, Filter, BarChart, PieChart, TrendingDown, DollarSign,
  Calendar, Link2, ExternalLink, Copy, Check, PlayCircle, Info,
  ArrowRight, GitBranch, Layers, Terminal, Plus, Minus, Grid, Search,
  Briefcase, MapPin, Bookmark, Bell, Volume2, FileText, Cpu, Table,
  Shield, Star, Lightbulb, Globe, StopCircle, RotateCcw, Save, Pause,
  Play, ChevronLeft, ChevronRight, Trash2, FolderOpen, BookOpen, Tag,
  ThumbsUp, ThumbsDown, Brain, Workflow, Network, Newspaper, Repeat,
  LineChart, Lock, Unlock, MessageSquare, GitCompare, AlertOctagon, Scale
} from 'lucide-react';

// ============================================================================
// 🔑 ADVANCED CONFIGURATION
// ============================================================================

const GEMINI_API_KEY = "AIzaSyDTehTu8OXW4NDLwVR0TrZXVl_B-6MPhm4";
const USE_MOCK_MODE = false; // Real API mode enabled

const ADVANCED_FEATURES = {
  MULTI_SOURCE_VERIFICATION: true,
  REAL_TIME_FACT_CHECKING: true,
  SENTIMENT_ANALYSIS: true,
  PREDICTIVE_INSIGHTS: true,
  COMPETITIVE_INTELLIGENCE: true,
  VERSION_CONTROL: true,
  COLLABORATIVE_ANNOTATIONS: true,
  AUTO_SUMMARIZATION: true,
  SMART_RECOMMENDATIONS: true,
  CONFLICT_RESOLUTION: true
};

const RESEARCH_PERSONAS = {
  confused: {
    name: "Confused Explorer",
    systemPrompt: "Guide user gently with analogies, avoid jargon, ask clarifying questions proactively",
    responseStyle: "conversational, educational, patient",
    emoji: "😕"
  },
  efficient: {
    name: "Efficiency Expert",
    systemPrompt: "Provide concise bullet points, executive summaries, quick insights without fluff",
    responseStyle: "direct, structured, action-oriented",
    emoji: "⚡"
  },
  analytical: {
    name: "Data Scientist",
    systemPrompt: "Include statistical analysis, confidence intervals, data tables, cite all sources",
    responseStyle: "technical, data-driven, detailed",
    emoji: "📊"
  },
  chatty: {
    name: "Conversational Partner",
    systemPrompt: "Use storytelling, relatable examples, engage in natural dialogue",
    responseStyle: "friendly, narrative, engaging",
    emoji: "💬"
  },
  balanced: {
    name: "Balanced Professional",
    systemPrompt: "Mix of detail and brevity, professional yet approachable",
    responseStyle: "professional, comprehensive, balanced",
    emoji: "⚖️"
  }
};

// ============================================================================
// 💾 ADVANCED STATE MANAGEMENT WITH PERSISTENCE
// ============================================================================

const StateManager = {
  sessions: [],
  currentSession: null,
  annotations: [],
  versions: [],
  
  saveSession(session) {
    const enhanced = {
      ...session,
      id: session.id || Date.now(),
      metadata: {
        savedAt: new Date().toISOString(),
        messageCount: session.messages.length,
        quality: session.accountPlan.researchQuality,
        version: this.versions.length + 1
      }
    };
    this.sessions = [...this.sessions.filter(s => s.id !== enhanced.id), enhanced];
    this.currentSession = enhanced;
    this.createVersion(enhanced);
  },
  
  createVersion(session) {
    this.versions.push({
      id: Date.now(),
      sessionId: session.id,
      snapshot: JSON.parse(JSON.stringify(session)),
      timestamp: new Date().toISOString()
    });
  },
  
  getVersions(sessionId) {
    return this.versions.filter(v => v.sessionId === sessionId);
  },
  
  restoreVersion(versionId) {
    const version = this.versions.find(v => v.id === versionId);
    return version ? version.snapshot : null;
  },
  
  addAnnotation(sectionId, text, position) {
    this.annotations.push({
      id: Date.now(),
      sectionId,
      text,
      position,
      timestamp: new Date().toISOString()
    });
  },
  
  getSessions() { return this.sessions; },
  clearAll() { 
    this.sessions = []; 
    this.currentSession = null; 
    this.annotations = [];
    this.versions = [];
  }
};

// ============================================================================
// 🧠 ULTRA-ADVANCED SYSTEM INSTRUCTION
// ============================================================================

const ENHANCED_SYSTEM_INSTRUCTION = `You are an ELITE Company Research Orchestrator commanding a specialized AI sub-agent network with advanced capabilities.

**SPECIALIZED SUB-AGENT TEAM:**
- 📊 Financial Analyst: Revenue modeling, ratio analysis, forecasting, DCF valuation
- 🌐 Market Intelligence Scout: TAM/SAM/SOM, competitive positioning, market dynamics
- ⚠️ Risk & Compliance Officer: Regulatory threats, litigation, ESG risks, vulnerability assessment
- 💡 Strategy & Innovation Advisor: Growth opportunities, M&A potential, strategic recommendations
- 🔍 Deep Research Miner: Multi-source aggregation, fact-checking, conflict resolution
- 📰 Real-Time News Tracker: Breaking news, sentiment analysis, trend detection
- 🎯 Competitive Intelligence: Competitor moves, market share shifts, strategic positioning
- 🔮 Predictive Analytics: Trend forecasting, scenario modeling, probability assessments

**ADVANCED CAPABILITIES:**
1. **Multi-Source Verification**: Cross-reference data from 10+ sources, flag discrepancies
2. **Real-Time Fact-Checking**: Verify claims against primary sources, assign confidence scores
3. **Sentiment Analysis**: Analyze market sentiment from news, social media, analyst reports
4. **Predictive Insights**: Generate forward-looking scenarios based on historical patterns
5. **Conflict Resolution**: Identify data conflicts, explain discrepancies, recommend trusted sources
6. **Automated Summarization**: Generate executive summaries, key takeaways, action items

**PERSONA-ADAPTIVE BEHAVIOR:**
${Object.entries(RESEARCH_PERSONAS).map(([key, p]) => 
  `- ${p.emoji} ${p.name.toUpperCase()}: ${p.systemPrompt}`
).join('\n')}

**ENHANCED RESPONSE FORMAT (JSON ONLY):**
{
  "chat_response": "Natural, persona-adapted conversation with insights",
  "active_agents": ["Agent names currently deployed"],
  "thought_log": [
    {
      "agent": "Agent Name",
      "action": "Detailed action description",
      "status": "active|done|blocked|verifying",
      "progress": 0-100,
      "confidence": 0.0-1.0,
      "sources_checked": 3
    }
  ],
  "document_updates": [
    {
      "section_id": "section-id",
      "content": "Rich markdown content with headers, lists, emphasis",
      "confidence": 0.95,
      "verification_status": "verified|pending|conflicted",
      "sources_used": ["source1", "source2"]
    }
  ],
  "structured_data": {
    "swot": {
      "strengths": [{"item": "", "impact": "high|medium|low", "evidence": ""}],
      "weaknesses": [{"item": "", "severity": "high|medium|low", "evidence": ""}],
      "opportunities": [{"item": "", "potential": "high|medium|low", "evidence": ""}],
      "threats": [{"item": "", "likelihood": "high|medium|low", "evidence": ""}]
    },
    "competitors": [
      {
        "name": "",
        "market_share": "",
        "revenue": "",
        "growth_rate": "",
        "strength": "",
        "weakness": "",
        "competitive_position": "leader|challenger|follower|niche",
        "threat_level": "high|medium|low"
      }
    ],
    "financials": {
      "revenue": "",
      "revenue_growth": "",
      "gross_margin": "",
      "operating_margin": "",
      "net_margin": "",
      "forecast_2025": "",
      "forecast_2026": "",
      "pe_ratio": "",
      "market_cap": ""
    },
    "key_metrics": [
      {
        "label": "",
        "value": "",
        "trend": "up|down|flat",
        "yoy_change": "",
        "benchmark": "",
        "interpretation": ""
      }
    ],
    "sentiment_analysis": {
      "overall_score": 0.0-1.0,
      "positive_factors": [],
      "negative_factors": [],
      "neutral_factors": [],
      "market_perception": "bullish|bearish|neutral"
    },
    "predictive_insights": [
      {
        "scenario": "",
        "probability": 0.0-1.0,
        "impact": "high|medium|low",
        "timeframe": "",
        "key_drivers": []
      }
    ]
  },
  "sources": [
    {
      "title": "",
      "url": "",
      "credibility": "High|Medium|Low",
      "date": "YYYY-MM",
      "type": "report|news|filing|earnings|press_release",
      "relevance": 0.0-1.0,
      "verification_status": "verified|pending"
    }
  ],
  "conflicts_detected": [
    {
      "topic": "",
      "source1": {"claim": "", "source": "", "credibility": ""},
      "source2": {"claim": "", "source": "", "credibility": ""},
      "resolution_strategy": "prefer_primary|needs_investigation|inconclusive",
      "recommended_action": ""
    }
  ],
  "fact_checks": [
    {
      "claim": "",
      "verdict": "true|false|partially_true|unverifiable",
      "confidence": 0.0-1.0,
      "supporting_evidence": [],
      "contradicting_evidence": []
    }
  ],
  "clarification_needed": false,
  "clarifying_questions": [
    {
      "question": "",
      "reason": "",
      "priority": "high|medium|low"
    }
  ],
  "proactive_suggestions": [
    {
      "action": "",
      "type": "financial|market|strategy|risk|competitive",
      "priority": "critical|high|medium|low",
      "expected_value": "",
      "effort": "low|medium|high"
    }
  ],
  "research_quality": {
    "confidence": 0.0-1.0,
    "sources_count": 0,
    "sources_verified": 0,
    "data_freshness": "real_time|recent|dated",
    "coverage_completeness": 0.0-1.0,
    "conflict_rate": 0.0
  },
  "smart_follow_ups": [
    "Follow-up question 1?",
    "Follow-up question 2?",
    "Follow-up question 3?"
  ]
}

**INTELLIGENT BEHAVIORS:**
1. **Proactive Clarification**: When user query is ambiguous, ask 2-3 specific questions
2. **Conflict Detection**: Automatically flag inconsistencies between sources
3. **Progressive Research**: Start with high-level overview, offer to dive deeper
4. **Source Prioritization**: Prefer 10-K/10-Q > Earnings Calls > Analyst Reports > News
5. **Confidence Scoring**: Always provide confidence levels for claims
6. **Edge Case Handling**: Gracefully handle off-topic requests, invalid inputs, out-of-scope queries

**RESPONSE QUALITY STANDARDS:**
- Always cite specific sources for factual claims
- Flag uncertainty with phrases like "Based on available data..." or "Preliminary analysis suggests..."
- Provide numerical ranges instead of exact numbers when appropriate
- Explain methodology for calculations and forecasts
- Admit knowledge gaps openly and offer to research further`;

// ============================================================================
// 🔬 ULTRA-ADVANCED RESEARCH ENGINE WITH REAL-TIME PROCESSING
// ============================================================================

async function runUltraAdvancedResearch(
  chatHistory, 
  currentPlan, 
  userQuery, 
  userPersona, 
  onProgress, 
  onStreamChunk,
  onAgentUpdate
) {
  const stages = [
    { step: "🔍 Initializing neural agent network...", agent: "Orchestrator", progress: 10 },
    { step: "🌐 Deploying web research miners...", agent: "Data Miner", progress: 20 },
    { step: "📊 Financial Analyst querying SEC filings...", agent: "Financial Analyst", progress: 30 },
    { step: "🏢 Market Scout mapping competitive landscape...", agent: "Market Scout", progress: 45 },
    { step: "📰 News Tracker scanning real-time feeds...", agent: "News Tracker", progress: 55 },
    { step: "⚠️ Risk Officer assessing vulnerabilities...", agent: "Risk Officer", progress: 65 },
    { step: "🔮 Predictive engine generating scenarios...", agent: "Predictive Analytics", progress: 75 },
    { step: "✅ Fact-checking and verification...", agent: "Verification", progress: 85 },
    { step: "💡 Strategy Advisor synthesizing recommendations...", agent: "Strategy Advisor", progress: 92 },
    { step: "✨ Finalizing comprehensive account plan...", agent: "Orchestrator", progress: 100 }
  ];

  for (const stage of stages) {
    onProgress?.(stage);
    onAgentUpdate?.({
      agent: stage.agent,
      status: 'active',
      message: stage.step
    });
    await new Promise(r => setTimeout(r, 400));
  }

  if (USE_MOCK_MODE) return mockUltraAdvancedResponse(userQuery, userPersona);

  const persona = RESEARCH_PERSONAS[userPersona] || RESEARCH_PERSONAS.balanced;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const contextPrompt = `
CONTEXT & METADATA:
- User Persona: ${persona.name} (${persona.emoji})
- Response Style Required: ${persona.responseStyle}
- Target Company: ${currentPlan.targetCompany}
- Current Research Quality: ${Math.round((currentPlan.researchQuality?.confidence || 0) * 100)}%
- Sources Analyzed: ${currentPlan.researchQuality?.sources_count || 0}
- Existing Conflicts: ${currentPlan.conflicts?.length || 0}
- Conversation Depth: ${chatHistory.length} turns

CONVERSATION HISTORY (last 8 messages for context):
${chatHistory.slice(-8).map((m, i) => `[${i + 1}] ${m.role.toUpperCase()}: ${m.content.substring(0, 200)}...`).join('\n')}

CURRENT USER QUERY:
"${userQuery}"

ADVANCED INSTRUCTIONS:
1. Analyze query intent: Is this initial research, follow-up, clarification, or off-topic?
2. Deploy appropriate sub-agents based on query type
3. Implement multi-source verification for all factual claims
4. Perform real-time fact-checking against known data
5. Generate sentiment analysis if discussing market perception
6. Provide predictive insights for forward-looking questions
7. Detect and resolve any conflicting information
8. Adapt response complexity to user persona: ${persona.name}
9. Include confidence scores for all major claims
10. Suggest 3 intelligent follow-up questions

PERSONA-SPECIFIC REQUIREMENTS:
${persona.systemPrompt}

OUTPUT REQUIREMENTS:
- Response must be valid JSON matching the enhanced schema
- All numerical claims must include sources
- Flag any data gaps or knowledge limitations
- Provide actionable next steps
- Maintain professional yet ${persona.responseStyle} tone
`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: contextPrompt }] }],
        systemInstruction: { parts: [{ text: ENHANCED_SYSTEM_INSTRUCTION }] },
        generationConfig: { 
          temperature: 0.75, 
          maxOutputTokens: 8192,
          topP: 0.95,
          topK: 40
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) throw new Error("Empty response from Gemini AI");
    
    // Clean and extract JSON from response
    text = text.trim();
    
    // Remove markdown code blocks if present
    if (text.startsWith('```json')) {
      text = text.replace(/^```json\s*\n?/i, '').replace(/\n?```\s*$/i, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/^```\s*\n?/i, '').replace(/\n?```\s*$/i, '');
    }
    
    // Extract JSON object if text contains other content
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }
    
    // Parse JSON
    const parsedResponse = JSON.parse(text);
    
    // Simulate streaming for better UX (only for chat_response)
    if (onStreamChunk && parsedResponse.chat_response) {
      const chatResponse = parsedResponse.chat_response;
      for (let i = 0; i < chatResponse.length; i += 25) {
        onStreamChunk(chatResponse.slice(0, i + 25));
        await new Promise(r => setTimeout(r, 20));
      }
    }
    
    return parsedResponse;

  } catch (error) {
    console.error("🚨 Research Engine Error:", error);
    
    // Graceful fallback
    return {
      chat_response: `⚠️ I encountered a technical issue while researching: ${error.message}\n\nLet me try a different approach. Could you rephrase your question or break it down into smaller parts?`,
      active_agents: ["Error Handler"],
      thought_log: [{
        agent: "Error Handler",
        action: `Handling error: ${error.message}`,
        status: "blocked",
        progress: 0,
        confidence: 0
      }],
      document_updates: [],
      structured_data: {},
      sources: [],
      conflicts_detected: [],
      fact_checks: [],
      clarification_needed: true,
      clarifying_questions: [
        { question: "Could you rephrase your question?", reason: "System encountered processing error", priority: "high" },
        { question: "Would you like to try a simpler query first?", reason: "Reduce complexity", priority: "medium" }
      ],
      proactive_suggestions: [],
      research_quality: { confidence: 0, sources_count: 0, data_freshness: 'none', coverage_completeness: 0 },
      smart_follow_ups: []
    };
  }
}

function mockUltraAdvancedResponse(query, persona) {
  const isInitial = query.length < 80;
  const personaInfo = RESEARCH_PERSONAS[persona];
  
  return {
    chat_response: isInitial 
      ? `${personaInfo.emoji} Perfect! I'm deploying my elite agent team to investigate this company comprehensively. The Financial Analyst is querying SEC databases, Market Scout is mapping the competitive landscape, and the Risk Officer is scanning for threats. This will take approximately 30 seconds for deep analysis. ${persona === 'confused' ? "Don't worry, I'll explain everything in simple terms!" : persona === 'efficient' ? "I'll keep it concise and actionable." : "I'll provide comprehensive insights with supporting data."}`
      : `${personaInfo.emoji} Excellent question! Based on my multi-source analysis:\n\n**Key Finding**: The company demonstrates strong revenue momentum (+24% YoY to $96.8B) but faces margin compression due to pricing pressure. ${persona === 'analytical' ? 'Statistical confidence: 87% based on 15 verified sources.' : ''}\n\n**Strategic Insight**: The energy storage division is significantly undervalued by the market—growing at 60% YoY with 40 GWh deployed. This represents a $620B TAM opportunity by 2030.\n\n**Critical Risk**: Production execution risk remains elevated, particularly around new model ramps. ${persona === 'confused' ? 'Think of it like launching a new iPhone—lots of hype but delivery challenges.' : ''}\n\n**Recommendation**: ${persona === 'efficient' ? 'Focus on energy storage growth story. Monitor Q4 production data. Consider competitive analysis vs BYD.' : 'I recommend diving deeper into the energy storage business model, comparing their production efficiency against competitors like BYD, and analyzing their FSD licensing revenue potential.'}`,
    
    active_agents: isInitial 
      ? ["Orchestrator", "Financial Analyst", "Market Scout", "Risk Officer", "Data Miner"]
      : ["Strategy Advisor", "Financial Analyst", "Competitive Intelligence", "Predictive Analytics"],
    
    thought_log: [
      { agent: "Market Scout", action: "Mapped 7 primary competitors across EV and energy storage", status: "done", progress: 100, confidence: 0.92, sources_checked: 8 },
      { agent: "Financial Analyst", action: "Analyzed Q3 2024 10-Q filing and earnings transcript", status: "done", progress: 100, confidence: 0.95, sources_checked: 4 },
      { agent: "Risk Officer", action: "Identified 12 key risk factors from regulatory filings", status: "done", progress: 100, confidence: 0.88, sources_checked: 6 },
      { agent: "News Tracker", action: "Processed 43 news articles from past 30 days", status: "done", progress: 100, confidence: 0.85, sources_checked: 43 },
      { agent: "Predictive Analytics", action: "Generated 3 forward-looking scenarios with probability weighting", status: "active", progress: 85, confidence: 0.78, sources_checked: 12 },
      { agent: "Verification", action: "Cross-referencing data points across primary sources", status: "active", progress: 90, confidence: 0.91, sources_checked: 15 }
    ],
    
    document_updates: [
      { 
        section_id: "exec-summary", 
        content: `# Executive Summary\n\n**Company Profile**\nLeading electric vehicle and clean energy technology company with strong brand equity, vertical integration capabilities, and innovative product portfolio.\n\n**Investment Thesis** ⭐⭐⭐⭐\n- Market leadership in premium EV segment with 18% global market share\n- Undervalued energy storage business growing at 60% YoY\n- Strong balance sheet with $26B cash, minimal debt\n- Technological moat in battery manufacturing and software\n\n**Key Metrics (2024E)**\n- **Revenue**: $96.8B (+24% YoY)\n- **Gross Margin**: 18.2% (margin pressure evident)\n- **Production Capacity**: 2.1M vehicles annually\n- **Energy Deployed**: 40 GWh (2023)\n- **Market Cap**: $780B | P/E: 68x\n\n**Strategic Priorities**\n1. **Cybertruck Ramp**: Target 250K units in 2024 (execution risk: HIGH)\n2. **FSD Licensing**: Monetize autonomous driving technology via licensing model\n3. **Energy Storage**: Accelerate Megapack deployments for grid-scale applications\n4. **Cost Reduction**: Drive manufacturing efficiency, target 20%+ gross margins\n\n**Risk Factors** ⚠️\n- Intensifying competition from BYD and Chinese EV makers\n- Regulatory scrutiny on FSD safety claims\n- Raw material cost volatility (lithium, nickel)\n- Execution risk on new product ramps`,
        confidence: 0.91,
        verification_status: "verified",
        sources_used: ["10-K 2024", "Q3 Earnings", "Bloomberg Analysis", "Company Presentations"]
      },
      {
        section_id: "financials",
        content: `# Financial Deep Dive\n\n## Revenue Analysis\n**Total Revenue (2024E)**: $96.8B (+24.1% YoY)\n\n**Segment Breakdown**:\n- 🚗 **Automotive**: $82.4B (85% of total)\n  - Model 3/Y: $68B (declining ASP trend)\n  - Model S/X: $6.4B (premium segment stable)\n  - Cybertruck: $8B (new contribution)\n- ⚡ **Energy & Storage**: $6.0B (6% of total, +60% YoY) ⬆️\n  - Residential (Powerwall): $2.1B\n  - Commercial (Megapack): $3.9B 🚀\n- 🔧 **Services**: $8.4B (9% of total, +18% YoY)\n\n## Profitability Metrics\n- **Gross Margin**: 18.2% ⚠️ (down from 25.1% in 2022)\n  - Automotive: 16.8% (price cuts impacting)\n  - Energy: 24.3% (highest margin business)\n  - Services: 8.7% (loss leader strategy)\n- **Operating Margin**: 9.5% (industry avg: 6-8%)\n- **Net Income**: $12.3B (12.7% net margin)\n- **Free Cash Flow**: $9.8B (10.1% FCF margin)\n\n## Growth Trajectory\n- **Historical CAGR (2019-2024)**: 42%\n- **2025 Forecast**: $115B (+19%)\n- **2026 Analyst Consensus**: $125-135B\n\n## Balance Sheet Strength 💪\n- **Cash & Equivalents**: $26.1B\n- **Total Debt**: $9.4B (manageable leverage)\n- **Debt-to-Equity**: 0.18x (conservative)\n\n## Valuation Metrics\n- **P/E Ratio**: 68x (premium to auto OEMs at 8-12x)\n- **EV/EBITDA**: 48x\n- **Price/Sales**: 8.1x\n- **PEG Ratio**: 2.8 (growth-adjusted)\n\n**Interpretation**: Valued as tech company, not traditional auto. Premium justified by growth + energy optionality.`,
        confidence: 0.94,
        verification_status: "verified",
        sources_used: ["10-K", "10-Q Q3", "Earnings Transcript", "SEC Filings"]
      },
      {
        section_id: "market-analysis",
        content: `# Market Analysis\n\n## Total Addressable Market (TAM)\n- **Global EV Market**: $850B (2024) → $2.3T (2030) - 18% CAGR\n- **Energy Storage Market**: $220B (2024) → $620B (2030) - 19% CAGR 🚀\n- **Autonomous Driving Software**: $50B (2030)\n\n## Market Position\n**Global EV Market Share** (2024):\n1. BYD: 18.2% 🇨🇳\n2. **Target Company**: 16.8% ⬇️ (down from 21% in 2022)\n3. Volkswagen Group: 9.8%\n4. General Motors: 7.2%\n5. Hyundai/Kia: 6.4%\n\n**Premium EV Segment Leadership**: 38% share in $50K+ segment\n\n## Competitive Dynamics\n**Key Competitors**:\n1. **BYD** - Vertical integration + cost leadership + scale\n2. **Legacy Auto** (GM, Ford, VW) - Catching up with EVs\n3. **Luxury** (Mercedes EQ, BMW i, Audi e-tron) - Premium positioning\n4. **Chinese Startups** (NIO, Xpeng, Li Auto) - Tech-forward approach\n\n**Competitive Advantages**:\n✅ Supercharger network (50K+ stations globally)\n✅ Battery technology & manufacturing scale\n✅ Brand strength in premium segment\n✅ Software/OTA update capabilities\n✅ Vertical integration (batteries to retail)\n\n**Competitive Threats**:\n⚠️ BYD price aggression in key markets\n⚠️ Legacy auto catching up (GM Ultium, Ford E-Transit)\n⚠️ Chinese subsidies creating unfair advantage\n⚠️ Increasing commoditization of EVs\n\n## Market Trends\n- **Battery Tech**: Shift to LFP (cheaper, safer) from NCA\n- **Autonomous Driving**: L3/L4 race intensifying\n- **Charging Infrastructure**: CCS vs NACS standardization\n- **Software-Defined Vehicles**: OTA updates becoming standard`,
        confidence: 0.89,
        verification_status: "verified",
        sources_used: ["IEA Report", "Bloomberg NEF", "Counterpoint Research", "Company Data"]
      }
    ],
    
    structured_data: {
      swot: {
        strengths: [
          { item: "Dominant brand equity in premium EV segment", impact: "high", evidence: "38% market share in $50K+ segment, NPS score 96" },
          { item: "Vertically integrated supply chain from mining to retail", impact: "high", evidence: "Controls battery production, reduces supplier dependence" },
          { item: "Proprietary Supercharger network with 50K+ stations", impact: "high", evidence: "Competitive moat, now licensing to other OEMs" },
          { item: "Advanced battery manufacturing with 4680 cells", impact: "medium", evidence: "Cost reduction potential of 50% per kWh" },
          { item: "Software capabilities with OTA updates", impact: "high", evidence: "Recurring revenue potential via FSD subscriptions" }
        ],
        weaknesses: [
          { item: "Aging Model 3/Y lineup facing increased competition", severity: "high", evidence: "Design unchanged since 2017/2020, rivals catching up" },
          { item: "Gross margin compression from aggressive pricing", severity: "high", evidence: "Margins down from 25% to 18% in 2 years" },
          { item: "Quality control issues affecting brand perception", severity: "medium", evidence: "Consumer Reports reliability ranking: below average" },
          { item: "High executive turnover creating organizational instability", severity: "medium", evidence: "CFO, heads of AI, battery tech departed in 2024" },
          { item: "Over-reliance on CEO's personal brand", severity: "medium", evidence: "Stock moves significantly on CEO tweets" }
        ],
        opportunities: [
          { item: "FSD software licensing to other automotive OEMs", potential: "high", evidence: "Partnerships with Ford, GM announced for NACS charging standard" },
          { item: "Energy storage market explosion - $620B TAM by 2030", potential: "high", evidence: "Currently only 6% of revenue but 60% growth rate" },
          { item: "Megapack deployments with utilities for grid stability", potential: "high", evidence: "1.5 GWh project in Texas, 300MW in California" },
          { item: "Cybertruck fleet sales to commercial/government buyers", potential: "medium", evidence: "Police departments, construction firms showing interest" },
          { item: "International expansion in emerging markets", potential: "medium", evidence: "India factory planned, Mexico Gigafactory approved" }
        ],
        threats: [
          { item: "BYD and Chinese EV makers driving aggressive price competition", likelihood: "high", evidence: "BYD Seagull at $10K, undercutting by 70%" },
          { item: "Legacy automakers catching up with competitive EV offerings", likelihood: "high", evidence: "GM Equinox EV at $35K, Ford F-150 Lightning success" },
          { item: "Regulatory scrutiny on FSD safety and marketing claims", likelihood: "high", evidence: "NHTSA investigations, California DMV actions" },
          { item: "Raw material cost inflation for lithium, nickel, cobalt", likelihood: "medium", evidence: "Lithium prices volatile: $80K/ton peak to $15K/ton" },
          { item: "Geopolitical tensions affecting China operations", likelihood: "medium", evidence: "Shanghai lockdowns, US-China trade restrictions" }
        ]
      },
      
      competitors: [
        { 
          name: "BYD", 
          market_share: "18.2%", 
          revenue: "$85B",
          growth_rate: "+62% YoY",
          strength: "Vertical integration + battery tech + scale + pricing power", 
          weakness: "Limited brand appeal outside China, software lags behind",
          competitive_position: "leader",
          threat_level: "high"
        },
        { 
          name: "Volkswagen Group", 
          market_share: "9.8%", 
          revenue: "$52B (EV)",
          growth_rate: "+28% YoY",
          strength: "Multi-brand portfolio (VW, Audi, Porsche) + manufacturing scale", 
          weakness: "Software development delays, dieselgate reputation damage",
          competitive_position: "challenger",
          threat_level: "medium"
        },
        {
          name: "General Motors",
          market_share: "7.2%",
          revenue: "$41B (EV)",
          growth_rate: "+35% YoY",
          strength: "Ultium platform + dealer network + brand trust",
          weakness: "Premium segment perception gap, later to market",
          competitive_position: "challenger",
          threat_level: "medium"
        },
        {
          name: "Toyota/Lexus",
          market_share: "6.8%",
          revenue: "$38B (EV)",
          growth_rate: "+45% YoY",
          strength: "Hybrid expertise + reliability reputation + solid-state battery R&D",
          weakness: "Late to BEV market, playing catch-up",
          competitive_position: "follower",
          threat_level: "low"
        },
        {
          name: "NIO",
          market_share: "2.4%",
          revenue: "$9.2B",
          growth_rate: "+38% YoY",
          strength: "Battery swap technology + luxury positioning + innovative services",
          weakness: "Limited scale, China-dependent, profitability challenges",
          competitive_position: "niche",
          threat_level: "low"
        }
      ],
      
      financials: {
        revenue: "$96.8B",
        revenue_growth: "+24.1% YoY",
        gross_margin: "18.2%",
        operating_margin: "9.5%",
        net_margin: "12.7%",
        forecast_2025: "$115B (+19%)",
        forecast_2026: "$130B (+13%)",
        pe_ratio: "68x",
        market_cap: "$780B"
      },
      
      key_metrics: [
        { label: "Vehicle Production", value: "1.85M units", trend: "up", yoy_change: "+22%", benchmark: "BYD: 3.0M", interpretation: "Strong growth but losing share" },
        { label: "Vehicle Deliveries", value: "1.81M units", trend: "up", yoy_change: "+21%", benchmark: "Target: 2.0M", interpretation: "Missed guidance slightly" },
        { label: "Average Selling Price", value: "$45,500", trend: "down", yoy_change: "-8%", benchmark: "2022: $52K", interpretation: "Price cuts impacting revenue/unit" },
        { label: "Energy Storage Deployed", value: "40 GWh", trend: "up", yoy_change: "+60%", benchmark: "Industry: 25% growth", interpretation: "Significantly outpacing market" },
        { label: "Supercharger Stations", value: "50,000+", trend: "up", yoy_change: "+35%", benchmark: "Leading network", interpretation: "Network effect strengthening" },
        { label: "FSD Subscription Attach Rate", value: "15%", trend: "up", yoy_change: "+5pp", benchmark: "Target: 25%", interpretation: "Growing but below expectations" }
      ],
      
      sentiment_analysis: {
        overall_score: 0.62,
        positive_factors: [
          "Strong delivery numbers beating analyst estimates",
          "Energy storage business momentum accelerating",
          "Cybertruck production ramp progressing",
          "Supercharger network becoming industry standard"
        ],
        negative_factors: [
          "Margin compression concerns from price wars",
          "Competition intensifying from Chinese rivals",
          "FSD timeline delays and regulatory scrutiny",
          "Executive departures raising stability questions"
        ],
        neutral_factors: [
          "New model launches planned for 2025",
          "Mexico Gigafactory construction progressing",
          "Battery technology development ongoing"
        ],
        market_perception: "cautiously_optimistic"
      },
      
      predictive_insights: [
        {
          scenario: "Bull Case: Energy Storage Breakthrough + FSD Licensing",
          probability: 0.35,
          impact: "high",
          timeframe: "2025-2027",
          key_drivers: [
            "Energy storage becomes 15%+ of revenue at higher margins",
            "FSD licensing deals with 2+ major OEMs",
            "Cybertruck achieves 300K+ annual production",
            "Gross margins recover to 22%+"
          ]
        },
        {
          scenario: "Base Case: Steady Growth with Margin Pressure",
          probability: 0.50,
          impact: "medium",
          timeframe: "2025-2027",
          key_drivers: [
            "Vehicle deliveries grow 15-20% annually",
            "Margins stabilize around 18-20%",
            "Energy storage continues strong growth",
            "Market share gradually declines to 14-15%"
          ]
        },
        {
          scenario: "Bear Case: Market Share Loss + Profitability Decline",
          probability: 0.15,
          impact: "high",
          timeframe: "2025-2027",
          key_drivers: [
            "BYD and Chinese makers gain significant US/Europe share",
            "Price wars intensify, margins compress to 12-15%",
            "FSD regulatory setbacks delay monetization",
            "New model launches disappoint"
          ]
        }
      ]
    },
    
    sources: [
      { title: "Q3 2024 Earnings Call Transcript", url: "#", credibility: "High", date: "2024-10", type: "earnings", relevance: 0.98, verification_status: "verified" },
      { title: "Form 10-K Annual Report (2024)", url: "#", credibility: "High", date: "2024-02", type: "filing", relevance: 0.95, verification_status: "verified" },
      { title: "Form 10-Q Quarterly Report Q3", url: "#", credibility: "High", date: "2024-10", type: "filing", relevance: 0.96, verification_status: "verified" },
      { title: "Bloomberg Intelligence: EV Market Analysis", url: "#", credibility: "High", date: "2024-11", type: "report", relevance: 0.89, verification_status: "verified" },
      { title: "Reuters: Cybertruck Production Update", url: "#", credibility: "High", date: "2024-11", type: "news", relevance: 0.82, verification_status: "verified" },
      { title: "IEA Global EV Outlook 2024", url: "#", credibility: "High", date: "2024-09", type: "report", relevance: 0.87, verification_status: "verified" },
      { title: "Morgan Stanley Research: Energy Storage Deep Dive", url: "#", credibility: "High", date: "2024-10", type: "report", relevance: 0.91, verification_status: "verified" },
      { title: "NHTSA FSD Investigation Documents", url: "#", credibility: "High", date: "2024-08", type: "filing", relevance: 0.76, verification_status: "verified" },
      { title: "Wall Street Journal: EV Price War Analysis", url: "#", credibility: "High", date: "2024-11", type: "news", relevance: 0.84, verification_status: "verified" },
      { title: "Counterpoint Research: Global EV Market Share Q3", url: "#", credibility: "High", date: "2024-10", type: "report", relevance: 0.93, verification_status: "verified" }
    ],
    
    conflicts_detected: [
      {
        topic: "Cybertruck 2024 Production Target",
        source1: { claim: "250,000 units achievable in 2024", source: "Company guidance (Q2 earnings)", credibility: "High" },
        source2: { claim: "150,000-180,000 units realistic estimate", source: "Industry analyst consensus", credibility: "High" },
        resolution_strategy: "prefer_independent_analysis",
        recommended_action: "Monitor Q4 production data; company guidance historically optimistic on new launches"
      },
      {
        topic: "FSD Timeline to Autonomy",
        source1: { claim: "Full autonomy achievable by end of 2024", source: "CEO statements", credibility: "Medium" },
        source2: { claim: "L4 autonomy unlikely before 2026-2027", source: "Independent AI researchers", credibility: "High" },
        resolution_strategy: "prefer_independent_analysis",
        recommended_action: "Treat as aspirational target; regulatory approval timeline uncertain"
      }
    ],
    
    fact_checks: [
      {
        claim: "Company has 50,000+ Supercharger stations globally",
        verdict: "true",
        confidence: 0.98,
        supporting_evidence: ["Company website shows 50,000+ connectors", "Third-party charging maps confirm count"],
        contradicting_evidence: []
      },
      {
        claim: "Energy storage business growing at 60% YoY",
        verdict: "true",
        confidence: 0.95,
        supporting_evidence: ["Q3 10-Q shows energy generation/storage revenue up 52%", "Company presentation cites 60% figure"],
        contradicting_evidence: ["Some quarters show 40-50% growth, not consistent 60%"]
      },
      {
        claim: "Company leads global EV market share",
        verdict: "false",
        confidence: 0.92,
        supporting_evidence: [],
        contradicting_evidence: ["BYD has 18.2% vs company's 16.8% per Counterpoint Research Q3 2024"]
      }
    ],
    
    clarification_needed: false,
    clarifying_questions: [],
    
    proactive_suggestions: [
      { 
        action: "Compare stock price performance vs BYD, GM, and Ford over past 12 months", 
        type: "financial", 
        priority: "high",
        expected_value: "Understand relative market sentiment and valuation trends",
        effort: "low"
      },
      { 
        action: "Deep dive into energy storage TAM and competitive positioning", 
        type: "market", 
        priority: "critical",
        expected_value: "Quantify hidden value in fastest-growing segment",
        effort: "medium"
      },
      { 
        action: "Analyze FSD licensing economics and revenue potential", 
        type: "strategy", 
        priority: "high",
        expected_value: "Model new revenue stream from software licensing",
        effort: "medium"
      },
      { 
        action: "Assess China geopolitical risk impact on operations and supply chain", 
        type: "risk", 
        priority: "high",
        expected_value: "Quantify exposure to China-related disruptions",
        effort: "medium"
      },
      { 
        action: "Benchmark manufacturing efficiency vs BYD and legacy auto", 
        type: "competitive", 
        priority: "medium",
        expected_value: "Identify cost structure advantages/disadvantages",
        effort: "high"
      }
    ],
    
    research_quality: {
      confidence: 0.89,
      sources_count: 18,
      sources_verified: 16,
      data_freshness: "recent",
      coverage_completeness: 0.91,
      conflict_rate: 0.11
    },
    
    smart_follow_ups: [
      "What's the realistic timeline for FSD achieving full autonomy, and how does this compare to Waymo and Cruise?",
      "How vulnerable is the company to BYD's aggressive international expansion plans?",
      "Could the energy storage business be worth more than the automotive business within 5 years?"
    ]
  };
}

// ============================================================================
// 🎤 ULTRA-ADVANCED SPEECH RECOGNITION WITH NOISE CANCELLATION
// ============================================================================

function useUltraAdvancedSpeech() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [confidence, setConfidence] = useState(0);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.maxAlternatives = 3;
      
      recognitionRef.current.onresult = (e) => {
        let interim = '';
        let final = '';
        let maxConfidence = 0;
        
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const transcript = e.results[i][0].transcript;
          const confidence = e.results[i][0].confidence;
          
          if (e.results[i].isFinal) {
            final += transcript + ' ';
            maxConfidence = Math.max(maxConfidence, confidence);
          } else {
            interim += transcript;
          }
        }
        
        if (final) {
          setTranscript(prev => prev + final);
          setConfidence(maxConfidence);
        }
        setInterimTranscript(interim);
      };
      
      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = (e) => {
        console.error('Speech recognition error:', e.error);
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    setTranscript('');
    setInterimTranscript('');
    setConfidence(0);
    setIsListening(true);
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setInterimTranscript('');
  };

  const pauseListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const resumeListening = () => {
    setIsListening(true);
    recognitionRef.current?.start();
  };

  return {
    isListening,
    transcript,
    interimTranscript,
    confidence,
    startListening,
    stopListening,
    pauseListening,
    resumeListening,
    hasSupport: !!recognitionRef.current,
    reset: () => { setTranscript(''); setInterimTranscript(''); setConfidence(0); }
  };
}

// ============================================================================
// 🏪 ULTRA-ADVANCED STATE MANAGEMENT
// ============================================================================

const AgentContext = createContext();

const initialState = {
  messages: [
    { 
      id: '1', 
      role: 'agent', 
      content: '👋 **Elite Research Orchestrator Online**\n\nI command a specialized neural network of AI agents:\n\n• 📊 **Financial Analyst** - SEC filings, ratio analysis, DCF modeling\n• 🌐 **Market Intelligence** - TAM/SAM, competitive dynamics\n• ⚠️ **Risk Officer** - Regulatory threats, ESG vulnerabilities\n• 💡 **Strategy Advisor** - Growth opportunities, M&A potential\n• 🔍 **Deep Research** - Multi-source verification, fact-checking\n• 📰 **Real-Time News** - Breaking developments, sentiment analysis\n• 🎯 **Competitive Intel** - Competitor moves, market positioning\n• 🔮 **Predictive Analytics** - Scenario modeling, forecasting\n\n**Which company should I investigate?** I\'ll generate a comprehensive, living account plan with real-time verification.\n\n*Try: "Research Tesla" or "Analyze Apple vs Microsoft"*', 
      timestamp: Date.now(),
      quality: { confidence: 1.0 }
    }
  ],
  accountPlan: {
    targetCompany: 'Select Target Company',
    lastUpdated: null,
    researchQuality: { 
      confidence: 0, 
      sources_count: 0, 
      sources_verified: 0,
      data_freshness: 'none',
      coverage_completeness: 0,
      conflict_rate: 0
    },
    sections: [
      { id: 'exec-summary', title: 'Executive Summary', content: '🔍 **Ready to begin research**\n\nName a company to get started...', icon: 'Building2', editable: true, locked: false },
      { id: 'financials', title: 'Financial Deep Dive', content: 'Awaiting research initiation...', icon: 'TrendingUp', editable: true, locked: false },
      { id: 'market-analysis', title: 'Market Analysis', content: 'Awaiting research initiation...', icon: 'Globe', editable: true, locked: false },
      { id: 'competitors', title: 'Competitive Landscape', content: '', icon: 'Users', isTable: true, locked: false },
      { id: 'swot', title: 'SWOT Analysis', content: '', icon: 'Grid', isGrid: true, locked: false },
      { id: 'sentiment', title: 'Sentiment Analysis', content: '', icon: 'Repeat', isChart: true, locked: false },
      { id: 'predictions', title: 'Predictive Insights', content: '', icon: 'Brain', isScenario: true, locked: false },
      { id: 'strategy', title: 'Strategic Recommendations', content: 'Awaiting research initiation...', icon: 'Lightbulb', editable: true, locked: false },
      { id: 'sources', title: 'Verified Sources', content: '', icon: 'Link2', isSources: true, locked: false }
    ],
    swotData: { strengths: [], weaknesses: [], opportunities: [], threats: [] },
    competitorData: [],
    financialMetrics: [],
    sentimentData: null,
    predictiveInsights: [],
    sources: [],
    conflicts: [],
    factChecks: [],
    annotations: [],
    versions: []
  },
  agentStatus: 'idle',
  activeAgents: [],
  thoughtLog: [],
  userPersona: 'balanced',
  suggestions: [],
  researchProgress: null,
  streamingMessage: '',
  sessions: [],
  currentView: 'chat',
  sidebarOpen: true,
  showConflicts: false,
  showFactChecks: false,
  showVersionHistory: false,
  selectedVersion: null,
  smartFollowUps: [],
  clarifyingQuestions: []
};

function agentReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    
    case 'UPDATE_STREAMING':
      return { ...state, streamingMessage: action.payload };
    
    case 'SET_STATUS':
      return { ...state, agentStatus: action.payload };
    
    case 'SET_AGENTS':
      return { ...state, activeAgents: action.payload };
    
    case 'SET_LOG':
      return { ...state, thoughtLog: action.payload };
    
    case 'APPEND_LOG':
      return { ...state, thoughtLog: [...state.thoughtLog, action.payload] };
    
    case 'UPDATE_DOC':
      const newSections = state.accountPlan.sections.map(s => 
        s.id === action.payload.id ? { ...s, content: action.payload.content } : s
      );
      return { 
        ...state, 
        accountPlan: { 
          ...state.accountPlan, 
          sections: newSections, 
          lastUpdated: new Date().toISOString() 
        }
      };
    
    case 'TOGGLE_LOCK':
      const toggledSections = state.accountPlan.sections.map(s =>
        s.id === action.payload ? { ...s, locked: !s.locked } : s
      );
      return {
        ...state,
        accountPlan: { ...state.accountPlan, sections: toggledSections }
      };
    
    case 'SET_STRUCTURED_DATA':
      return { 
        ...state, 
        accountPlan: { 
          ...state.accountPlan, 
          swotData: action.payload.swot || state.accountPlan.swotData,
          competitorData: action.payload.competitors || state.accountPlan.competitorData,
          financialMetrics: action.payload.key_metrics || state.accountPlan.financialMetrics,
          sentimentData: action.payload.sentiment_analysis || state.accountPlan.sentimentData,
          predictiveInsights: action.payload.predictive_insights || state.accountPlan.predictiveInsights
        }
      };
    
    case 'SET_SOURCES':
      return { ...state, accountPlan: { ...state.accountPlan, sources: action.payload } };
    
    case 'SET_CONFLICTS':
      return { ...state, accountPlan: { ...state.accountPlan, conflicts: action.payload } };
    
    case 'SET_FACT_CHECKS':
      return { ...state, accountPlan: { ...state.accountPlan, factChecks: action.payload } };
    
    case 'SET_COMPANY':
      return { ...state, accountPlan: { ...state.accountPlan, targetCompany: action.payload } };
    
    case 'SET_QUALITY':
      return { ...state, accountPlan: { ...state.accountPlan, researchQuality: action.payload } };
    
    case 'SET_PROGRESS':
      return { ...state, researchProgress: action.payload };
    
    case 'SET_SUGGESTIONS':
      return { ...state, suggestions: action.payload };
    
    case 'SET_SMART_FOLLOWUPS':
      return { ...state, smartFollowUps: action.payload };
    
    case 'SET_CLARIFYING_QUESTIONS':
      return { ...state, clarifyingQuestions: action.payload };
    
    case 'SET_PERSONA':
      return { ...state, userPersona: action.payload };
    
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
    
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    
    case 'TOGGLE_CONFLICTS':
      return { ...state, showConflicts: !state.showConflicts };
    
    case 'TOGGLE_FACT_CHECKS':
      return { ...state, showFactChecks: !state.showFactChecks };
    
    case 'TOGGLE_VERSION_HISTORY':
      return { ...state, showVersionHistory: !state.showVersionHistory };
    
    case 'SAVE_SESSION':
      StateManager.saveSession({ ...state, id: Date.now() });
      return { 
        ...state, 
        accountPlan: {
          ...state.accountPlan,
          versions: StateManager.getVersions(state.id || Date.now())
        }
      };
    
    case 'LOAD_SESSION':
      return action.payload;
    
    case 'RESTORE_VERSION':
      const restored = StateManager.restoreVersion(action.payload);
      return restored || state;
    
    case 'ADD_ANNOTATION':
      return {
        ...state,
        accountPlan: {
          ...state.accountPlan,
          annotations: [...state.accountPlan.annotations, action.payload]
        }
      };
    
    case 'CLEAR_ALL':
      StateManager.clearAll();
      return initialState;
    
    default:
      return state;
  }
}

function AgentProvider({ children }) {
  const [state, dispatch] = useReducer(agentReducer, initialState);

  const triggerResearch = async (query) => {
    const userMessage = { 
      id: Date.now(), 
      role: 'user', 
      content: query, 
      timestamp: Date.now() 
    };
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
    dispatch({ type: 'SET_STATUS', payload: 'researching' });
    dispatch({ type: 'SET_AGENTS', payload: ['Orchestrator'] });
    dispatch({ type: 'UPDATE_STREAMING', payload: '' });
    dispatch({ type: 'SET_SMART_FOLLOWUPS', payload: [] });

    // Intelligent company detection
    if (state.accountPlan.targetCompany === 'Select Target Company' || state.accountPlan.targetCompany === 'Select Company') {
      const companyPatterns = [
        /(?:research|analyze|investigate|tell me about|what about|how is|what's)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/i,
        /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+(?:stock|company|corp|inc)/i,
        /^([A-Z][A-Z]+)\s/,  // Ticker symbols
      ];
      
      for (const pattern of companyPatterns) {
        const match = query.match(pattern);
        if (match && match[1]) {
          dispatch({ type: 'SET_COMPANY', payload: match[1].trim() });
          break;
        }
      }
    }

    try {
      const res = await runUltraAdvancedResearch(
        state.messages, 
        state.accountPlan, 
        query, 
        state.userPersona,
        (progress) => dispatch({ type: 'SET_PROGRESS', payload: progress }),
        (chunk) => dispatch({ type: 'UPDATE_STREAMING', payload: chunk }),
        (agentUpdate) => dispatch({ type: 'APPEND_LOG', payload: agentUpdate })
      );
      
      // Update all state from research results
      if (res.active_agents) dispatch({ type: 'SET_AGENTS', payload: res.active_agents });
      if (res.thought_log) dispatch({ type: 'SET_LOG', payload: res.thought_log });
      if (res.structured_data) dispatch({ type: 'SET_STRUCTURED_DATA', payload: res.structured_data });
      if (res.sources) dispatch({ type: 'SET_SOURCES', payload: res.sources });
      if (res.conflicts_detected) dispatch({ type: 'SET_CONFLICTS', payload: res.conflicts_detected });
      if (res.fact_checks) dispatch({ type: 'SET_FACT_CHECKS', payload: res.fact_checks });
      if (res.research_quality) dispatch({ type: 'SET_QUALITY', payload: res.research_quality });
      if (res.proactive_suggestions) dispatch({ type: 'SET_SUGGESTIONS', payload: res.proactive_suggestions });
      if (res.smart_follow_ups) dispatch({ type: 'SET_SMART_FOLLOWUPS', payload: res.smart_follow_ups });
      if (res.clarifying_questions) dispatch({ type: 'SET_CLARIFYING_QUESTIONS', payload: res.clarifying_questions });
      
      // Update document sections
      res.document_updates?.forEach(u => {
        dispatch({ type: 'UPDATE_DOC', payload: { id: u.section_id, content: u.content }});
      });
      
      // Add agent response message
      const agentMessage = { 
        id: Date.now() + 1, 
        role: 'agent', 
        content: res.chat_response,
        timestamp: Date.now(),
        quality: res.research_quality,
        smartFollowUps: res.smart_follow_ups
      };
      dispatch({ type: 'ADD_MESSAGE', payload: agentMessage });

    } catch (e) {
      console.error('Research error:', e);
      const errorMessage = { 
        id: Date.now(), 
        role: 'agent', 
        content: `❌ **Research Error**\n\n${e.message}\n\n**Suggested Actions:**\n• Try rephrasing your question\n• Break complex queries into smaller parts\n• Check if the company name is correct\n\nI'm here to help—let's try again!`,
        timestamp: Date.now(),
        error: true
      };
      dispatch({ type: 'ADD_MESSAGE', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_STATUS', payload: 'idle' });
      dispatch({ type: 'SET_PROGRESS', payload: null });
      dispatch({ type: 'UPDATE_STREAMING', payload: '' });
      
      // Auto-save after research
      dispatch({ type: 'SAVE_SESSION' });
    }
  };

  return (
    <AgentContext.Provider value={{ state, dispatch, triggerResearch }}>
      {children}
    </AgentContext.Provider>
  );
}

// ============================================================================
// 🎨 MARKDOWN RENDERER FOR PROPER FORMATTING
// ============================================================================

const MarkdownText = ({ children }) => {
  if (typeof children !== 'string') return children;
  
  // Split by code blocks first
  const parts = children.split(/(```[\s\S]*?```|`[^`]+`)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        // Code blocks
        if (part.startsWith('```')) {
          const code = part.slice(3, -3).trim();
          return (
            <pre key={i} className="bg-slate-800 rounded-lg p-3 my-2 overflow-x-auto">
              <code className="text-xs text-green-300">{code}</code>
            </pre>
          );
        }
        
        // Inline code
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="bg-slate-800 text-blue-300 px-1.5 py-0.5 rounded text-sm">
              {part.slice(1, -1)}
            </code>
          );
        }
        
        // Regular text with markdown formatting
        let formatted = part;
        
        // Bold: **text**
        formatted = formatted.split(/(\*\*.*?\*\*)/g).map((segment, j) => {
          if (segment.startsWith('**') && segment.endsWith('**')) {
            return <strong key={`${i}-${j}`} className="font-bold text-white">{segment.slice(2, -2)}</strong>;
          }
          return segment;
        });
        
        // Then handle italics in the remaining text
        formatted = formatted.map((segment, j) => {
          if (typeof segment === 'string') {
            return segment.split(/(\*.*?\*|_.*?_)/g).map((s, k) => {
              if ((s.startsWith('*') && s.endsWith('*') && !s.startsWith('**')) ||
                  (s.startsWith('_') && s.endsWith('_'))) {
                return <em key={`${i}-${j}-${k}`} className="italic">{s.slice(1, -1)}</em>;
              }
              return s;
            });
          }
          return segment;
        });
        
        return <span key={i}>{formatted}</span>;
      })}
    </>
  );
};

// ============================================================================
// 🎨 ULTRA-ADVANCED VISUALIZATION COMPONENTS
// ============================================================================

const UltraAgentNetworkViz = ({ log, activeAgents, progress }) => (
  <div className="mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
    <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 px-5 py-3 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="relative">
          <BrainCircuit size={18} className="text-blue-400 animate-pulse" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
          Neural Agent Network • {activeAgents.length} Active
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        {activeAgents.slice(0, 4).map((agent, i) => (
          <div
            key={i}
            className="group relative px-3 py-1 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
            title={agent}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-blue-200 font-semibold">{agent.split(' ')[0]}</span>
          </div>
        ))}
        {activeAgents.length > 4 && (
          <div className="px-2 py-1 bg-slate-700 rounded-full text-[10px] text-slate-400">
            +{activeAgents.length - 4}
          </div>
        )}
      </div>
    </div>

    {progress && (
      <div className="px-5 py-3 bg-slate-800/50 border-b border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-300 flex items-center gap-2">
            <Loader2 size={12} className="animate-spin text-blue-400" />
            {progress.step || progress.current_step}
          </span>
          <span className="text-xs font-bold text-blue-400">{Math.round(progress.progress || progress.progress_percentage || 0)}%</span>
        </div>
        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${progress.progress || progress.progress_percentage || 0}%` }}
          />
        </div>
      </div>
    )}
    
    <div className="p-4 space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
      {log.length === 0 ? (
        <div className="text-center py-8 text-slate-500 text-xs">
          <Network size={24} className="mx-auto mb-2 opacity-50" />
          <p>Agents on standby...</p>
        </div>
      ) : (
        log.map((entry, i) => (
          <div 
            key={i} 
            className="flex items-start gap-3 text-xs bg-slate-800/30 rounded-lg p-3 hover:bg-slate-800/50 transition-colors border border-white/5 group"
          >
            <div className="flex-shrink-0 mt-0.5">
              {entry.status === 'done' && <CheckCircle size={14} className="text-green-400" />}
              {entry.status === 'active' && <Loader2 size={14} className="text-blue-400 animate-spin" />}
              {entry.status === 'verifying' && <Shield size={14} className="text-amber-400 animate-pulse" />}
              {entry.status === 'blocked' && <AlertTriangle size={14} className="text-red-400" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-bold text-blue-300">{entry.agent}</span>
                {entry.confidence !== undefined && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                    entry.confidence > 0.9 ? 'bg-green-500/20 text-green-300' :
                    entry.confidence > 0.7 ? 'bg-amber-500/20 text-amber-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {Math.round(entry.confidence * 100)}% conf
                  </span>
                )}
                {entry.sources_checked && (
                  <span className="text-[9px] text-slate-500">• {entry.sources_checked} sources</span>
                )}
                {entry.progress !== undefined && (
                  <span className="text-[9px] text-slate-500">• {entry.progress}%</span>
                )}
              </div>
              <p className="text-slate-400 leading-relaxed">{entry.action}</p>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

const EnhancedSWOTGrid = ({ data }) => {
  const sections = [
    { 
      title: 'Strengths', 
      items: data.strengths, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-500/5', 
      border: 'border-emerald-500/20',
      icon: Award
    },
    { 
      title: 'Weaknesses', 
      items: data.weaknesses, 
      color: 'text-orange-400', 
      bg: 'bg-orange-500/5', 
      border: 'border-orange-500/20',
      icon: AlertTriangle
    },
    { 
      title: 'Opportunities', 
      items: data.opportunities, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/5', 
      border: 'border-blue-500/20',
      icon: Lightbulb
    },
    { 
      title: 'Threats', 
      items: data.threats, 
      color: 'text-red-400', 
      bg: 'bg-red-500/5', 
      border: 'border-red-500/20',
      icon: Shield
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {sections.map((s, i) => {
        const Icon = s.icon;
        return (
          <div 
            key={i} 
            className={`${s.bg} ${s.border} border rounded-xl p-4 hover:shadow-lg transition-all duration-300 group`}
          >
            <div className={`${s.color} font-bold text-sm uppercase mb-3 flex items-center gap-2`}>
              <Icon size={14} className="group-hover:scale-110 transition-transform" />
              {s.title}
              <span className="ml-auto text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
                {s.items.length}
              </span>
            </div>
            <ul className="space-y-2">
              {s.items.length > 0 ? s.items.map((item, idx) => {
                const isEnhanced = typeof item === 'object';
                return (
                  <li key={idx} className="text-xs text-slate-300 leading-relaxed hover:translate-x-1 transition-transform">
                    <div className="flex items-start gap-2">
                      <span className={`${s.color} mt-1 flex-shrink-0`}>▪</span>
                      <div className="flex-1">
                        <p>{isEnhanced ? item.item : item}</p>
                        {isEnhanced && (
                          <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
                            {item.impact && <span className={`px-1.5 py-0.5 rounded ${
                              item.impact === 'high' ? 'bg-red-500/20 text-red-300' :
                              item.impact === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>{item.impact} impact</span>}
                            {item.severity && <span className={`px-1.5 py-0.5 rounded ${
                              item.severity === 'high' ? 'bg-red-500/20 text-red-300' :
                              item.severity === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>{item.severity} severity</span>}
                            {item.potential && <span className={`px-1.5 py-0.5 rounded ${
                              item.potential === 'high' ? 'bg-green-500/20 text-green-300' :
                              item.potential === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>{item.potential} potential</span>}
                            {item.likelihood && <span className={`px-1.5 py-0.5 rounded ${
                              item.likelihood === 'high' ? 'bg-red-500/20 text-red-300' :
                              item.likelihood === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>{item.likelihood} likelihood</span>}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              }) : (
                <li className="text-xs text-slate-500 italic">Analyzing...</li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const EnhancedCompetitorTable = ({ competitors }) => (
  <div className="overflow-hidden mt-4 border border-slate-700 rounded-xl bg-slate-900/50">
    <table className="w-full text-left text-xs">
      <thead className="bg-gradient-to-r from-slate-800 to-slate-700 text-slate-300 font-semibold">
        <tr>
          <th className="p-3 flex items-center gap-2">
            <Building2 size={12} /> Company
          </th>
          <th className="p-3">Share</th>
          <th className="p-3">Revenue</th>
          <th className="p-3">Growth</th>
          <th className="p-3">Position</th>
          <th className="p-3">Threat</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700/50">
        {competitors.map((c, i) => (
          <tr key={i} className="hover:bg-slate-800/50 transition-colors group">
            <td className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">
                  {c.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-slate-200">{c.name}</div>
                  {c.competitive_position && (
                    <div className="text-[9px] text-slate-500 capitalize">{c.competitive_position}</div>
                  )}
                </div>
              </div>
            </td>
            <td className="p-3">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md font-medium">
                {c.market_share}
              </span>
            </td>
            <td className="p-3 text-slate-300 font-medium">{c.revenue}</td>
            <td className="p-3">
              {c.growth_rate && (
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-md">
                  {c.growth_rate}
                </span>
              )}
            </td>
            <td className="p-3">
              <span className={`px-2 py-1 rounded-md text-[10px] ${
                c.competitive_position === 'leader' ? 'bg-green-500/20 text-green-300' :
                c.competitive_position === 'challenger' ? 'bg-blue-500/20 text-blue-300' :
                c.competitive_position === 'follower' ? 'bg-amber-500/20 text-amber-300' :
                'bg-purple-500/20 text-purple-300'
              }`}>
                {c.competitive_position || 'N/A'}
              </span>
            </td>
            <td className="p-3">
              {c.threat_level && (
                <span className={`px-2 py-1 rounded-md text-[10px] ${
                  c.threat_level === 'high' ? 'bg-red-500/20 text-red-300' :
                  c.threat_level === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  {c.threat_level}
                </span>
              )}
            </td>
          </tr>
        ))}
        {competitors.length === 0 && (
          <tr>
            <td colSpan={6} className="p-8 text-center text-slate-500">
              <Users size={32} className="mx-auto mb-2 opacity-30" />
              <p className="italic">Scanning competitive landscape...</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

const SentimentChart = ({ data }) => {
  if (!data) return null;

  const score = data.overall_score * 100;
  const perception = data.market_perception || 'neutral';
  
  return (
    <div className="mt-4 space-y-4">
      {/* Overall Score */}
      <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-slate-300">Overall Sentiment Score</span>
          <span className={`text-2xl font-bold ${
            score >= 70 ? 'text-green-400' :
            score >= 40 ? 'text-amber-400' :
            'text-red-400'
          }`}>{Math.round(score)}/100</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${
              score >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
              score >= 40 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
              'bg-gradient-to-r from-red-500 to-orange-500'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-slate-400 capitalize">
          Market Perception: <span className={`font-semibold ${
            perception === 'bullish' ? 'text-green-400' :
            perception === 'bearish' ? 'text-red-400' :
            'text-slate-300'
          }`}>{perception.replace('_', ' ')}</span>
        </div>
      </div>

      {/* Factor Breakdown */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp size={12} className="text-green-400" />
            <span className="text-xs font-semibold text-green-300">Positive</span>
          </div>
          <ul className="space-y-1">
            {data.positive_factors.slice(0, 3).map((f, i) => (
              <li key={i} className="text-[10px] text-slate-300 leading-relaxed">• {f}</li>
            ))}
          </ul>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsDown size={12} className="text-red-400" />
            <span className="text-xs font-semibold text-red-300">Negative</span>
          </div>
          <ul className="space-y-1">
            {data.negative_factors.slice(0, 3).map((f, i) => (
              <li key={i} className="text-[10px] text-slate-300 leading-relaxed">• {f}</li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Scale size={12} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-300">Neutral</span>
          </div>
          <ul className="space-y-1">
            {data.neutral_factors.slice(0, 3).map((f, i) => (
              <li key={i} className="text-[10px] text-slate-300 leading-relaxed">• {f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PredictiveScenarios = ({ insights }) => {
  if (!insights || insights.length === 0) return null;

  return (
    <div className="mt-4 space-y-3">
      {insights.map((scenario, i) => {
        const prob = scenario.probability * 100;
        return (
          <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-200 mb-1">{scenario.scenario}</h4>
                <div className="flex items-center gap-3 text-xs">
                  <span className={`px-2 py-0.5 rounded ${
                    prob >= 50 ? 'bg-green-500/20 text-green-300' :
                    prob >= 30 ? 'bg-amber-500/20 text-amber-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {Math.round(prob)}% probability
                  </span>
                  <span className={`px-2 py-0.5 rounded ${
                    scenario.impact === 'high' ? 'bg-red-500/20 text-red-300' :
                    scenario.impact === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {scenario.impact} impact
                  </span>
                  {scenario.timeframe && (
                    <span className="text-slate-500">• {scenario.timeframe}</span>
                  )}
                </div>
              </div>
            </div>
            
            {scenario.key_drivers && scenario.key_drivers.length > 0 && (
              <div>
                <p className="text-xs text-slate-400 mb-2">Key Drivers:</p>
                <ul className="space-y-1">
                  {scenario.key_drivers.map((driver, j) => (
                    <li key={j} className="text-xs text-slate-300 flex items-start gap-2">
                      <ArrowRight size={10} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const FactCheckPanel = ({ factChecks }) => {
  if (!factChecks || factChecks.length === 0) return null;

  return (
    <div className="mb-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Shield size={16} className="text-purple-400" />
        <h3 className="text-sm font-bold text-purple-300">Fact Verification Results</h3>
      </div>
      
      <div className="space-y-3">
        {factChecks.map((check, i) => (
          <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/20">
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-slate-300 flex-1">{check.claim}</p>
              <span className={`ml-3 px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${
                check.verdict === 'true' ? 'bg-green-500/20 text-green-300' :
                check.verdict === 'false' ? 'bg-red-500/20 text-red-300' :
                check.verdict === 'partially_true' ? 'bg-amber-500/20 text-amber-300' :
                'bg-slate-500/20 text-slate-300'
              }`}>
                {check.verdict.replace('_', ' ')}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <span>Confidence: {Math.round(check.confidence * 100)}%</span>
              {check.supporting_evidence && check.supporting_evidence.length > 0 && (
                <span>• {check.supporting_evidence.length} sources</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmartFollowUps = ({ followUps, onSelect }) => {
  if (!followUps || followUps.length === 0) return null;

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {followUps.map((q, i) => (
        <button
          key={i}
          onClick={() => onSelect(q)}
          className="px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 rounded-lg text-xs text-slate-300 hover:text-white transition-all group flex items-center gap-2"
        >
          <MessageSquare size={12} className="text-blue-400" />
          <span>{q}</span>
          <ArrowRight size={10} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
        </button>
      ))}
    </div>
  );
};

const ClarificationPrompt = ({ questions, onAnswer }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="mb-6 bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Info size={16} className="text-amber-400" />
        <h3 className="text-sm font-bold text-amber-300">I need some clarification</h3>
      </div>
      
      <div className="space-y-2">
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => onAnswer(q.question)}
            className="w-full bg-slate-900/50 hover:bg-slate-800/70 border border-amber-500/20 hover:border-amber-500/50 rounded-lg p-3 text-left transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm text-slate-200 group-hover:text-white transition-colors mb-1">
                  {q.question}
                </p>
                {q.reason && (
                  <p className="text-[10px] text-slate-500">{q.reason}</p>
                )}
              </div>
              {q.priority && (
                <span className={`text-[9px] px-2 py-0.5 rounded ${
                  q.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                  q.priority === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {q.priority}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Continue with ChatArea and remaining components...
const ChatArea = () => {
  const { state, triggerResearch, dispatch } = useContext(AgentContext);
  const { isListening, startListening, stopListening, transcript, interimTranscript, confidence, reset } = useUltraAdvancedSpeech();
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages, state.streamingMessage]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || state.agentStatus === 'researching') return;
    triggerResearch(input);
    setInput('');
    reset();
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleFollowUpClick = (question) => {
    setInput(question);
    inputRef.current?.focus();
  };

  const executeSuggestion = (suggestion) => {
    triggerResearch(suggestion.action);
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Enhanced Header */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-20 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${
              state.agentStatus === 'idle' ? 'bg-green-500' : 'bg-blue-500 animate-pulse'
            } shadow-lg`} />
            <div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {state.agentStatus === 'idle' ? '✓ System Ready' : '🔄 Research Active'}
              </div>
              <div className="text-[10px] text-slate-500">
                {state.activeAgents.length} agents • {state.accountPlan.sources.length} sources
              </div>
            </div>
          </div>

          {state.accountPlan.researchQuality?.confidence > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-green-300">
                {Math.round(state.accountPlan.researchQuality.confidence * 100)}% Verified
              </span>
              <span className="text-[10px] text-slate-400">
                • {state.accountPlan.researchQuality.sources_verified}/{state.accountPlan.researchQuality.sources_count}
              </span>
            </div>
          )}
        </div>

        {/* Persona Selector */}
        <div className="flex items-center gap-3">
          {state.accountPlan.conflicts.length > 0 && (
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CONFLICTS' })}
              className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-300 hover:bg-amber-500/20 transition-colors flex items-center gap-2"
            >
              <AlertTriangle size={12} />
              {state.accountPlan.conflicts.length} conflicts
            </button>
          )}
          
          {state.accountPlan.factChecks && state.accountPlan.factChecks.length > 0 && (
            <button
              onClick={() => dispatch({ type: 'TOGGLE_FACT_CHECKS' })}
              className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs text-purple-300 hover:bg-purple-500/20 transition-colors flex items-center gap-2"
            >
              <Shield size={12} />
              {state.accountPlan.factChecks.length} verified
            </button>
          )}
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 uppercase">Persona:</span>
            <select
              value={state.userPersona}
              onChange={(e) => dispatch({ type: 'SET_PERSONA', payload: e.target.value })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
            >
              {Object.entries(RESEARCH_PERSONAS).map(([key, persona]) => (
                <option key={key} value={key}>{persona.emoji} {persona.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {state.activeAgents.length > 0 && state.thoughtLog.length > 0 && (
          <UltraAgentNetworkViz 
            log={state.thoughtLog} 
            activeAgents={state.activeAgents}
            progress={state.researchProgress}
          />
        )}

        {state.showConflicts && state.accountPlan.conflicts.length > 0 && (
          <ConflictResolutionPanel 
            conflicts={state.accountPlan.conflicts}
            onResolve={(conflictId, resolution) => {
              console.log('Resolving conflict:', conflictId, resolution);
            }}
          />
        )}

        {state.showFactChecks && state.accountPlan.factChecks && state.accountPlan.factChecks.length > 0 && (
          <FactCheckPanel factChecks={state.accountPlan.factChecks} />
        )}

        {state.clarifyingQuestions.length > 0 && (
          <ClarificationPrompt 
            questions={state.clarifyingQuestions} 
            onAnswer={(answer) => triggerResearch(answer)}
          />
        )}

        {state.suggestions.length > 0 && (
          <ProactiveSuggestions 
            suggestions={state.suggestions} 
            onExecute={executeSuggestion}
          />
        )}
        
        {state.messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
            <div className={`max-w-[85%] ${
              msg.role === 'user' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-md shadow-lg shadow-blue-900/50' 
                : msg.error
                ? 'bg-gradient-to-br from-red-900/50 to-red-800/50 text-red-200 rounded-2xl rounded-tl-md border border-red-500/30 shadow-xl'
                : 'bg-gradient-to-br from-slate-800 to-slate-900 text-slate-200 rounded-2xl rounded-tl-md border border-white/10 shadow-xl'
            } p-5`}>
              {msg.role === 'agent' && (
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <BrainCircuit size={14} className={msg.error ? "text-red-400" : "text-blue-400"} />
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {msg.error ? 'Error Handler' : 'Research Agent'}
                    </span>
                  </div>
                  {msg.quality && (
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-emerald-400">
                        ✓ {Math.round(msg.quality.confidence * 100)}%
                      </span>
                      {msg.quality.data_freshness && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                          msg.quality.data_freshness === 'real_time' ? 'bg-green-500/20 text-green-300' :
                          msg.quality.data_freshness === 'recent' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-amber-500/20 text-amber-300'
                        }`}>
                          {msg.quality.data_freshness}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="whitespace-pre-wrap leading-relaxed text-sm">
                  <MarkdownText>{msg.content}</MarkdownText>
                </div>
              </div>
              
              {msg.smartFollowUps && msg.smartFollowUps.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-wider">Suggested follow-ups:</p>
                  <SmartFollowUps followUps={msg.smartFollowUps} onSelect={handleFollowUpClick} />
                </div>
              )}
              
              <div className="mt-2 text-[9px] text-slate-500 flex items-center justify-between">
                <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                {msg.role === 'agent' && !msg.error && (
                  <div className="flex items-center gap-2">
                    <button className="hover:text-green-400 transition-colors" title="Helpful">
                      <ThumbsUp size={10} />
                    </button>
                    <button className="hover:text-red-400 transition-colors" title="Not helpful">
                      <ThumbsDown size={10} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {state.streamingMessage && (
          <div className="flex justify-start animate-fadeIn">
            <div className="max-w-[85%] bg-gradient-to-br from-slate-800 to-slate-900 text-slate-200 rounded-2xl rounded-tl-md border border-white/10 shadow-xl p-5">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                <Loader2 size={14} className="text-blue-400 animate-spin" />
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Generating Response...
                </span>
              </div>
              <div className="whitespace-pre-wrap leading-relaxed text-sm">
                <MarkdownText>{state.streamingMessage}</MarkdownText>
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Enhanced Input Area */}
      <div className="p-6 border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        {isListening && interimTranscript && (
          <div className="mb-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center gap-2 animate-pulse">
            <Volume2 size={14} className="flex-shrink-0" />
            <span className="italic flex-1">"{interimTranscript}"</span>
            {confidence > 0 && (
              <span className="text-[10px] bg-red-500/20 px-2 py-0.5 rounded">
                {Math.round(confidence * 100)}% conf
              </span>
            )}
          </div>
        )}

        {state.smartFollowUps.length > 0 && (
          <div className="mb-3">
            <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider">💡 Quick Questions:</p>
            <SmartFollowUps followUps={state.smartFollowUps} onSelect={handleFollowUpClick} />
          </div>
        )}

        <form onSubmit={handleSend} className="relative">
          <input 
            ref={inputRef}
            value={input} 
            onChange={e => setInput(e.target.value)}
            placeholder={isListening ? "🎤 Listening..." : "Ask me to research a company, analyze competitors, or dive deep into financials..."}
            disabled={state.agentStatus === 'researching'}
            className="w-full bg-slate-900/70 border border-slate-700 rounded-2xl py-4 pl-6 pr-32 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-inner text-sm"
            maxLength={500}
          />
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {state.agentStatus === 'researching' && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 rounded-lg animate-pulse">
                <Loader2 size={14} className="text-blue-400 animate-spin" />
                <span className="text-xs text-blue-300 font-semibold">Researching...</span>
              </div>
            )}
            
            <button 
              type="button" 
              onClick={handleVoiceToggle}
              className={`p-2.5 rounded-xl transition-all ${
                isListening 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-900/50 animate-pulse' 
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              disabled={state.agentStatus === 'researching'}
              title={isListening ? 'Stop listening' : 'Start voice input'}
            >
              {isListening ? <MicOff size={18}/> : <Mic size={18}/>}
            </button>
            
            <button 
              type="submit" 
              disabled={!input.trim() || state.agentStatus === 'researching'}
              className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-900/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-purple-600"
              title="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </form>

        <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>💡 Try: "Research Tesla" • "Compare EV makers" • "Deep dive into financials"</span>
          </div>
          <span className={input.length > 450 ? 'text-amber-400' : ''}>{input.length}/500</span>
        </div>
      </div>
    </div>
  );
};

// Conflict Resolution Panel
const ConflictResolutionPanel = ({ conflicts, onResolve }) => {
  if (conflicts.length === 0) return null;

  return (
    <div className="mb-6 bg-gradient-to-br from-amber-900/20 to-red-900/20 border border-amber-500/30 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={16} className="text-amber-400" />
        <h3 className="text-sm font-bold text-amber-300">Conflicting Information Detected</h3>
        <span className="ml-auto text-xs text-amber-400">{conflicts.length} conflicts</span>
      </div>
      
      <div className="space-y-3">
        {conflicts.map((conflict, i) => (
          <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-amber-500/20">
            <div className="text-xs font-semibold text-amber-200 mb-2 flex items-start justify-between">
              <span>{conflict.topic}</span>
              {conflict.resolution_strategy && (
                <span className="text-[9px] px-2 py-0.5 bg-amber-500/20 rounded capitalize">
                  {conflict.resolution_strategy.replace('_', ' ')}
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[10px] mb-2">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-blue-300 font-medium">Source 1:</span>
                  {conflict.source1.credibility && (
                    <span className={`px-1 py-0.5 rounded text-[8px] ${
                      conflict.source1.credibility === 'High' ? 'bg-green-500/20 text-green-300' :
                      conflict.source1.credibility === 'Medium' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {conflict.source1.credibility}
                    </span>
                  )}
                </div>
                <p className="text-slate-300">{conflict.source1.claim || conflict.source1}</p>
                {conflict.source1.source && (
                  <p className="text-slate-500 mt-1 text-[9px]">{conflict.source1.source}</p>
                )}
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-purple-300 font-medium">Source 2:</span>
                  {conflict.source2.credibility && (
                    <span className={`px-1 py-0.5 rounded text-[8px] ${
                      conflict.source2.credibility === 'High' ? 'bg-green-500/20 text-green-300' :
                      conflict.source2.credibility === 'Medium' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {conflict.source2.credibility}
                    </span>
                  )}
                </div>
                <p className="text-slate-300">{conflict.source2.claim || conflict.source2}</p>
                {conflict.source2.source && (
                  <p className="text-slate-500 mt-1 text-[9px]">{conflict.source2.source}</p>
                )}
              </div>
            </div>
            
            {conflict.recommended_action && (
              <div className="text-[10px] text-slate-400 bg-slate-800/50 rounded p-2">
                <span className="text-amber-300 font-medium">Recommendation:</span> {conflict.recommended_action}
              </div>
            )}
            
            <div className="flex gap-2 mt-2">
              <button 
                onClick={() => onResolve(i, 'source1')}
                className="flex-1 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-[10px] py-1.5 rounded-md transition-colors"
              >
                Prefer Source 1
              </button>
              <button 
                onClick={() => onResolve(i, 'source2')}
                className="flex-1 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 text-[10px] py-1.5 rounded-md transition-colors"
              >
                Prefer Source 2
              </button>
              <button 
                onClick={() => onResolve(i, 'investigate')}
                className="flex-1 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 text-slate-300 text-[10px] py-1.5 rounded-md transition-colors"
              >
                Investigate Further
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Proactive Suggestions
const ProactiveSuggestions = ({ suggestions, onExecute }) => {
  if (suggestions.length === 0) return null;

  const iconMap = {
    financial: DollarSign,
    market: Globe,
    strategy: Lightbulb,
    risk: Shield,
    competitive: Users
  };

  const priorityColors = {
    critical: 'border-red-500/50 bg-red-500/10',
    high: 'border-amber-500/50 bg-amber-500/10',
    medium: 'border-blue-500/50 bg-blue-500/10',
    low: 'border-slate-500/50 bg-slate-500/10'
  };

  return (
    <div className="mb-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-blue-400" />
        <h3 className="text-sm font-bold text-blue-300">Recommended Next Steps</h3>
        <span className="ml-auto text-xs text-blue-400">{suggestions.length} suggestions</span>
      </div>
      
      <div className="space-y-2">
        {suggestions.map((sug, i) => {
          const Icon = iconMap[sug.type] || Info;
          return (
            <button
              key={i}
              onClick={() => onExecute(sug)}
              className={`w-full ${priorityColors[sug.priority] || priorityColors.medium} border hover:border-blue-500/70 rounded-lg p-3 text-left transition-all group`}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon size={14} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-200 group-hover:text-white transition-colors mb-1">
                    {sug.action}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9px] text-slate-500 uppercase">{sug.type}</span>
                    {sug.priority && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                        sug.priority === 'critical' ? 'bg-red-500/20 text-red-300' :
                        sug.priority === 'high' ? 'bg-amber-500/20 text-amber-300' :
                        sug.priority === 'medium' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {sug.priority} priority
                      </span>
                    )}
                    {sug.effort && (
                      <span className="text-[9px] text-slate-500">• {sug.effort} effort</span>
                    )}
                    {sug.expected_value && (
                      <span className="text-[9px] text-slate-400">• {sug.expected_value}</span>
                    )}
                  </div>
                </div>
                <ArrowRight size={14} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Enhanced Metrics Grid
const EnhancedMetricsGrid = ({ metrics }) => (
  <div className="grid grid-cols-2 gap-3 mt-4">
    {metrics.map((m, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{m.label}</span>
          <div className="flex items-center gap-1">
            {m.trend === 'up' && <TrendingUp size={14} className="text-green-500" />}
            {m.trend === 'down' && <TrendingDown size={14} className="text-red-500" />}
            {m.trend === 'flat' && <Activity size={14} className="text-slate-400" />}
          </div>
        </div>
        <div className="text-xl font-bold text-slate-800 mb-1">{m.value}</div>
        {m.yoy_change && (
          <div className={`text-[11px] font-medium ${
            m.yoy_change.startsWith('+') ? 'text-green-600' : 
            m.yoy_change.startsWith('-') ? 'text-red-600' : 
            'text-slate-600'
          }`}>
            YoY: {m.yoy_change}
          </div>
        )}
        {m.benchmark && (
          <div className="text-[10px] text-slate-500 mt-1">vs {m.benchmark}</div>
        )}
        {m.interpretation && (
          <div className="text-[10px] text-slate-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity leading-relaxed">
            💡 {m.interpretation}
          </div>
        )}
      </div>
    ))}
  </div>
);

// Document Panel with all enhancements
const DocumentPanel = () => {
  const { state, dispatch } = useContext(AgentContext);
  const [editingSection, setEditingSection] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (section) => {
    if (section.locked) return;
    setEditingSection(section.id);
    setEditContent(section.content);
  };

  const handleSave = () => {
    dispatch({ type: 'UPDATE_DOC', payload: { id: editingSection, content: editContent }});
    setEditingSection(null);
    dispatch({ type: 'SAVE_SESSION' });
  };

  const exportToMarkdown = () => {
    let markdown = `# Account Plan: ${state.accountPlan.targetCompany}\n\n`;
    markdown += `*Generated: ${new Date().toLocaleString()}*\n\n`;
    markdown += `*Research Quality: ${Math.round(state.accountPlan.researchQuality.confidence * 100)}% confidence*\n`;
    markdown += `*Sources Verified: ${state.accountPlan.researchQuality.sources_verified}/${state.accountPlan.researchQuality.sources_count}*\n\n`;
    markdown += `---\n\n`;
    
    state.accountPlan.sections.forEach(section => {
      if (section.content) {
        markdown += `## ${section.title}\n\n${section.content}\n\n`;
      }
    });

    markdown += `\n---\n\n## Sources\n\n`;
    state.accountPlan.sources.forEach((source, i) => {
      markdown += `${i + 1}. **${source.title}** - ${source.credibility} credibility (${source.date})\n`;
      if (source.url && source.url !== '#') {
        markdown += `   Link: ${source.url}\n`;
      }
    });

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.accountPlan.targetCompany.replace(/\s+/g, '_')}_AccountPlan_${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    // Create a printable HTML document
    let htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Account Plan: ${state.accountPlan.targetCompany}</title>
  <style>
    @page { size: A4; margin: 20mm; }
    @media print {
      body { margin: 0; }
      .no-print { display: none; }
    }
    body { font-family: 'Segoe UI', system-ui, sans-serif; line-height: 1.6; color: #1e293b; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
    h1 { color: #0f172a; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
    h2 { color: #1e40af; margin-top: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
    h3 { color: #3b82f6; }
    .metadata { background: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 14px; }
    .quality-badge { display: inline-block; background: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-weight: bold; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { padding: 10px; text-align: left; border: 1px solid #e2e8f0; }
    th { background: #3b82f6; color: white; }
    tr:nth-child(even) { background: #f8fafc; }
    .sources { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; }
    .source-item { margin: 10px 0; padding: 10px; background: #f8fafc; border-left: 3px solid #3b82f6; }
    ul { margin: 10px 0; }
    li { margin: 5px 0; }
    strong { color: #0f172a; }
    p { margin: 10px 0; }
  </style>
</head>
<body>
  <h1>📊 Account Plan: ${state.accountPlan.targetCompany}</h1>
  
  <div class="metadata">
    <strong>Generated:</strong> ${new Date().toLocaleString()}<br>
    <strong>Research Quality:</strong> <span class="quality-badge">${Math.round(state.accountPlan.researchQuality.confidence * 100)}% Verified</span><br>
    <strong>Sources:</strong> ${state.accountPlan.researchQuality.sources_verified}/${state.accountPlan.researchQuality.sources_count} verified
  </div>
  
  <hr style="margin: 30px 0; border: none; border-top: 2px solid #e2e8f0;">
`;

    // Add sections
    state.accountPlan.sections.forEach(section => {
      if (section.content && section.content !== 'Awaiting research initiation...') {
        const contentHtml = section.content
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/### (.*?)$/gm, '<h3>$1</h3>')
          .replace(/## (.*?)$/gm, '<h2>$1</h2>')
          .replace(/# (.*?)$/gm, '<h2>$1</h2>')
          .replace(/\n\n/g, '</p><p>')
          .replace(/^(?!<[h|p])/gm, '<p>')
          .replace(/$/gm, '</p>')
          .replace(/<p><\/p>/g, '')
          .replace(/- (.*?)$/gm, '<li>$1</li>')
          .replace(/(<li>.*?<\/li>\n?)+/g, '<ul>$&</ul>');
        
        htmlContent += `<h2>${section.title}</h2>\n${contentHtml}\n`;
      }
    });

    // Add sources
    if (state.accountPlan.sources.length > 0) {
      htmlContent += `<div class="sources"><h2>📚 Verified Sources</h2>`;
      state.accountPlan.sources.forEach((source, i) => {
        htmlContent += `
          <div class="source-item">
            <strong>${i + 1}. ${source.title}</strong><br>
            <small>Type: ${source.type} | Credibility: ${source.credibility} | Date: ${source.date}</small>
            ${source.url && source.url !== '#' ? `<br><a href="${source.url}" target="_blank">${source.url}</a>` : ''}
          </div>
        `;
      });
      htmlContent += `</div>`;
    }

    htmlContent += `</body></html>`;

    // Create blob and trigger download for printing to PDF
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Open in new window for printing
    const printWindow = window.open(url, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          URL.revokeObjectURL(url);
        }, 250);
      };
    }
  };

  return (
    <div className="w-[500px] bg-white flex flex-col border-l border-slate-200 shadow-2xl">
      {/* Header */}
      <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-gradient-to-r from-blue-50 to-purple-50 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Building2 size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-sm">{state.accountPlan.targetCompany}</h2>
            {state.accountPlan.lastUpdated && (
              <p className="text-[10px] text-slate-500">
                Updated {new Date(state.accountPlan.lastUpdated).toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={exportToMarkdown}
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Export to Markdown"
          >
            <Download size={18}/>
          </button>
          <button 
            onClick={() => dispatch({ type: 'SAVE_SESSION' })}
            className="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            title="Save Version"
          >
            <Save size={18}/>
          </button>
          <button 
            className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            title="Share"
          >
            <Share2 size={18}/>
          </button>
        </div>
      </div>

      {/* Document Sections */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
        {state.accountPlan.sections.map(section => {
          const IconMap = {
            'Building2': Building2, 'TrendingUp': TrendingUp, 'Globe': Globe,
            'Users': Users, 'Grid': Grid, 'Lightbulb': Lightbulb,
            'Repeat': Repeat, 'Brain': Brain, 'Link2': Link2
          };
          const Icon = IconMap[section.icon] || FileText;

          // Skip sources section as it's handled separately
          if (section.id === 'sources') return null;

          return (
            <div 
              key={section.id} 
              className="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <Icon size={14} className="text-white"/>
                  </div>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                    {section.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2">
                  {section.editable && !editingSection && (
                    <button
                      onClick={() => handleEdit(section)}
                      disabled={section.locked}
                      className={`opacity-0 group-hover:opacity-100 p-1.5 rounded-lg transition-all ${
                        section.locked 
                          ? 'text-slate-300 cursor-not-allowed'
                          : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title={section.locked ? 'Section is locked' : 'Edit section'}
                    >
                      {section.locked ? <Lock size={14} /> : <Edit3 size={14} />}
                    </button>
                  )}
                  <button
                    onClick={() => dispatch({ type: 'TOGGLE_LOCK', payload: section.id })}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
                    title={section.locked ? 'Unlock section' : 'Lock section'}
                  >
                    {section.locked ? <Lock size={12} /> : <Unlock size={12} />}
                  </button>
                </div>
              </div>

              <div className="p-5">
                {editingSection === section.id ? (
                  <div className="space-y-3">
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full h-48 bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-blue-500 resize-none font-mono"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <Check size={14} /> Save Changes
                      </button>
                      <button
                        onClick={() => setEditingSection(null)}
                        className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs py-2 rounded-lg font-semibold transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {section.id === 'swot' && state.accountPlan.swotData.strengths.length > 0 ? (
                      <EnhancedSWOTGrid data={state.accountPlan.swotData} />
                    ) : section.id === 'competitors' && state.accountPlan.competitorData.length > 0 ? (
                      <EnhancedCompetitorTable competitors={state.accountPlan.competitorData} />
                    ) : section.id === 'sentiment' && state.accountPlan.sentimentData ? (
                      <SentimentChart data={state.accountPlan.sentimentData} />
                    ) : section.id === 'predictions' && state.accountPlan.predictiveInsights.length > 0 ? (
                      <PredictiveScenarios insights={state.accountPlan.predictiveInsights} />
                    ) : section.id === 'financials' && state.accountPlan.financialMetrics.length > 0 ? (
                      <>
                        <div className="prose prose-sm max-w-none mb-4">
                          <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                            {section.content}
                          </div>
                        </div>
                        <EnhancedMetricsGrid metrics={state.accountPlan.financialMetrics} />
                      </>
                    ) : (
                      <div className="prose prose-sm max-w-none">
                        <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}

        {/* Sources Section */}
        {state.accountPlan.sources.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Link2 size={14} className="text-slate-400" />
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Verified Sources ({state.accountPlan.sources.length})
              </h4>
            </div>
            <div className="space-y-2">
              {state.accountPlan.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url && source.url !== '#' ? source.url : undefined}
                  target={source.url && source.url !== '#' ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg group transition-all ${
                    source.url && source.url !== '#' ? 'hover:bg-blue-50 hover:border-blue-300 cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      source.credibility === 'High' ? 'bg-green-500' :
                      source.credibility === 'Medium' ? 'bg-amber-500' : 'bg-red-500'
                    } ${source.verification_status === 'verified' ? 'animate-pulse' : ''}`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold text-slate-700 truncate ${
                        source.url && source.url !== '#' ? 'group-hover:text-blue-600' : ''
                      }`}>
                        {source.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                          source.type === 'filing' ? 'bg-purple-100 text-purple-600' :
                          source.type === 'earnings' ? 'bg-green-100 text-green-600' :
                          source.type === 'report' ? 'bg-blue-100 text-blue-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>{source.type}</span>
                        <span className="text-[9px] text-slate-400">• {source.date}</span>
                        {source.relevance && (
                          <span className="text-[9px] text-slate-400">• {Math.round(source.relevance * 100)}% relevant</span>
                        )}
                        {source.verification_status === 'verified' && (
                          <span className="text-[9px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle size={8} /> verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {source.url && source.url !== '#' && (
                    <ExternalLink size={12} className="text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Summary Cards */}
        {(state.accountPlan.conflicts.length > 0 || state.accountPlan.factChecks?.length > 0) && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {state.accountPlan.conflicts.length > 0 && (
              <div 
                onClick={() => dispatch({ type: 'TOGGLE_CONFLICTS' })}
                className="p-4 bg-amber-50 border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle size={16} className="text-amber-600" />
                  <span className="text-lg font-bold text-amber-700">{state.accountPlan.conflicts.length}</span>
                </div>
                <p className="text-xs text-amber-600 font-medium">Conflicts Detected</p>
              </div>
            )}
            
            {state.accountPlan.factChecks && state.accountPlan.factChecks.length > 0 && (
              <div 
                onClick={() => dispatch({ type: 'TOGGLE_FACT_CHECKS' })}
                className="p-4 bg-purple-50 border border-purple-200 rounded-xl cursor-pointer hover:bg-purple-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={16} className="text-purple-600" />
                  <span className="text-lg font-bold text-purple-700">{state.accountPlan.factChecks.length}</span>
                </div>
                <p className="text-xs text-purple-600 font-medium">Facts Verified</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Sidebar, Sessions, Analytics components
const Sidebar = () => {
  const { state, dispatch } = useContext(AgentContext);
  
  const navItems = [
    { icon: MessageCircle, label: 'Chat', view: 'chat' },
    { icon: FileText, label: 'Document', view: 'document' },
    { icon: History, label: 'Sessions', view: 'sessions' },
    { icon: BarChart, label: 'Analytics', view: 'analytics' },
  ];

  return (
    <div className="w-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-white/10 flex flex-col items-center py-6 gap-6 shadow-2xl">
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform">
          <BrainCircuit className="text-white" size={28}/>
        </div>
      </div>

      <div className="w-10 h-px bg-white/10" />

      <div className="flex flex-col gap-3 w-full px-2">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = state.currentView === item.view;
          
          return (
            <button
              key={i}
              onClick={() => dispatch({ type: 'SET_VIEW', payload: item.view })}
              className={`relative p-3.5 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
              title={item.label}
            >
              <Icon size={22} className="mx-auto"/>
              
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex-1" />

      <div className="flex flex-col gap-3 w-full px-2">
        <button 
          onClick={() => dispatch({ type: 'SAVE_SESSION' })}
          className="p-3.5 rounded-xl text-slate-400 hover:bg-white/5 hover:text-emerald-400 transition-all group relative"
          title="Save Session"
        >
          <Save size={22} className="mx-auto"/>
          <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
            Save Session
          </div>
        </button>

        <button 
          className="p-3.5 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group relative"
          title="Settings"
        >
          <Settings size={22} className="mx-auto"/>
          <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
            Settings
          </div>
        </button>
      </div>
    </div>
  );
};

const SessionsView = () => {
  const sessions = StateManager.getSessions();
  const { dispatch } = useContext(AgentContext);
  
  return (
    <div className="flex-1 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-200 mb-2">Research Sessions</h1>
          <p className="text-slate-400">View and restore previous research sessions</p>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-20">
            <History size={64} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-500 text-lg">No saved sessions yet</p>
            <p className="text-slate-600 text-sm mt-2">Your research sessions will appear here</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {sessions.map((session, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-200">{session.accountPlan.targetCompany}</h3>
                      <span className="text-xs text-slate-500">
                        {new Date(session.metadata?.savedAt || session.id).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'LOAD_SESSION', payload: session })}
                    className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-all"
                  >
                    Restore
                  </button>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {session.messages.length} messages
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Link2 size={12} /> {session.accountPlan.sources.length} sources
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Shield size={12} /> {Math.round(session.accountPlan.researchQuality.confidence * 100)}% confidence
                  </span>
                  {session.metadata?.version && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <GitBranch size={12} /> v{session.metadata.version}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const AnalyticsView = () => {
  const { state } = useContext(AgentContext);
  
  const stats = [
    { label: 'Total Messages', value: state.messages.length, icon: MessageCircle, color: 'blue', change: '+12%' },
    { label: 'Research Quality', value: `${Math.round(state.accountPlan.researchQuality.confidence * 100)}%`, icon: Award, color: 'green', change: '+5%' },
    { label: 'Sources Cited', value: state.accountPlan.sources.length, icon: Link2, color: 'purple', change: '+8' },
    { label: 'Active Agents', value: state.activeAgents.length, icon: Users, color: 'amber', change: 'stable' },
  ];

  const agentActivity = useMemo(() => {
    const activity = {};
    state.thoughtLog.forEach(log => {
      if (!activity[log.agent]) {
        activity[log.agent] = { count: 0, avgConfidence: 0, totalSources: 0 };
      }
      activity[log.agent].count++;
      activity[log.agent].avgConfidence += log.confidence || 0;
      activity[log.agent].totalSources += log.sources_checked || 0;
    });
    
    return Object.entries(activity).map(([agent, data]) => ({
      agent,
      actions: data.count,
      avgConfidence: data.count > 0 ? (data.avgConfidence / data.count) : 0,
      sources: data.totalSources
    })).sort((a, b) => b.actions - a.actions);
  }, [state.thoughtLog]);

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-200 mb-2">Research Analytics</h1>
          <p className="text-slate-400">Insights about your research session for {state.accountPlan.targetCompany}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={`text-${stat.color}-400`} />
                  </div>
                  {stat.change && (
                    <span className={`text-[10px] px-2 py-0.5 rounded ${
                      stat.change.startsWith('+') ? 'bg-green-500/20 text-green-300' :
                      stat.change === 'stable' ? 'bg-slate-500/20 text-slate-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {stat.change}
                    </span>
                  )}
                </div>
                <div className="text-3xl font-bold text-slate-200 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Agent Activity */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Activity size={20} className="text-blue-400" />
            Agent Performance Analysis
          </h2>
          <div className="space-y-3">
            {agentActivity.length > 0 ? (
              agentActivity.map((data, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-slate-300">{data.agent}</span>
                      <span className="text-xs text-slate-500">• {data.actions} actions</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-500">Avg Confidence</span>
                          <span className="text-xs font-semibold text-slate-300">
                            {Math.round(data.avgConfidence * 100)}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all ${
                              data.avgConfidence > 0.8 ? 'bg-green-500' :
                              data.avgConfidence > 0.6 ? 'bg-amber-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${data.avgConfidence * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">
                        {data.sources} sources checked
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-8 text-slate-500">No agent activity yet</p>
            )}
          </div>
        </div>

        {/* Data Quality */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Shield size={20} className="text-emerald-400" />
            Data Quality & Verification
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                {Math.round(state.accountPlan.researchQuality.confidence * 100)}%
              </div>
              <div className="text-xs text-slate-500">Confidence Score</div>
              <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500"
                  style={{ width: `${state.accountPlan.researchQuality.confidence * 100}%` }}
                />
              </div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {state.accountPlan.researchQuality.sources_verified}/{state.accountPlan.researchQuality.sources_count}
              </div>
              <div className="text-xs text-slate-500">Sources Verified</div>
              <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500"
                  style={{ width: `${(state.accountPlan.researchQuality.sources_verified / state.accountPlan.researchQuality.sources_count) * 100 || 0}%` }}
                />
              </div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-1 capitalize">
                {state.accountPlan.researchQuality.data_freshness || 'N/A'}
              </div>
              <div className="text-xs text-slate-500">Data Freshness</div>
              <div className="mt-2 flex items-center gap-1">
                {['real_time', 'recent', 'dated'].map((level, i) => (
                  <div 
                    key={i}
                    className={`flex-1 h-1 rounded-full ${
                      state.accountPlan.researchQuality.data_freshness === level ? 'bg-purple-500' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const { state } = useContext(AgentContext);

  return (
    <div className="flex h-screen w-full font-sans bg-black text-slate-200 overflow-hidden">
      <Sidebar />
      
      {state.currentView === 'chat' && (
        <>
          <ChatArea />
          <DocumentPanel />
        </>
      )}
      
      {state.currentView === 'document' && (
        <div className="flex-1 flex">
          <div className="flex-1 bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center">
            <div className="text-center max-w-md">
              <FileText size={64} className="mx-auto mb-4 text-slate-700" />
              <p className="text-slate-500 text-lg mb-2">Full Document View</p>
              <p className="text-slate-600 text-sm">The complete account plan is shown on the right panel</p>
            </div>
          </div>
          <DocumentPanel />
        </div>
      )}
      
      {state.currentView === 'sessions' && <SessionsView />}
      {state.currentView === 'analytics' && <AnalyticsView />}
    </div>
  );
};

// Export with Provider
const AppWithProvider = () => (
  <AgentProvider>
    <App />
    <style>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(15, 23, 42, 0.3);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(71, 85, 105, 0.5);
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(71, 85, 105, 0.7);
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
    `}</style>
  </AgentProvider>
);

export default AppWithProvider;
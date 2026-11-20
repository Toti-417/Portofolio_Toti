import React, { useState } from 'react'

/**
 * Editorial Architecture & Data Flow Diagrams
 * Conforming to cathrynlavery/diagram-design specification:
 * - Orthogonal elbow routing (M..H..Q..V..Q..H) with r=8 corner fillets
 * - Clean SVG vector markers and high signal-to-noise ratio
 * - Dark editorial color system (#090d16, #0f172a, #14b8a6, #a855f7, #38bdf8, #f59e0b)
 * - Monospaced technical typography and semantic zone groupings
 */

// Shared SVG Definitions for Markers & Patterns
export function DiagramDefs({ prefix = '' }) {
  return (
    <defs>
      <pattern id={`${prefix}diag-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.8" fill="#334155" opacity="0.3" />
      </pattern>
      {/* Arrow Markers */}
      <marker
        id={`${prefix}arr-teal`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 1 2 L 8 5 L 1 8 z" fill="#14b8a6" />
      </marker>
      <marker
        id={`${prefix}arr-purple`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 1 2 L 8 5 L 1 8 z" fill="#a855f7" />
      </marker>
      <marker
        id={`${prefix}arr-sky`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
      </marker>
      <marker
        id={`${prefix}arr-amber`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 1 2 L 8 5 L 1 8 z" fill="#f59e0b" />
      </marker>
      <marker
        id={`${prefix}arr-rose`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
      </marker>
      <marker
        id={`${prefix}arr-slate`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 1 2 L 8 5 L 1 8 z" fill="#64748b" />
      </marker>
    </defs>
  )
}

/* =========================================================================
   WEB3 PROJECTS DIAGRAMS (1 - 6)
   ========================================================================= */

// 1. Web3 Support Copilot Diagram
export function Web3SupportCopilotDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="w3-copilot-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#w3-copilot-diag-grid)" />

      {/* Zone 1: Client Ingress */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="130" height="18" rx="4" fill="#1e293b" />
      <text x="100" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: INGESTION</text>

      {/* Node: Support Agent / User */}
      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">INPUT SOURCE</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">User / Zendesk Webhook</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">TX Hash or Wallet Address</text>

      {/* Node: Query Parser */}
      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">INGESTION GATEWAY</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Format Validator</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">EVM (0x..) &amp; Solana Base58</text>

      {/* Zone 2: Diagnostics & RPC Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#1e1b4b" fillOpacity="0.25" stroke="#a855f7" strokeWidth="1.5" />
      <rect x="285" y="37" width="180" height="18" rx="4" fill="#581c87" />
      <text x="375" y="50" fill="#e9d5ff" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: DIAGNOSTIC ENGINE</text>

      {/* Node: Multi-Chain RPC Node */}
      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
      <text x="310" y="88" fill="#c084fc" fontSize="9" fontWeight="bold">MULTI-CHAIN RPC</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Alchemy &amp; Helius Nodes</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">eth_getTransactionReceipt / getParsedTx</text>

      {/* Node: Revert Reason Decoder */}
      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">DECODER PIPELINE</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Bytecode &amp; Error Triage</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Out of Gas, Slippage, TPU Drops</text>

      {/* Node: AI Incident Copilot */}
      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
      <text x="310" y="232" fill="#14b8a6" fontSize="9" fontWeight="bold">ANALYSIS CORE</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Plain-Language Copilot</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Non-Technical Explanation Generator</text>

      {/* Zone 3: Omnichannel Output */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DISPATCH</text>

      {/* Node: Zendesk / Discord Macro */}
      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#38bdf8" fontSize="9" fontWeight="bold">OMNICHANNEL</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Zendesk &amp; Discord</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">One-Click User Reply</text>
      <text x="650" y="143" fill="#10b981" fontSize="9">&lt; 30s SLA Resolution</text>

      {/* Node: Escalation Ticket */}
      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">SRE ESCALATION</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Jira / GitHub Ticket</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">L2/L3 Bug Payload</text>

      {/* Connectors (Orthogonal Elbows) */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#w3-copilot-arr-slate)" />
      
      {/* From Ingestion to Multi-Chain RPC */}
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#a855f7" strokeWidth="1.4" markerEnd="url(#w3-copilot-arr-purple)" />
      
      {/* Internal Zone 2 connections */}
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#w3-copilot-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#14b8a6" strokeWidth="1.2" markerEnd="url(#w3-copilot-arr-teal)" />

      {/* From AI Copilot to Zendesk */}
      <path d="M 565 230 H 585 Q 595 230 595 220 V 125 Q 595 115 605 115 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.4" markerEnd="url(#w3-copilot-arr-sky)" />
      
      {/* From AI Copilot to Jira */}
      <path d="M 565 255 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#w3-copilot-arr-amber)" />

      {/* Labels on connectors */}
      <rect x="238" y="145" width="54" height="14" rx="2" fill="#090d16" stroke="#334155" />
      <text x="265" y="155" fill="#a855f7" fontSize="8" textAnchor="middle">RPC Call</text>

      <rect x="575" y="160" width="45" height="14" rx="2" fill="#090d16" stroke="#334155" />
      <text x="597" y="170" fill="#38bdf8" fontSize="8" textAnchor="middle">Payload</text>
    </svg>
  )
}

// 2. Cross-Chain Reconciliation Portal Diagram
export function CrossChainReconciliationDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="w3-reconcile-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#w3-reconcile-diag-grid)" />

      {/* Zone 1: Misrouted Deposit Inflow */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: DEPOSIT STREAM</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">MULTI-CHAIN INGESTION</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">TRON, TON &amp; XRP</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">USDT TRC20 / Jettons / Rippled</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="57" y="204" fill="#f59e0b" fontSize="9" fontWeight="bold">MISROUTED DETECTION</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Missing Memo / Wrong Chain</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Uncredited Vault Isolation</text>

      {/* Zone 2: Cryptographic Custody & Signature (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#1e1b4b" fillOpacity="0.25" stroke="#a855f7" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#581c87" />
      <text x="382" y="50" fill="#e9d5ff" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: CUSTODY VERIFICATION</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
      <text x="310" y="88" fill="#c084fc" fontSize="9" fontWeight="bold">EIP-712 VERIFIER</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Cryptographic Ownership</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Structured Typed Signature Check</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">COMPLIANCE SCREENER</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">OFAC &amp; Sanitization Gate</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Clean Source-of-Funds Validation</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="232" fill="#10b981" fontSize="9" fontWeight="bold">SWEEP CONTROLLER</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Hot Wallet Sweeper Engine</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Re-routing to Credited User Balance</text>

      {/* Zone 3: Institutional Audit */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: AUDIT &amp; SETTLE</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#10b981" fontSize="9" fontWeight="bold">SETTLEMENT LEDGER</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Daily Audit Trail</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Immutable CSV Export</text>
      <text x="650" y="143" fill="#38bdf8" fontSize="9">Binance Standard Format</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">OPS DASHBOARD</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Discrepancy Triage UI</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Real-time Recovery Queue</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#w3-reconcile-arr-amber)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#a855f7" strokeWidth="1.4" markerEnd="url(#w3-reconcile-arr-purple)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#w3-reconcile-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#w3-reconcile-arr-teal)" />

      <path d="M 565 243 H 595 Q 605 243 605 233 V 125 Q 605 115 615 115 H 635" fill="none" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#w3-reconcile-arr-teal)" />
      <path d="M 565 255 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#w3-reconcile-arr-amber)" />
    </svg>
  )
}

// 3. RPC Node Sentinel Diagram
export function RpcNodeSentinelDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="w3-sentinel-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#w3-sentinel-diag-grid)" />

      {/* Zone 1: Node Polling Cluster */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: RPC CLUSTER</text>

      <rect x="45" y="70" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="89" fill="#38bdf8" fontSize="9" fontWeight="bold">TARGET PROVIDERS</text>
      <text x="57" y="105" fill="#f8fafc" fontSize="11" fontWeight="bold">6 Major Endpoints</text>
      <text x="57" y="119" fill="#64748b" fontSize="9">Alchemy, Infura, QuickNode,</text>
      <text x="57" y="130" fill="#64748b" fontSize="9">Ankr, Helius, Local Validator</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">HEARTBEAT POLLER</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Async Block &amp; Slot Poller</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">eth_blockNumber &amp; getSlot</text>

      {/* Zone 2: SRE Drift & Latency Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#0c4a6e" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="285" y="37" width="190" height="18" rx="4" fill="#0369a1" />
      <text x="380" y="50" fill="#e0f2fe" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: SRE TELEMETRY CORE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="310" y="88" fill="#38bdf8" fontSize="9" fontWeight="bold">WAVEFORM STREAMER</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Packet Latency Histogram</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Live RTT Rolling Waveform (ms)</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.4" />
      <text x="310" y="160" fill="#f43f5e" fontSize="9" fontWeight="bold">DRIFT &amp; DESYNC DETECTOR</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Block Head Desync Alert</text>
      <text x="310" y="190" fill="#fca5a5" fontSize="9">Trigger threshold: &gt; 3 Blocks Drift</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="232" fill="#10b981" fontSize="9" fontWeight="bold">FAILOVER CONTROLLER</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">dApp Circuit Breaker</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Instant Traffic Re-routing (&lt;400ms)</text>

      {/* Zone 3: Webhook & Monitoring Sinks */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DISPATCH</text>

      <rect x="635" y="75" width="180" height="65" rx="6" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.2" />
      <text x="650" y="95" fill="#f43f5e" fontSize="9" fontWeight="bold">ALERT DISPATCHER</text>
      <text x="650" y="112" fill="#f8fafc" fontSize="11" fontWeight="bold">PagerDuty &amp; Telegram</text>
      <text x="650" y="127" fill="#64748b" fontSize="9">Critical On-Call Escalation</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="650" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold">METRICS EXPORTER</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Datadog / Prometheus</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">OpenTelemetry Ingestion</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#w3-sentinel-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#38bdf8" strokeWidth="1.4" markerEnd="url(#w3-sentinel-arr-sky)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#f43f5e" strokeWidth="1.2" markerEnd="url(#w3-sentinel-arr-rose)" />
      <path d="M 430 200 V 214" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#w3-sentinel-arr-teal)" />

      <path d="M 565 171 H 595 Q 605 171 605 150 V 118 Q 605 107 615 107 H 635" fill="none" stroke="#f43f5e" strokeWidth="1.4" markerEnd="url(#w3-sentinel-arr-rose)" />
      <path d="M 565 243 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#w3-sentinel-arr-sky)" />
    </svg>
  )
}

// 4. Web3 Multi-Chain Telemetry & Whale Radar Diagram
export function Web3TelemetryTrackerDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="w3-telemetry-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#w3-telemetry-diag-grid)" />

      {/* Zone 1: Public JSON-RPC Feeds */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: RPC STREAMS</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">BLOCKCHAIN INGESTION</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Solana, Base &amp; ETH</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Solana Mainnet ~2,800 TPS</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">EDGE WEBSOCKET</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Zero-Backend Gateway</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Direct Client-Side Ingestion</text>

      {/* Zone 2: Whale Radar & Heuristics (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#14532d" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />
      <rect x="285" y="37" width="190" height="18" rx="4" fill="#065f46" />
      <text x="380" y="50" fill="#a7f3d0" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: WHALE RADAR CORE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
      <text x="310" y="88" fill="#10b981" fontSize="9" fontWeight="bold">WHALE FILTER ENGINE</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Volume &gt; $100,000 USD</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Live Native &amp; Stablecoin Tracker</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">DEX / BRIDGE DISSECTOR</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Liquidity Swap Classifier</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Uniswap, Raydium &amp; Wormhole</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="310" y="232" fill="#f59e0b" fontSize="9" fontWeight="bold">GEO &amp; NODE TELEMETRY</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Telecom KPI Correlation</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Latency, Packet Drops &amp; Jitter</text>

      {/* Zone 3: Terminal UI & Audit Export */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: TERMINAL UI</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#10b981" fontSize="9" fontWeight="bold">CHAINLINK TERMINAL</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">High-Density Live Feed</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Real-time Stream Matrix</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold">DATA EXPORT</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">CSV &amp; JSON Audit Logs</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">One-Click Compliance Dossier</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#w3-telemetry-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#w3-telemetry-arr-teal)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#w3-telemetry-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#w3-telemetry-arr-amber)" />

      <path d="M 565 99 H 635" fill="none" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#w3-telemetry-arr-teal)" />
      <path d="M 565 243 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#w3-telemetry-arr-sky)" />
    </svg>
  )
}

// 5. On-Chain KYT & Asset Recovery Diagram
export function OnChainKytInvestigatorDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="w3-kyt-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#w3-kyt-diag-grid)" />

      {/* Zone 1: Case Intake */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: CASE INTAKE</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">TARGET ADDRESS</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">EVM &amp; Solana Query</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Suspicious Wallet or Hash</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">LEDGER AGGREGATOR</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Blockscout API &amp; RPC</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Full Transaction History Fetch</text>

      {/* Zone 2: Forensics Risk Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#4c0519" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#881337" />
      <text x="382" y="50" fill="#fecdd3" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: FORENSICS ENGINE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
      <text x="310" y="88" fill="#f43f5e" fontSize="9" fontWeight="bold">MIXER &amp; OFAC SCREENER</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Tornado / Darknet Flag</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Sanctioned Entity Matcher</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
      <text x="310" y="160" fill="#c084fc" fontSize="9" fontWeight="bold">MULTI-HOP GRAPH TRACER</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Fund Laundering Path</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Cross-contract token sweeps</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="310" y="232" fill="#f59e0b" fontSize="9" fontWeight="bold">RISK SCORING MATRIX</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Score 0–100 Classification</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Critical, High, Medium, Clear</text>

      {/* Zone 3: Compliance Output */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: COMPLIANCE</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#f43f5e" fontSize="9" fontWeight="bold">CASE DOSSIER</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Official PDF Export</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Evidence Chain for Police</text>
      <text x="650" y="143" fill="#f59e0b" fontSize="9">Court-Ready Metadata</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold">CHAINALYSIS UI</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Interactive Node Graph</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Visual Fund Path Map</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#w3-kyt-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#f43f5e" strokeWidth="1.4" markerEnd="url(#w3-kyt-arr-rose)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#a855f7" strokeWidth="1.2" markerEnd="url(#w3-kyt-arr-purple)" />
      <path d="M 430 200 V 214" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#w3-kyt-arr-amber)" />

      <path d="M 565 243 H 595 Q 605 243 605 233 V 125 Q 605 115 615 115 H 635" fill="none" stroke="#f43f5e" strokeWidth="1.4" markerEnd="url(#w3-kyt-arr-rose)" />
      <path d="M 565 255 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#w3-kyt-arr-sky)" />
    </svg>
  )
}

// 6. Web3 Ops Incident Console Diagram
export function Web3OpsIncidentConsoleDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="w3-ops-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#w3-ops-diag-grid)" />

      {/* Zone 1: Protocol Swap & Pool Telemetry */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: SWAP INGESTION</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#f43f5e" fontSize="9" fontWeight="bold">DEX PROTOCOLS</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Uniswap v3 &amp; Pancakeswap</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Swap, Mint &amp; Burn Events</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">HEALTH PULSER</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Subgraph &amp; RPC Latency</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Sync Status &amp; Block Lag Check</text>

      {/* Zone 2: Revert Debugger & SLA Monitor (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#581c87" fillOpacity="0.25" stroke="#c084fc" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#6b21a8" />
      <text x="382" y="50" fill="#f3e8ff" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: REVERT DEBUGGER</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
      <text x="310" y="88" fill="#c084fc" fontSize="9" fontWeight="bold">TX REVERT DECODER</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Error String &amp; Slippage</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">STF, Insufficient Output, Deadline</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="310" y="160" fill="#f59e0b" fontSize="9" fontWeight="bold">INCIDENT STATE MACHINE</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Triage -&gt; In-Review -&gt; Solved</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Active SLA Stopwatch Monitoring</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="232" fill="#10b981" fontSize="9" fontWeight="bold">SOLUTION SYNTHESIZER</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Automated Copilot Guides</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Exact Slippage Adjustment Steps</text>

      {/* Zone 3: Omnichannel Response & Dev Ticket */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DISPATCH</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#c084fc" fontSize="9" fontWeight="bold">USER RESPONSE</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Zendesk / Discord Copy</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Polite &amp; Technical Answers</text>
      <text x="650" y="143" fill="#10b981" fontSize="9">One-Click Clipboard</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">DEV ESCALATION</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Jira &amp; GitHub Issue</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Contract Bug Repro Log</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#w3-ops-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#w3-ops-arr-purple)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#w3-ops-arr-amber)" />
      <path d="M 430 200 V 214" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#w3-ops-arr-teal)" />

      <path d="M 565 230 H 595 Q 605 230 605 220 V 125 Q 605 115 615 115 H 635" fill="none" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#w3-ops-arr-purple)" />
      <path d="M 565 255 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#w3-ops-arr-amber)" />
    </svg>
  )
}

/* =========================================================================
   NON-WEB3 TELECOM & AUTOMATION PROJECTS DIAGRAMS (1 - 9)
   ========================================================================= */

// 1. AutoMate Workspace Suite Diagram
export function AutoMateWorkspaceDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-automate-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-automate-diag-grid)" />

      {/* Zone 1: Client Front-End Suite */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: CLIENT WEB APP</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
      <text x="57" y="94" fill="#14b8a6" fontSize="9" fontWeight="bold">REACT 19 + VITE</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">10-in-1 Workspace Suite</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Zero-Install Browser UI</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="57" y="204" fill="#38bdf8" fontSize="9" fontWeight="bold">LOCAL WASM ENGINES</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">PDF-Lib &amp; SheetJS</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Client-Side Data Privacy</text>

      {/* Zone 2: n8n Self-Hosted Automation Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#042f2e" fillOpacity="0.3" stroke="#14b8a6" strokeWidth="1.5" />
      <rect x="285" y="37" width="200" height="18" rx="4" fill="#115e59" />
      <text x="385" y="50" fill="#99f6e4" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: N8N HOME SERVER</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
      <text x="310" y="88" fill="#14b8a6" fontSize="9" fontWeight="bold">24/7 DOCKER ENGINE</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Ubuntu Self-Hosted Server</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Tailscale SSL Encrypted Webhook</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">TELEMETRY REGEX PARSER</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Huawei &amp; Ericsson Log Triage</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Instant Alarm &amp; MML Extraction</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="232" fill="#10b981" fontSize="9" fontWeight="bold">DOCUMENT CONVERTER</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">CV Screener &amp; PPN 11% Calc</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Batch Certificate &amp; Watermark</text>

      {/* Zone 3: Output & Dispatch */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DISPATCH</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#14b8a6" fontSize="9" fontWeight="bold">PROCESSED FILES</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">1-Click PDF &amp; Excel</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Digital Watermarking</text>
      <text x="650" y="143" fill="#10b981" fontSize="9">Instant Browser Download</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold">CLOUD NOTIFICATIONS</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Google Sheets &amp; Telegram</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Bidirectional Sync</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-automate-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-automate-arr-teal)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-automate-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-automate-arr-teal)" />

      <path d="M 565 99 H 635" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-automate-arr-teal)" />
      <path d="M 565 243 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-automate-arr-sky)" />
    </svg>
  )
}

// 2. Telecom LTE Interference Radar Diagram
export function InterferenceRadarDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-radar-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-radar-diag-grid)" />

      {/* Zone 1: BTS Feeds & MML Logs */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: BTS TELEMETRY</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">254+ BTS SITES</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Huawei &amp; Ericsson</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">L900, L1800, L2100, L2300</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">LOG INGESTION</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">MML Regex Feeds</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">DSP RETPORT &amp; RSSI Levels</text>

      {/* Zone 2: Temporal & Geospatial Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#451a03" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#78350f" />
      <text x="382" y="50" fill="#fef3c7" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: INTERFERENCE RADAR</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="310" y="88" fill="#f59e0b" fontSize="9" fontWeight="bold">SIGNAL CLASSIFIER</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Jammer vs Repeater vs PIM</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">RSSI Deviation &amp; Noise Rise</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
      <text x="310" y="160" fill="#14b8a6" fontSize="9" fontWeight="bold">24-HR HEATMAP MATRIX</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Hourly Temporal Depth</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">00:00 - 23:00 WIB Historical Shift</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="232" fill="#38bdf8" fontSize="9" fontWeight="bold">HEADLESS RENDERER</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Puppeteer Chart Generator</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">High-res Radar Satellite Map</text>

      {/* Zone 3: Operations & WhatsApp Bot */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: FIELD DISPATCH</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#10b981" fontSize="9" fontWeight="bold">WHATSAPP BOT</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">!interference Trigger</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Instant Map Delivery (&lt;5s)</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">BALMON DOSSIER</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Kominfo Regulatory Filing</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Official Interference Complaint</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-radar-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#f59e0b" strokeWidth="1.4" markerEnd="url(#nw-radar-arr-amber)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#14b8a6" strokeWidth="1.2" markerEnd="url(#nw-radar-arr-teal)" />
      <path d="M 430 200 V 214" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-radar-arr-sky)" />

      <path d="M 565 230 H 595 Q 605 230 605 220 V 125 Q 605 115 615 115 H 635" fill="none" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#nw-radar-arr-teal)" />
      <path d="M 565 255 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#nw-radar-arr-amber)" />
    </svg>
  )
}

// 3. Automated RET Antenna Assessment Diagram
export function RetAntennaAssessmentDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-ret-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-ret-diag-grid)" />

      {/* Zone 1: RF Command Polling */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: MML POLLING</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#14b8a6" fontSize="9" fontWeight="bold">6 REGIONAL NOPS</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">73+ Audited Sectors</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Semarang, Solo, Purwokerto...</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">HUAWEI COMMANDS</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">DSP RETPORT &amp; SUBUNIT</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Electronic Tilt Angle Query</text>

      {/* Zone 2: Deviation & Port Audit Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#042f2e" fillOpacity="0.3" stroke="#14b8a6" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#115e59" />
      <text x="382" y="50" fill="#99f6e4" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: RET AUDIT ENGINE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
      <text x="310" y="88" fill="#14b8a6" fontSize="9" fontWeight="bold">BASELINE COMPARATOR</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Tilt Deviation Check</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Actual vs Engineering RNP Plan</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="310" y="160" fill="#f59e0b" fontSize="9" fontWeight="bold">OPEN PORT ISOLATOR</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Physical Hardware Leak</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Detects Uncapped RF Connectors</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="232" fill="#38bdf8" fontSize="9" fontWeight="bold">PUPPETEER TABLE RENDERER</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Executive Color-Coded Grid</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Rendered in &lt; 3 Seconds</text>

      {/* Zone 3: Enterprise Cloud Sync */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: CLOUD SYNC</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#14b8a6" fontSize="9" fontWeight="bold">GOOGLE SHEETS API</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Bidirectional Sync</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Live Regional Inventory</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#10b981" fontSize="9" fontWeight="bold">FIELD BOT</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">WhatsApp Command !ret</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Zero-Climbing Verification</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-ret-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-ret-arr-teal)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#nw-ret-arr-amber)" />
      <path d="M 430 200 V 214" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-ret-arr-sky)" />

      <path d="M 565 99 H 635" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-ret-arr-teal)" />
      <path d="M 565 243 H 635" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-ret-arr-teal)" />
    </svg>
  )
}

// 4. Executive RAN Quality Scorecard Diagram
export function RanQualityScorecardDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-quality-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-quality-diag-grid)" />

      {/* Zone 1: Performance Management Counters */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: PM COUNTERS</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">RAW HOURLY PM DATA</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Payload GB &amp; Traffic</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Accessibility &amp; Retainability</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">MULTI-VENDOR SYNC</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Huawei &amp; Ericsson NMS</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Hourly Aggregated Database</text>

      {/* Zone 2: Scoring & Dual-Axis Correlation Engine (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#042f2e" fillOpacity="0.3" stroke="#14b8a6" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#115e59" />
      <text x="382" y="50" fill="#99f6e4" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: CORRELATION ENGINE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
      <text x="310" y="88" fill="#14b8a6" fontSize="9" fontWeight="bold">7-DAY QUALITY SCORER</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Weighted Composite KPI</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">CSSR, DCR, Throughput, Volume</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">DUAL-AXIS TREND CANVAS</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Payload vs Degradation %</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">24-Hour Cycle Correlation</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="232" fill="#10b981" fontSize="9" fontWeight="bold">HEADLESS CHROMIUM</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Automated PNG Renderer</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Sub-3-Second Chart Generation</text>

      {/* Zone 3: Executive Reporting */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DISTRIBUTION</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#10b981" fontSize="9" fontWeight="bold">WHATSAPP EXECUTIVE</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">!quality Bot Command</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Instant Chart Delivery</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">EXECUTIVE DIGEST</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Zero-Excel Workflow</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Immediate Leadership Insight</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-quality-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-quality-arr-teal)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-quality-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-quality-arr-teal)" />

      <path d="M 565 230 H 595 Q 605 230 605 220 V 125 Q 605 115 615 115 H 635" fill="none" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#nw-quality-arr-teal)" />
      <path d="M 565 255 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#nw-quality-arr-amber)" />
    </svg>
  )
}

// 5. RAN-Ops Copilot & WhatsApp Server Diagram
export function RanOpsCopilotDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-copilot-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-copilot-diag-grid)" />

      {/* Zone 1: Field Communication Gateway */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: FIELD GATEWAY</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="57" y="94" fill="#10b981" fontSize="9" fontWeight="bold">TELKOMSEL ENGINEERS</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">WhatsApp Field Chat</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Zero-Laptop Command Ops</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="57" y="204" fill="#10b981" fontSize="9" fontWeight="bold">BAILEYS WS ENGINE</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Persistent Socket Gateway</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Auto-Reconnect &amp; QR Auth</text>

      {/* Zone 2: Autonomous Copilot Server (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#042f2e" fillOpacity="0.3" stroke="#14b8a6" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#115e59" />
      <text x="382" y="50" fill="#99f6e4" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: COPILOT SERVER</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
      <text x="310" y="88" fill="#14b8a6" fontSize="9" fontWeight="bold">TOTI COPILOT AI CORE</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Autonomous Agentic Routing</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Function Calling &amp; Natural Language</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">LINUX SERVER DAEMON</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">PM2 Multi-Process Manager</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">99.9% Uptime &amp; Auto-Restart</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
      <text x="310" y="232" fill="#a855f7" fontSize="9" fontWeight="bold">CONTROL PANEL GUI</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Web Dashboard &amp; Telemetry</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">CPU/RAM &amp; Live WebSocket Logs</text>

      {/* Zone 3: Multi-Module Orchestration */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: MODULES</text>

      <rect x="635" y="75" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="95" fill="#14b8a6" fontSize="9" fontWeight="bold">TELECOM MODULES</text>
      <text x="650" y="112" fill="#f8fafc" fontSize="11" fontWeight="bold">!interference, !ret</text>
      <text x="650" y="127" fill="#64748b" fontSize="9">!quality, !balmon parser</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold">SECURE ACCESS</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Tailscale Funnel SSL</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Encrypted Remote Control</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-copilot-arr-teal)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-copilot-arr-teal)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-copilot-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#a855f7" strokeWidth="1.2" markerEnd="url(#nw-copilot-arr-purple)" />

      <path d="M 565 99 H 635" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-copilot-arr-teal)" />
      <path d="M 565 243 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-copilot-arr-sky)" />
    </svg>
  )
}

// 6. BTS Vandalism Monitoring Dashboard Diagram
export function BtsVandalismDashboardDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-vandalism-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-vandalism-diag-grid)" />

      {/* Zone 1: Incident Intake */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: INCIDENT INTAKE</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#f43f5e" fontSize="9" fontWeight="bold">597 POLICE INCIDENTS</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Historical Theft Logs</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Copper, Batteries, Rectifiers</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">NORMALIZATION</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Geocoding &amp; Loss Value</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">IDR 12.1 Billion Exposure</text>

      {/* Zone 2: Spatial Risk Modeling (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#4c0519" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#881337" />
      <text x="382" y="50" fill="#fecdd3" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: SPATIAL RISK CORE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
      <text x="310" y="88" fill="#f43f5e" fontSize="9" fontWeight="bold">CLUSTER HEATMAP</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Spatial Hotspot Analysis</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Vulnerability density across clusters</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="310" y="160" fill="#f59e0b" fontSize="9" fontWeight="bold">FINANCIAL IMPACT MODEL</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Loss Exposure Quantification</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Insurance claim alignment &amp; ROI</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="232" fill="#38bdf8" fontSize="9" fontWeight="bold">PREDICTIVE TARGETING</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Repeat Incident Modus</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Time-of-day &amp; site access risk</text>

      {/* Zone 3: Security & Preventative Dispatch */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DISPATCH</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#f43f5e" fontSize="9" fontWeight="bold">LEAFLET GIS</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Interactive Radar Map</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Field Security Routing</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">LAW ENFORCEMENT</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Automated Incident Dossier</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Legal Prosecution Package</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-vandalism-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#f43f5e" strokeWidth="1.4" markerEnd="url(#nw-vandalism-arr-rose)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#nw-vandalism-arr-amber)" />
      <path d="M 430 200 V 214" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-vandalism-arr-sky)" />

      <path d="M 565 99 H 635" fill="none" stroke="#f43f5e" strokeWidth="1.4" markerEnd="url(#nw-vandalism-arr-rose)" />
      <path d="M 565 243 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#nw-vandalism-arr-amber)" />
    </svg>
  )
}

// 7. Huawei MML Parser & Balmon Generator Diagram
export function HuaweiMmlBalmonDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-balmon-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-balmon-diag-grid)" />

      {/* Zone 1: Raw Command Logs */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: MML CONSOLE</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold">1,400+ SITES DUMP</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Huawei iMAE Console</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Raw Unstructured Text</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">COMMAND TYPES</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">LST BRD &amp; DSP RETPORT</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">LST RRU &amp; SFP 10GE Ports</text>

      {/* Zone 2: Parsing & Document Synthesizer (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#042f2e" fillOpacity="0.3" stroke="#14b8a6" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#115e59" />
      <text x="382" y="50" fill="#99f6e4" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: PARSER CORE</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
      <text x="310" y="88" fill="#14b8a6" fontSize="9" fontWeight="bold">REGEX EXTRACTION ENGINE</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Hardware Spec Normalizer</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Antenna, RET, Feeder, Band Config</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="160" fill="#38bdf8" fontSize="9" fontWeight="bold">GEODATA ENRICHER</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Site ID to Coordinate Map</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Lat/Long, Azimuth, Mechanical Tilt</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="232" fill="#10b981" fontSize="9" fontWeight="bold">DOCX TEMPLATE ENGINE</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Regulatory Complaint Builder</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Automated DOCX &amp; PDF Export</text>

      {/* Zone 3: Regulatory Compliance Output */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: COMPLIANCE</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#14b8a6" fontSize="9" fontWeight="bold">BALMON KOMINFO</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Official Dossier</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Interference Complaint</text>
      <text x="650" y="143" fill="#10b981" fontSize="9">100% Audit Compliance</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold">AUDIT ARCHIVE</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Digital Inventory Sync</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Generated in &lt; 15 Seconds</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-balmon-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-balmon-arr-teal)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-balmon-arr-sky)" />
      <path d="M 430 200 V 214" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-balmon-arr-teal)" />

      <path d="M 565 230 H 595 Q 605 230 605 220 V 125 Q 605 115 615 115 H 635" fill="none" stroke="#14b8a6" strokeWidth="1.4" markerEnd="url(#nw-balmon-arr-teal)" />
      <path d="M 565 255 H 635" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#nw-balmon-arr-sky)" />
    </svg>
  )
}

// 8. Blacksite Batch Rollout & Document Tracker Diagram
export function BlacksiteRolloutDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-blacksite-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-blacksite-diag-grid)" />

      {/* Zone 1: Rollout Inception */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: SITE DEPLOYMENT</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#f59e0b" fontSize="9" fontWeight="bold">TELKOMSEL ROLLOUT</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Blacksite Batch #1-#3</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Re-engineering Site Targets</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">VENDOR ALIGNMENT</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Material Logistics In/Out</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Subcontractor Deployment</text>

      {/* Zone 2: Milestone & eATP Gate (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#451a03" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#78350f" />
      <text x="382" y="50" fill="#fef3c7" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: eATP GATEWAY</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="310" y="88" fill="#f59e0b" fontSize="9" fontWeight="bold">MILESTONE TRACKING</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Physical Tower to On-Air</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Civil, Power, Transmission, RF</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
      <text x="310" y="160" fill="#10b981" fontSize="9" fontWeight="bold">eATP DIGITAL ACCEPTANCE</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">99% Document Accuracy</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Strict Verification Quality Gate</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
      <text x="310" y="232" fill="#14b8a6" fontSize="9" fontWeight="bold">PARTNER RANKING ENGINE</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">#1 Leading Partner Rank</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">85% Ahead-of-Schedule Closure</text>

      {/* Zone 3: Executive Completion */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: CLOSURE</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#10b981" fontSize="9" fontWeight="bold">EXECUTIVE CLOSURE</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">IDR 40B Budget Control</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">30% Cost Efficiency</text>
      <text x="650" y="143" fill="#10b981" fontSize="9">Full Handover to Ops</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#f59e0b" fontSize="9" fontWeight="bold">DOCUMENT ARCHIVE</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">100% Complete eATP</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Zero-Pending Audit Trail</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-blacksite-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#f59e0b" strokeWidth="1.4" markerEnd="url(#nw-blacksite-arr-amber)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-blacksite-arr-teal)" />
      <path d="M 430 200 V 214" fill="none" stroke="#14b8a6" strokeWidth="1.2" markerEnd="url(#nw-blacksite-arr-teal)" />

      <path d="M 565 99 H 635" fill="none" stroke="#10b981" strokeWidth="1.4" markerEnd="url(#nw-blacksite-arr-teal)" />
      <path d="M 565 243 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.2" markerEnd="url(#nw-blacksite-arr-amber)" />
    </svg>
  )
}

// 9. Power BI Real-Time Project Monitor Diagram
export function PowerBiMonitorDiagram() {
  return (
    <svg viewBox="0 0 860 320" className="w-full h-auto select-none font-mono">
      <DiagramDefs prefix="nw-powerbi-" />
      <rect width="860" height="320" rx="12" fill="#090d16" stroke="#1e293b" />
      <rect width="860" height="320" fill="url(#nw-powerbi-diag-grid)" />

      {/* Zone 1: Enterprise Data Warehouse */}
      <rect x="25" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="35" y="37" width="145" height="18" rx="4" fill="#1e293b" />
      <text x="107" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 1: DATA WAREHOUSE</text>

      <rect x="45" y="75" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="94" fill="#f59e0b" fontSize="9" fontWeight="bold">TELKOMSEL SPMS</text>
      <text x="57" y="110" fill="#f8fafc" fontSize="11" fontWeight="bold">Site Project Database</text>
      <text x="57" y="124" fill="#64748b" fontSize="9">Multi-Region Rollout Records</text>

      <rect x="45" y="185" width="180" height="60" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="57" y="204" fill="#94a3b8" fontSize="9" fontWeight="bold">POWER QUERY ETL</text>
      <text x="57" y="220" fill="#f8fafc" fontSize="11" fontWeight="bold">Automated Refresh</text>
      <text x="57" y="234" fill="#64748b" fontSize="9">Replaced Weekly Manual Sheets</text>

      {/* Zone 2: Power BI Modeling Core (FOCAL) */}
      <rect x="275" y="45" width="310" height="245" rx="8" fill="#451a03" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="285" y="37" width="195" height="18" rx="4" fill="#78350f" />
      <text x="382" y="50" fill="#fef3c7" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 2: DAX MODELING</text>

      <rect x="295" y="70" width="270" height="58" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="310" y="88" fill="#f59e0b" fontSize="9" fontWeight="bold">STAR SCHEMA ARCHITECTURE</text>
      <text x="310" y="104" fill="#f8fafc" fontSize="11" fontWeight="bold">Normalized Fact &amp; Dim Tables</text>
      <text x="310" y="118" fill="#94a3b8" fontSize="9">Vendor, Region, Milestone, Timeline</text>

      <rect x="295" y="142" width="270" height="58" rx="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
      <text x="310" y="160" fill="#14b8a6" fontSize="9" fontWeight="bold">ADVANCED DAX MEASURES</text>
      <text x="310" y="176" fill="#f8fafc" fontSize="11" fontWeight="bold">Rollout Velocity &amp; Variance</text>
      <text x="310" y="190" fill="#94a3b8" fontSize="9">Bottleneck Detection Algorithms</text>

      <rect x="295" y="214" width="270" height="58" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
      <text x="310" y="232" fill="#38bdf8" fontSize="9" fontWeight="bold">ROW-LEVEL SECURITY (RLS)</text>
      <text x="310" y="248" fill="#f8fafc" fontSize="11" fontWeight="bold">Role-Based Executive Views</text>
      <text x="310" y="262" fill="#94a3b8" fontSize="9">Regional &amp; Vendor Access Isolation</text>

      {/* Zone 3: Executive Visual Intelligence */}
      <rect x="615" y="45" width="220" height="245" rx="8" fill="#0f172a" fillOpacity="0.4" stroke="#334155" strokeDasharray="4,4" />
      <rect x="625" y="37" width="135" height="18" rx="4" fill="#1e293b" />
      <text x="692" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle" letterSpacing="0.08em">ZONE 3: DASHBOARD</text>

      <rect x="635" y="80" width="180" height="70" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="100" fill="#f59e0b" fontSize="9" fontWeight="bold">EXECUTIVE DASHBOARD</text>
      <text x="650" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">Cross-Filtering Visuals</text>
      <text x="650" y="132" fill="#64748b" fontSize="9">Real-time Progress Radar</text>

      <rect x="635" y="185" width="180" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
      <text x="650" y="205" fill="#10b981" fontSize="9" fontWeight="bold">DATA-DRIVEN DECISIONS</text>
      <text x="650" y="222" fill="#f8fafc" fontSize="11" fontWeight="bold">Live Telkomsel SPMS KPI</text>
      <text x="650" y="238" fill="#64748b" fontSize="9">Faster Milestone Approvals</text>

      {/* Connectors */}
      <path d="M 135 135 V 185" fill="none" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#nw-powerbi-arr-slate)" />
      <path d="M 225 215 H 255 Q 265 215 265 205 V 109 Q 265 99 275 99 H 295" fill="none" stroke="#f59e0b" strokeWidth="1.4" markerEnd="url(#nw-powerbi-arr-amber)" />
      
      <path d="M 430 128 V 142" fill="none" stroke="#14b8a6" strokeWidth="1.2" markerEnd="url(#nw-powerbi-arr-teal)" />
      <path d="M 430 200 V 214" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#nw-powerbi-arr-sky)" />

      <path d="M 565 99 H 635" fill="none" stroke="#f59e0b" strokeWidth="1.4" markerEnd="url(#nw-powerbi-arr-amber)" />
      <path d="M 565 243 H 635" fill="none" stroke="#10b981" strokeWidth="1.2" markerEnd="url(#nw-powerbi-arr-teal)" />
    </svg>
  )
}

/* =========================================================================
   DIAGRAM REGISTRY & UNIFIED PROJECT DIAGRAM WRAPPER
   ========================================================================= */

export const PROJECT_DIAGRAM_COMPONENTS = {
  // Web3 Projects
  'web3-support-copilot': {
    title: 'Web3 Support Copilot — Architecture & Diagnostics Flow',
    subtitle: 'From user transaction incident to plain-language omnichannel resolution via multi-chain RPC telemetry',
    pattern: 'Data Flow / Architectural Pipeline',
    component: Web3SupportCopilotDiagram,
  },
  'crosschain-reconciliation-portal': {
    title: 'Cross-Chain Reconciliation Portal — Vault Recovery Architecture',
    subtitle: 'Institutional missing-memo triage, EIP-712 non-custodial cryptographic verification & audit pipeline',
    pattern: 'State Machine & Secure Paved Road',
    component: CrossChainReconciliationDiagram,
  },
  'rpc-node-sentinel': {
    title: 'RPC Node Sentinel — SRE Latency & Drift Telemetry System',
    subtitle: 'Multi-node asynchronous probing, head desync comparator (<400ms) & automated failover circuit breaker',
    pattern: 'High-Availability Fan-in & Monitoring Pipeline',
    component: RpcNodeSentinelDiagram,
  },
  'web3-telemetry-tracker': {
    title: 'Web3 Multi-Chain Telemetry & Whale Radar Architecture',
    subtitle: 'High-frequency Solana (~2,800 TPS) & Base RPC stream parsing with volume heuristic filtering (> $100k)',
    pattern: 'Data Stream Filter & Terminal Canvas',
    component: Web3TelemetryTrackerDiagram,
  },
  'onchain-kyt-investigator': {
    title: 'On-Chain KYT & Asset Recovery — Forensics Graph Pipeline',
    subtitle: 'Blockscout API ingestion, OFAC sanction heuristics, multi-hop laundering trace & compliance case dossier',
    pattern: 'Forensics Graph & Traceable Decomposition',
    component: OnChainKytInvestigatorDiagram,
  },
  'web3-ops-incident-console': {
    title: 'Web3 Protocol Support & Incident Triage Console Architecture',
    subtitle: 'DEX swap event ingestion, on-chain revert debugger, SLA stopwatch timer & Jira/Zendesk integration',
    pattern: 'Incident Management & Diagnostic Pipeline',
    component: Web3OpsIncidentConsoleDiagram,
  },

  // Non-Web3 Telecom & Automation Projects
  'automate-workspace-suite': {
    title: 'AutoMate Workspace — 10-in-1 Suite & n8n Home Server Architecture',
    subtitle: 'Client-side React 19 WASM engines connected to 24/7 Docker home server with Tailscale SSL encryption',
    pattern: 'Client-Edge-Webhook Orchestration Pipeline',
    component: AutoMateWorkspaceDiagram,
  },
  'interference-radar-dashboard': {
    title: 'Telecom LTE Interference Radar — 24-Hr Geo-Spatial Architecture',
    subtitle: '254+ BTS MML telemetry ingestion, 24-hr hourly matrix classifier & automated WhatsApp bot dispatcher',
    pattern: 'Geospatial Radar & Time-Series Classification',
    component: InterferenceRadarDiagram,
  },
  'ret-antenna-assessment': {
    title: 'Automated RET Antenna Assessment System Architecture',
    subtitle: 'Huawei DSP RETPORT polling across 6 regional NOPs, tilt baseline validation & live Google Sheets sync',
    pattern: 'Remote Hardware Auditing & Cloud Sync',
    component: RetAntennaAssessmentDiagram,
  },
  'ran-quality-scorecard': {
    title: 'Executive RAN Quality Scorecard & 24-Hr Chart Engine Architecture',
    subtitle: 'Hourly PM counter aggregation, dual-axis payload vs CSSR/DCR correlation & headless chart renderer',
    pattern: 'Multi-Metric Scoring & Correlation Pipeline',
    component: RanQualityScorecardDiagram,
  },
  'ran-ops-copilot': {
    title: 'RAN-Ops Copilot & WhatsApp Telecom Automation Server Architecture',
    subtitle: 'Baileys WebSocket socket gateway, TOTI COPILOT AI core with Function Calling & Linux PM2 server management',
    pattern: 'Autonomous Agentic Gateway & Daemon Control',
    component: RanOpsCopilotDiagram,
  },
  'bts-vandalism-dashboard': {
    title: 'BTS Security & Vandalism Monitoring Analytics Architecture',
    subtitle: '597 police incident geocoding, IDR 12.1B financial loss modeling & spatial vulnerability clustering',
    pattern: 'Spatial Risk Modeling & Forensic Analytics',
    component: BtsVandalismDashboardDiagram,
  },
  'huawei-mml-balmon': {
    title: 'Huawei MML Parser & Regulatory Balmon Generator Architecture',
    subtitle: 'Multi-pattern regex parsing across 1,400+ BTS sites, hardware spec extraction & Kominfo complaint export',
    pattern: 'Regex Stream Extraction & Document Synthesizer',
    component: HuaweiMmlBalmonDiagram,
  },
  'blacksite-rollout': {
    title: 'Blacksite Batch Rollout & Document Tracker Architecture',
    subtitle: 'Batch #1-#3 deployment milestones, eATP digital quality acceptance gate & partner ranking engine',
    pattern: 'Milestone Execution & Document Control Pipeline',
    component: BlacksiteRolloutDiagram,
  },
  'power-bi-monitor': {
    title: 'Power BI Real-Time Project Monitor Architecture',
    subtitle: 'Telkomsel SPMS database ingestion, star-schema data modeling, advanced DAX measures & executive views',
    pattern: 'Enterprise Data Modeling & Visual BI Architecture',
    component: PowerBiMonitorDiagram,
  },
}

/**
 * Interactive Diagram Viewer Component with zoom and full-screen view
 */
export default function ProjectArchitectureDiagram({ projectId, lang = 'id' }) {
  const [zoomLevel, setZoomLevel] = useState(1)
  const meta = PROJECT_DIAGRAM_COMPONENTS[projectId]

  if (!meta) {
    return (
      <div className="p-8 text-center border border-white/10 rounded-xl bg-slate-950/60 font-mono text-xs text-slate-400">
        Diagram belum terdaftar untuk proyek ini ({projectId}).
      </div>
    )
  }

  const DiagramComponent = meta.component

  return (
    <div className="space-y-3">
      {/* Editorial Diagram Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-950/90 rounded-xl border border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
              {meta.pattern}
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">
            {meta.title}
          </h4>
          <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
            {meta.subtitle}
          </p>
        </div>

        {/* View / Zoom Controls */}
        <div className="flex items-center gap-1.5 ml-auto">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(0.8, Number((z - 0.1).toFixed(1))))}
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300"
            title="Zoom Out"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel(1)}
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono text-teal-400"
            title="Reset Zoom"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(1.6, Number((z + 0.1).toFixed(1))))}
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300"
            title="Zoom In"
          >
            +
          </button>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative overflow-x-auto rounded-xl border border-white/15 bg-[#090d16] p-2 sm:p-4 shadow-2xl transition-all">
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-out',
            minWidth: '700px',
          }}
        >
          <DiagramComponent />
        </div>
      </div>

      {/* Legend & Design Spec Note */}
      <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-400 px-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0f172a] border border-[#334155] inline-block"></span>
            <span>Standard Node</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0f172a] border border-teal-400 inline-block"></span>
            <span>Core / Focal Point</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0f172a] border border-purple-400 inline-block"></span>
            <span>Cryptographic / Web3</span>
          </span>
        </div>
        <div className="text-slate-400">
          Orthogonal SVG Architecture System &bull; cathrynlavery standard
        </div>
      </div>
    </div>
  )
}

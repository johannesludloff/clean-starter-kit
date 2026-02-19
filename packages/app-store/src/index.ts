export interface App {
  id: string;
  name: string;
  active: boolean;
  short_description: string;
  description: string | null;
  category?: string;
  beta?: boolean;
  installUrl?: string;
}

export const apps: App[] = [
  { id: "gmail", name: "Gmail", active: true, category: "capture", short_description: "Auto-match receipts from your inbox.", description: null },
  { id: "outlook", name: "Outlook", active: true, category: "capture", short_description: "Auto-match receipts from Outlook.", description: null },
  { id: "slack", name: "Slack", active: true, category: "apps", short_description: "Get notified about transactions in Slack.", description: null },
  { id: "whatsapp", name: "WhatsApp", active: true, category: "capture", short_description: "Forward receipts via WhatsApp.", description: null },
  { id: "xero", name: "Xero", active: true, category: "accounting", short_description: "Export transactions to Xero.", description: null },
  { id: "quickbooks", name: "QuickBooks", active: true, category: "accounting", short_description: "Export transactions to QuickBooks.", description: null },
  { id: "fortnox", name: "Fortnox", active: true, category: "accounting", short_description: "Export transactions to Fortnox.", description: null },
  { id: "raycast", name: "Raycast", active: true, category: "apps", short_description: "Track time from Raycast.", description: null },
  { id: "stripe-payments", name: "Stripe Payments", active: true, category: "payments", short_description: "Accept card payments on invoices.", description: null },
  { id: "stripe", name: "Stripe", active: true, category: "payments", short_description: "Sync Stripe revenue automatically.", description: null },
  { id: "midday-desktop", name: "Lujo Desktop", active: true, category: "apps", short_description: "Native Mac app for your finances.", description: null, installUrl: "https://midday.ai/download" },
  { id: "google-drive", name: "Google Drive", active: true, category: "storage", short_description: "Sync documents to Google Drive.", description: null },
  { id: "dropbox", name: "Dropbox", active: true, category: "storage", short_description: "Sync documents to Dropbox.", description: null },
  { id: "polar", name: "Polar", active: true, category: "payments", short_description: "Sync subscription payments from Polar.", description: null },
  { id: "deel", name: "Deel", active: true, category: "payments", short_description: "Sync contractor payments from Deel.", description: null },
  { id: "e-invoice", name: "E-Invoice", active: true, category: "accounting", short_description: "Send and receive e-invoices via Peppol.", description: null },
  { id: "cursor-mcp", name: "Cursor MCP", active: true, category: "ai-automation", short_description: "Financial context inside Cursor.", description: null, installUrl: "https://midday.ai/mcp/cursor" },
  { id: "claude-mcp", name: "Claude MCP", active: true, category: "ai-automation", short_description: "Query your finances with Claude.", description: null, installUrl: "https://midday.ai/mcp/claude" },
  { id: "perplexity-mcp", name: "Perplexity MCP", active: true, category: "ai-automation", short_description: "AI search with your real data.", description: null, installUrl: "https://midday.ai/mcp/perplexity" },
  { id: "raycast-mcp", name: "Raycast MCP", active: true, category: "ai-automation", short_description: "Financial tools in Raycast AI.", description: null, installUrl: "https://midday.ai/mcp/raycast" },
  { id: "chatgpt-mcp", name: "ChatGPT MCP", active: true, category: "ai-automation", short_description: "Build with the MCP SDK.", description: null, installUrl: "https://midday.ai/mcp/chatgpt" },
  { id: "opencode-mcp", name: "OpenCode MCP", active: true, category: "ai-automation", short_description: "Track time while coding.", description: null, installUrl: "https://midday.ai/mcp/opencode" },
  { id: "zapier-mcp", name: "Zapier MCP", active: true, category: "ai-automation", short_description: "Connect to 7,000+ apps via Zapier.", description: null, installUrl: "https://midday.ai/mcp/zapier" },
  { id: "copilot-mcp", name: "Copilot MCP", active: true, category: "ai-automation", short_description: "Query data from Microsoft 365.", description: null, installUrl: "https://midday.ai/mcp/copilot" },
  { id: "n8n-mcp", name: "n8n MCP", active: true, category: "ai-automation", short_description: "Build automated financial workflows.", description: null, installUrl: "https://midday.ai/mcp/n8n" },
  { id: "make-mcp", name: "Make MCP", active: true, category: "ai-automation", short_description: "Visual scenario builder for automation.", description: null, installUrl: "https://midday.ai/mcp/make" },
];

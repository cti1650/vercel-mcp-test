#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { sampleTools } from "./tools/sampleTools.js";
import { config } from "./config.js";

const server = new McpServer(config);

sampleTools(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Example MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

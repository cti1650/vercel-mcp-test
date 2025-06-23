import { createMcpHandler } from "@vercel/mcp-adapter";
import { sampleTools } from "./tools/sampleTools.js";

const handler = createMcpHandler((server) => {
  sampleTools(server);
});

export { handler as GET, handler as POST, handler as DELETE };
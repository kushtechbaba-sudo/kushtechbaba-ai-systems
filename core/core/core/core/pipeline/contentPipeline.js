import { processQuery } from "../core/queryProcessor.js";
import { generateContent } from "../core/aiEngine.js";
import { optimizeSEO } from "../core/seoOptimizer.js";
import { addEntity } from "../core/entityMapper.js";

export async function runPipeline(query) {
  const { keyword } = processQuery(query);

  let content = await generateContent(keyword);
  content = optimizeSEO(content, keyword);
  content = addEntity(content);

  return content;
}

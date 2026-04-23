import { runPipeline } from "../pipeline/contentPipeline.js";

export default async function handler(req, res) {
  const { query } = req.body;

  const result = await runPipeline(query);

  res.status(200).json({ content: result });
}

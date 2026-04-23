export function processQuery(query) {
  const intent = query.includes("near me") ? "local" : "general";

  return {
    keyword: query,
    intent,
  };
}

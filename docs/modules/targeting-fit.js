export const fitOptions = ["All", "Strong match", "Possible match", "Weak match", "Unscored", "Needs enrichment"]         ;

                                                                                              
                                                  

export function classifyFit(score                           )                    {
  if (score == null || !Number.isFinite(score)) return "Unscored";
  if (score >= 80) return "Strong match";
  if (score >= 60) return "Possible match";
  return "Weak match";
}

export function matchesFitClassification(score                           , filter           , evidenceStatus         ) {
  if (filter === "All") return true;
  if (filter === "Needs enrichment") return ["Pending enrichment", "Enrichment pending", "Enrichment failed"].includes(evidenceStatus ?? "");
  return classifyFit(score) === filter;
}

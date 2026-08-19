/**
 * As 12 áreas ESG, na mesma grafia do backend (`dimensionarea.code`).
 *
 * Substitui o PilarEnum no contrato de sugestões: o Gemini passou a devolver
 * um texto corrido por ÁREA, não por pilar. O pilar continua existindo como
 * agrupamento visual, mas é derivado da área — ver `PILAR_BY_AREA`.
 */
export enum AnswerAreaEnum {
  // Ambiental
  Nature = 'Nature',
  Natural_Resources = 'Natural_Resources',
  Waste_Management = 'Waste_Management',
  Climate_Risk = 'Climate_Risk',
  // Social
  Fair_Work = 'Fair_Work',
  Community = 'Community',
  Society = 'Society',
  Value_Chain = 'Value_Chain',
  // Governança
  Risk = 'Risk',
  Management = 'Management',
  Transparency = 'Transparency',
  Economic = 'Economic',
}

export const AREA_LABELS: Record<string, string> = {
  Nature: 'Natureza',
  Natural_Resources: 'Recursos naturais',
  Waste_Management: 'Gestão de resíduos e poluição',
  Climate_Risk: 'Clima e riscos',
  Fair_Work: 'Trabalho justo',
  Community: 'Comunidade',
  Society: 'Sociedade',
  Value_Chain: 'Cadeia de valor',
  Risk: 'Risco',
  Management: 'Gestão',
  Transparency: 'Transparência',
  Economic: 'Econômica',
};

/** Pilar de cada área, para o agrupamento visual da aba (ADR-0031). */
export const PILAR_BY_AREA: Record<string, 'E' | 'S' | 'G'> = {
  Nature: 'E',
  Natural_Resources: 'E',
  Waste_Management: 'E',
  Climate_Risk: 'E',
  Fair_Work: 'S',
  Community: 'S',
  Society: 'S',
  Value_Chain: 'S',
  Risk: 'G',
  Management: 'G',
  Transparency: 'G',
  Economic: 'G',
};

export const PILAR_LABELS: Record<string, string> = {
  E: 'Ambiental',
  S: 'Social',
  G: 'Governança',
};

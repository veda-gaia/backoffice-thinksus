import { AiSuggestionStatusEnum } from 'src/app/enums/ai-suggestion-status.enum';
import { AnswerAreaEnum } from 'src/app/enums/answer-area.enum';

export interface AiSuggestionTextInterface {
  pt: string;
  en: string;
  es: string;
}

export interface AiSuggestionItemInterface {
  _id: string;
  // Area nas 12 granularidades. Era PilarEnum (E/S/G); o `questionId` deixou
  // de existir — a area vem no proprio item.
  area: AnswerAreaEnum;
  text: AiSuggestionTextInterface;
  status: AiSuggestionStatusEnum;
}

export interface AiSuggestionInterface {
  _id: string;
  esgRatingId: string;
  section?: string;
  segment?: string;
  /**
   * Incrementa a cada geracao. Vai junto em aprovar/editar para a API
   * detectar que a lista da tela ficou obsoleta (409 AI_SUGGESTIONS_STALE).
   */
  generationRevision: number;
  generationStatus?: string;
  suggestions: AiSuggestionItemInterface[];
}

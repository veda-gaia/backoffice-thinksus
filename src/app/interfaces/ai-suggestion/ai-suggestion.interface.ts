import { AiSuggestionStatusEnum } from 'src/app/enums/ai-suggestion-status.enum';
import { PilarEnum } from 'src/app/enums/pilar.enum';

export interface AiSuggestionTextInterface {
  pt: string;
  en: string;
  es: string;
}

export interface AiSuggestionItemInterface {
  _id: string;
  area: PilarEnum;
  questionId: string;
  text: AiSuggestionTextInterface;
  status: AiSuggestionStatusEnum;
}

export interface AiSuggestionInterface {
  _id: string;
  esgRatingId: string;
  section: string;
  suggestions: AiSuggestionItemInterface[];
}

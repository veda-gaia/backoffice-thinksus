import { PilarEnum } from 'src/app/enums/pilar.enum';
import { CompanySectionEnum } from 'src/app/enums/company-section.enum';

export interface AiExampleInterface {
  _id?: string;
  pilar: PilarEnum;
  setor?: CompanySectionEnum | null;
  score: number;
  inputContext: string;
  expectedOutput: string;
  isActive?: boolean;
}

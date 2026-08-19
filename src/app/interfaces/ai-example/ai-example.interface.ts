import { AnswerAreaEnum } from 'src/app/enums/answer-area.enum';
import { SectionInterface } from '../forms/section.interface';
import { SegmentInterface } from '../forms/segment.interface';

/**
 * ADR-0033: setor e segmento sao entidades do banco, nao enums. O `pilar`
 * sumiu — e derivavel da area, e manter os dois permitia divergencia (exemplo
 * marcado como pilar S numa area de E).
 *
 * `section`/`segment` nulos representam o exemplo generico.
 */
export interface AiExampleInterface {
  _id?: string;
  area: AnswerAreaEnum;
  /** Na leitura vem hidratado; na escrita envia-se o id. */
  section?: SectionInterface | string | null;
  segment?: SegmentInterface | string | null;
  score: number;
  inputContext: string;
  /** Texto corrido da area inteira, nao uma sugestao pontual por pergunta. */
  expectedOutput: string;
  isActive?: boolean;
}

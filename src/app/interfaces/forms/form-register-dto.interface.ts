import { SectionRegisterDto } from './section-register-dto';
import { SegmentRegisterDto } from './segment-register-dto';

export interface FormRegisterDto {
  _id?: string;
  sectionId: SectionRegisterDto;
  segments: SegmentRegisterDto[];
}

import BaseInterface from "../base.interface";
import { DimensionAreaInterface } from "./dimension-area.interface";

export interface QuestionRegisterDto {
  _id: string | null;
  name: string;
  dimension: string;
  area: DimensionAreaInterface;
  description: string;
  type: string;
  weight: number;
  ods: number[];
  documentNeeded: boolean;
  esgFormId: string;
}

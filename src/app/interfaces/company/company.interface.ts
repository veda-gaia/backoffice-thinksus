import { CompanyEmployeesEnum } from "src/app/enums/company-employees.enum";
import { SectionInterface } from "../forms/section.interface";
import { SegmentInterface } from "../forms/segment.interface";
import BaseInterface from "../base.interface";
import { UserInterface } from "../user/user.interface";
import { CompanyRevenueEnum } from "src/app/enums/company-revenue.enum";

export default interface CompanyInterface extends BaseInterface {
  company: string;
  cnpj: string;
  companyAdress: CompanyAdress;
  // ADR-0033: referencias hidratadas {_id, name}. Na escrita envia-se o id.
  segment: SegmentInterface | string;
  section: SectionInterface | string;
  numberEmployees: CompanyEmployeesEnum;
  revenue?: CompanyRevenueEnum;
  user: UserInterface;
}

interface CompanyAdress{
  country: string;
  state: string;
  city: string;
  zipCode?: string;
}

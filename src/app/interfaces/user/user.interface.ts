import BaseInterface from '../base.interface';

export interface UserInterface extends BaseInterface {
  name: string;
  email: string;
  password: string;
  active: boolean;
  funcionalitypermissions: FuncionalityPermission[];
}

export enum FuncionalityPermission {
  Dashboard = 1,
  ControleUsuarios = 2,
  VerificacaoDocumentos = 3,
  ControleFormularios = 4,
}

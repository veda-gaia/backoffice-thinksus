export interface UserRegisterRequestDto {
  user: UserRegisterDto;
  lang: string;
}

interface UserRegisterDto {
  id: string;
  name: string;
  email: string;
  active: boolean;
  funcionalitypermissions: string[];
}

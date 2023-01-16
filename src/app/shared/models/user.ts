export interface UserInterface {
  id: number;
  name: string;
  last_name: string;
  status: string;
  application_account: string;
  checking_account: string;
  cpf: number;
}

export default class User implements UserInterface {
  constructor(
    public id: number,
    public name: string,
    public last_name: string,
    public status: string,
    public application_account: string,
    public checking_account: string,
    public cpf: number
  ) {}
}

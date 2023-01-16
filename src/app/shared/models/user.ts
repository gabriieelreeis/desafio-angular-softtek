export interface UserInterface {
  id: number;
  name: string;
  last_name: string;
  status: string;
  application_account: string;
  checking_account: string;
  cpf: number;
  fullName(): string;
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
  ) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.status = status;
    this.application_account = application_account;
    this.checking_account = checking_account;
    this.cpf = cpf;
  }

  fullName(): string {
    return `${this.name} ${this.last_name}`;
  }
}

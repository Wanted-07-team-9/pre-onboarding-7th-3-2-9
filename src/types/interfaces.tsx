export interface IForm {
  email: string;
  password: string;
}

export interface IAccount {
  id: number;
  assets : string;
  broker_id : string;
  created_at : string;
  is_active : boolean;
  name : string;
  number : string;
  payments : string;
  status : number;
  updated_at : string;
  user_id : number;
  uuid : number;
}
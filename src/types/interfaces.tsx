export interface IForm {
  email: string;
  password: string;
}

export interface IAccount {
  id: string;
  assets : string;
  broker_id : string;
  created_at : string;
  is_active : boolean;
  name : string;
  number : string;
  payments : string;
  status : string;
  updated_at : string;
  user_id : number;
  uuid : number;
}

export interface IServerSideProps {
  id: number
}

export interface IEditAccount{
  assets : string;
  broker_id : string;
  is_active : string;
  name : string;
  number : string;
  payments : string;
  status : string
}

export interface ICreateAccount {
  broker_id : string;
  assets : string;
  is_active : string | boolean;
  name : string;
  number : string;
  payments : string;
  status : string
  created_at ?: object;
}

export interface IBrokerOption {
  brokerCode : string;
  brokerName : string
}

export interface IObjectKey {
  [key:string] : string;
}

export interface IUser{
  address : string;
  age : number;
  birth_date : string;
  created_at : string;
  detail_address : string;
  email : string;
  gender_origin : number;
  id : number;
  last_login : string;
  name : string;
  phone_number : string;
  photo : string;
  updated_at : string;
  uuid : string;
}
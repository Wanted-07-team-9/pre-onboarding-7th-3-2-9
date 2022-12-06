import {Dispatch, SetStateAction} from 'react'

export interface IForm {
  email: string;
  password: string;
}

export interface IAccount {
  id: string;
  assets : string;
  broker_id : string;
  created_at : string;
  is_active : string;
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

export interface IUserData{
  address : string;
  age : number;
  birth_date : string;
  created_at : string;
  detail_address : string;
  email : string;
  gender_origin : number;
  id : number;
  last_login : string;
  name : string ;
  phone_number : string;
  photo : string;
  updated_at : string;
  uuid : string;
}
export interface ICUstomerName {
  [key : number] : string
}

export interface ICreateFormProp {
  mutate: any;
  setIsModalOpen : Dispatch<SetStateAction<boolean>>
}

export interface IFilter {
  setIsModalOpen : Dispatch<SetStateAction<boolean>>;
}

export interface IStatus {
  status: string
}

export interface IParam {
  pathName: string | null;
  page: string |  string[] | null;
  active: string | string[] |null;
  broker: string | string[] | null;
  status: string | string[] | null;
  q: string | string []| null;
}
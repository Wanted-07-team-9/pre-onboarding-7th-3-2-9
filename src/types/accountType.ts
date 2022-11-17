export type accountType = {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};

export type mergedAccountType = accountType & {
  userName: string;
  user_id: number;
};

export type accountTableType =
  | 'broker_id'
  | 'userName'
  | 'name'
  | 'number'
  | 'created_at'
  | 'status'
  | 'assets'
  | 'payments'
  | 'is_active';

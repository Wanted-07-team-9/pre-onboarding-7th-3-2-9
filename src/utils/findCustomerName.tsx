import { IUserData } from "../types/interfaces"

export const findCustomerName = (usersData : IUserData[], user_id : number | undefined) : string | undefined => {
  const userName  = usersData.find((el : IUserData)=>el.id === user_id)
  return userName?.name
}
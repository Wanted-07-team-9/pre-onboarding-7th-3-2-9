export const findCustomerName = (usersData : any, user_id : number) : string => {
  const userName = usersData.find((el : any)=>el.id === user_id)
  return userName?.name
}
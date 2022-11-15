import { selectorFamily } from "recoil"
import { fetchUser } from "../../api/api"

export const userList = selectorFamily({
  key : 'userDetailData',
  get : (page: any) => async () =>{
    const data = await fetchUser(page)
    return data
  }
})
import { selector } from "recoil"
import { fetchUser } from "../../api/api"

export const userList = selector({
  key : 'userList',
  get : async() => {
    const data = await fetchUser()
    return data
  }
})
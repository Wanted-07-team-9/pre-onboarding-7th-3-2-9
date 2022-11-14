import { selector } from "recoil";
import { fetchAccount } from "../../api/api";


export const accountList = selector({
  key: 'accountList',
  get : async() => {
    const data = await fetchAccount()
    return data
  }
})



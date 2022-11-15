import { selector, selectorFamily } from "recoil";
import { fetchAccount, fetchAccountDetail } from "../../api/api";


export const accountList = selectorFamily({
  key: 'accountList',
  get : (page:any) => async() => {
    const data = await fetchAccount(page)
    return data
  }
})


export const accountDetail = selectorFamily({
  key : 'accountDetail',
  get:  (id : any) => async () => {
    const response = await fetchAccountDetail(id)
    return response
  }
})
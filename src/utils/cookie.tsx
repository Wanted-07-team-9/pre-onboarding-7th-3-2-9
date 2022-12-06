import cookie from 'react-cookies'
import { Flip,toast } from 'react-toastify'

export const removeCookie = () => {
  cookie.remove('accessToken')
  toast.info('로그아웃',{
    hideProgressBar: true,
    draggable:false,
    transition:Flip
  })
}
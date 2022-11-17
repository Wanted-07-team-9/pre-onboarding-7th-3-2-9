import { ACCOUNT_NUMBER_TYPE } from "./account/accountObj";

export function convertDate (inputDate:Date){
    
    let date = new Date(inputDate)
    let day = ['일', '월', '화', '수', '목', '금', '토'];

    let dateFormat1 = date.getFullYear() + '년 ' + (date.getMonth()+1) + '월 '
	+ date.getDate() + '일 ' + day[date.getDay()] + '요일 '
	+ date.getHours() + '시 ' + date.getMinutes() + '분 '
	+ date.getSeconds() + '초'

    return dateFormat1;
}

export function convertAssest(inputAssest : string){
    return parseInt(inputAssest).toLocaleString('ko-KR');
}
//FIXME : 앞 또는 뒷 첫 2자리가 - 가 들어갈경우, 3개 이하의 숫자만 * 처리됨.
export function convertAccountNumber(accountStatus:string,inputNumber : string){
    const accountType = ACCOUNT_NUMBER_TYPE[accountStatus];
    const accountSplite = accountType.split('')
    let inputSlite = inputNumber.split('')
    let accountNumber = ''
    for (let index = 0; index < accountSplite.length; index++) {
        
        if(isNaN( parseInt(accountSplite[index]))){
            accountNumber += "-"
        }else if(index > 1 && accountSplite.length-index > 2 ){
            inputSlite.splice(0,1)
            accountNumber += "*" 
        }
        else{
            accountNumber += inputSlite.splice(0,1)
        }
    }
    return accountNumber
}
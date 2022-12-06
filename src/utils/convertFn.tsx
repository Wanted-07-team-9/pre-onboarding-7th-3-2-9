import {BROKER_LIST, ACCOUNT_STATUS, BROKER_FORMAT} from './constantValue'

export const convertBrokerId = (brokerID: string) => {
  const BrokerName = BROKER_LIST[brokerID]
  return BrokerName
}

export const convertAccountStatus = (status : string) => {
  const AccountStatus = ACCOUNT_STATUS[status]
  return AccountStatus
}

export const convertAccountNumber = (broker : string,number:string) => {
  const format = BROKER_FORMAT[broker].split('-')
  const zeroCount = format.map((el)=>el.length)
  const startLength = number.length-4
  const convertedNumber = number?.slice(0,2) + "*".repeat(startLength) + number?.slice(-2)
  const convert = convertedNumber.slice(0,zeroCount[0]) + '-' +  convertedNumber.slice(zeroCount[0],zeroCount[0]+zeroCount[1]) + '-'  +convertedNumber.slice(zeroCount[0]+zeroCount[1])
  return convert
}

export const convertIsoToTimeStamp = (createdAt : string) => {
  let date  = new Date(createdAt);
  const newDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return newDate;
};

export const convertComma = (amount : string | number) => {
  let money = amount ? Number(amount) : 0
  const commaAmount =  '￦' + money?.toLocaleString('ko-KR')
  return commaAmount
}

export const convertPhoneNumber = (phonNumber : string) => {
  const convertedPhoneNumber = phonNumber?.slice(0, 4) + '****' + phonNumber?.slice(8, 13)
  return convertedPhoneNumber
}

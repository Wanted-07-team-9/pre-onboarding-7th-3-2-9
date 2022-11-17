import {BROKER_LIST, ACCOUNT_STATUS} from './constantValue'

export const convertBrokerId = (brokerID: number) => {
  const BrokerName = BROKER_LIST[brokerID]
  return BrokerName
}

export const convertAccountStatus = (status) => {
  const AccountStatus = ACCOUNT_STATUS[status]
  return AccountStatus
}

export const convertAccountNumber = (number) => {
  const convertedNumber = '**' + number?.slice(2, -2) + '**'
  return convertedNumber
}

export const convertIsoToTimeStamp = (createdAt) => {
  let date = new Date(createdAt);
  date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return date;
};

export const convertComma = (amount) => {
  let money = amount ? Number(amount) : 0
  const commaAmount = money?.toLocaleString('ko-KR')
  return commaAmount
}

export const convertPhoneNumber = (phonNumber) => {
  const convertedPhoneNumber = phonNumber?.slice(0, 4) + '****' + phonNumber?.slice(8, 13)
  return convertedPhoneNumber
}
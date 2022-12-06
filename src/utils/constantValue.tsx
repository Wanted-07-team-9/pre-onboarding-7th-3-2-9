import type { IObjectKey, IBrokerOption } from "../types/interfaces"

export const BROKER_LIST_OPTON : IBrokerOption[] = [
  {
    brokerCode: "209",
    brokerName: "유안타증권"
  },
  {
    brokerCode: "218",
    brokerName: "현대증권"
  },
  {
    brokerCode: "230",
    brokerName: "미래에셋증권"
  },
  {
    brokerCode: "238",
    brokerName: "대우증권"
  },
  {
    brokerCode: "240",
    brokerName: "삼성증권"
  },
  {
    brokerCode: "243",
    brokerName: "한국투자증권"
  },
  {
    brokerCode: "247",
    brokerName: "우리투자증권"
  },
  {
    brokerCode: "261",
    brokerName: "교보증권"
  },
  {
    brokerCode: "262",
    brokerName: "하이투자증권"
  },
  {
    brokerCode: "263",
    brokerName: "HMC투자증권"
  },
  {
    brokerCode: "264",
    brokerName: "키움증권"
  },
  {
    brokerCode: "265",
    brokerName: "이베스트투자증권"
  },
  {
    brokerCode: "266",
    brokerName: "SK증권"
  },
  {
    brokerCode: "267",
    brokerName: "대신증권"
  },
  {
    brokerCode: "268",
    brokerName: "아이엠투자증권"
  },
  {
    brokerCode: "269",
    brokerName: "한화투자증권"
  },
  {
    brokerCode: "270",
    brokerName: "하나대투자증권"
  },
  {
    brokerCode: "279",
    brokerName: "동부증권"
  },
  {
    brokerCode: "280",
    brokerName: "유진투자증권"
  },
  {
    brokerCode: "288",
    brokerName: "카카오페이증권"
  },
  {
    brokerCode: "287",
    brokerName: "메리츠종합금융증권"
  },
  {
    brokerCode: "290",
    brokerName: "부국증권"
  },
  {
    brokerCode: "291",
    brokerName: "신영증권"
  },
  {
    brokerCode: "292",
    brokerName: "LIG투자증권"
  },
  {
    brokerCode: "271",
    brokerName: "토스증권"
  }
]

export const BROKER_LIST : IObjectKey = {
  "209": "유안타증권",
  "218": "현대증권",
  "230": "미래에셋증권",
  "238": "대우증권",
  "240": "삼성증권",
  "243": "한국투자증권",
  "247": "우리투자증권",
  "261": "교보증권",
  "262": "하이투자증권",
  "263": "HMC투자증권",
  "264": "키움증권",
  "265": "이베스트투자증권",
  "266": "SK증권",
  "267": "대신증권",
  "268": "아이엠투자증권",
  "269": "한화투자증권",
  "270": "하나대투자증권",
  "279": "동부증권",
  "280": "유진투자증권",
  "288": "카카오페이증권",
  "287": "메리츠종합금융증권",
  "290": "부국증권",
  "291": "신영증권",
  "292": "LIG투자증권",
  "271": "토스증권"
}

export const BROKER_FORMAT : IObjectKey = {
  "209": "00-00000000-00",
  "218": "00-0000000-000",
  "230": "00-000000-0000",
  "238": "00-000-0000-000",
  "240": "00-0000-000000",
  "243": "00-000000000-0",
  "247": "00-0000-000000",
  "261": "00-00-00000000",
  "262": "00-0000000-000",
  "263": "00-0000-000000",
  "264": "00-0000-00-0000",
  "265": "00-000-000-0000",
  "266": "00-00000-00000",
  "267": "00-000-0000000",
  "268": "00-000000-00-00",
  "269": "00-00000-00000",
  "270": "00-000-0000000",
  "279": "00-00000-00000",
  "280": "00-0000-000000",
  "288": "00-00000000-00",
  "287": "00-0000-00000-0",
  "290": "00-000000-0000",
  "291": "00-0000-000000",
  "292": "00-00000-00000",
  "271": "00-000-0000000"
}

export const ACCOUNT_STATUS : IObjectKey = {
  "9999": "관리자확인필요",
  "1": "입금대기",
  "2": "운용중",
  "3": "투자중지",
  "4": "해지"
}


export const ACCOUNT_STATUS_OPTION = [
  {
    statusCode: '9999',
    accountStatus: '관리자확인필요'
  },
  {
    statusCode: '1',
    accountStatus: '입금대기'
  },
  {
    statusCode: '2',
    accountStatus: '운용중'
  },
  {
    statusCode: '3',
    accountStatus: '투자중지'
  },
  {
    statusCode: '4',
    accountStatus: '해지'
  },
]

export const ACCOUNTS_COLUMNS = [
'고객명', '증권사', '계좌번호', '계좌상태', '계좌명', '평가금액', '입금금액', '수익률', '계좌활성화여부', '계좌개설일'
]

export const USERS_COLUMNS= [
  '고객명', '이메일 주소','주민등록상 성별코드', '생년월일', '휴대폰 번호 ', '최근로그인',  '가입일'
]
## **✨ 배포 링크**

## [배포 바로가기](https://pre-onboarding-7th-3-2-9.vercel.app/)

### 로그인 ID / PASSWORD

### `1234@1234.com` // `1234`

#

### 0️⃣ json-server 배포

- localhost가 아닌 heroku에 json-server를 배포하여 사용

#

## 📝 목차

- [📰 프로젝트 설명](#-프로젝트-설명)
- [🛠️ Dev Tools](#-dev-tools)
- [🖥 프로젝트 실행 방법](#-프로젝트-실행-방법)

#

## **📰 프로젝트 설명**

- 검색창 구현 + 검색어 추천 기능 구현 서비스입니다.

#

## **🛠 Dev Tools**

![badge](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white) ![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) ![badge](https://img.shields.io/badge/React%20Query-df5054?style=flat-square&logo=React-Query&logoColor=white) ![badge](https://img.shields.io/badge/Recoil-4976e0?style=flat-square&logo=Recoil&logoColor=white)  
![badge](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled%20components&logoColor=white) ![badge](https://img.shields.io/badge/MUI-397cf9?style=flat-square&logo=MUI&logoColor=white)  
![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)  
![badge](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) ![badge](https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white)

#

## **🖥 프로젝트 실행 방법**

```sh
### Installation
# Repositorie Clone
git clone https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9.git

# npm 설치 진행
pre-onboarding-7th-3-2-9 % npm install

### Usage
# Local Dev Server 실행
pre-onboarding-7th-3-2-9 % npm run dev

# Local Dev Server 실행 (typescript 검사용)
pre-onboarding-7th-3-2-9 % npm run dev:ts

# Build
pre-onboarding-7th-3-2-9 % npm build
```

#

## **✏ 토의 내용 및 선정**

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/discussions/1)  
[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/discussions/2)  
[🖍 3차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/discussions/5)  
[🖍 4차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/discussions/7)  
[🖍 5차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/discussions/9)

<!-- [🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/20) -->

#

## **💡 Assignment 목차**

- [1️⃣ Assignment](#1️⃣-assignment)
- [2️⃣ Assignment](#2️⃣-assignment)
- [3️⃣ Assignment](#3️⃣-assignment)
- [4️⃣ Assignment](#4️⃣-assignment)
- [5️⃣ Assignment](#5️⃣-assignment)
- [6️⃣ Assignment](#6️⃣-assignment)
- [7️⃣ Assignment](#7️⃣-assignment)

#

### **1️⃣ Assignment**

1. 화면 구성
2. 레이아웃 구성
3. 메뉴 구성

![image](https://user-images.githubusercontent.com/74575497/202511445-27c097b2-1c9b-46c6-936e-571814d2b8d6.png)

⭐️⭐️⭐️⭐️⭐️

### Header, Content, Footer, Sider 영역을 구분하여 진행하였습니다.

### 첨부된 sider.json 파일로 대시보드(준비중), 계좌 목록, 사용자(준비중), 로그아웃 메뉴로 구분하였습니다.

⭐️⭐️⭐️⭐️⭐️

<img width="1917" alt="스크린샷 2022-11-18 오전 2 08 41" src="https://user-images.githubusercontent.com/74575497/202511570-2d824a55-58d3-4868-a7c8-248fd5872b5a.png">

#

### **2️⃣ Assignment**

- 사용자 목록 (범위에서 제외)
- 계좌 목록
- - 표기 정보

| 고객명 | 브로커명 | 계좌번호 |  계좌 상태   |            |
| :----: | :------: | :------: | :----------: | :--------: |
| 계좌명 | 평가금액 | 입금금액 | 계좌활성여부 | 계좌개설일 |

⭐️⭐️⭐️⭐️⭐️

### 표기 정보를 Mui UI의 Table을 이용하여 구현하였으며,

### 고객명: users 데이터에서 id를 매칭하여 실제 이름 표시

### 브로커명: brokers array에서 코드값에 맞는 실제 증권사명 표시

### 계좌번호: 앞뒤 두글자 제외 \* 표시 및 증권사 형식에 맞춘 계좌번호로 표시

### 평가금액: 원화로 표시하고, 입금금액 대비 평가금액이 플러스일경우 빨간색, 마이너스일경우 파란색으로 표시

⭐️⭐️⭐️⭐️⭐️

<p align="center">
<img width="1689" alt="스크린샷 2022-11-18 오전 2 25 21" src="https://user-images.githubusercontent.com/74575497/202515248-04f3bb4b-857a-4ddb-b85b-11bf5d5799f6.png">
</p>

#

### **3️⃣ Assignment**

- Sider 메뉴에서 현제 페이지에 해당하는 메뉴 하이라이트

⭐️⭐️⭐️⭐️⭐️

### 현재 페이지의 path와 href props값을 비교하여 표시

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/blob/19498762d76dd8799239dc71a46cd5c6b1793283/src/components/blocks/ActiveLink.tsx#L11-L14
⭐️⭐️⭐️⭐️⭐️

| <img width="445" alt="스크린샷 2022-11-18 오전 2 31 41" src="https://user-images.githubusercontent.com/74575497/202516608-8649e4f8-6779-44b8-9d37-970cca357c39.png"> | <img width="393" alt="스크린샷 2022-11-18 오전 2 32 10" src="https://user-images.githubusercontent.com/74575497/202516719-9848342c-86de-4c6d-8ea3-3d7a8bbf8379.png"> | <img width="342" alt="스크린샷 2022-11-18 오전 2 35 01" src="https://user-images.githubusercontent.com/74575497/202517369-9e61a7b1-4479-4c80-8c0e-635767bbbe05.png"> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

#

### **4️⃣ Assignment**

- 새로고침해도 로그인 상태 및 화면 유지

⭐️⭐️⭐️⭐️⭐️

### NextAuth.js를 사용하여 사용자 세션 관리 적용

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-2-9/blob/19498762d76dd8799239dc71a46cd5c6b1793283/src/pages/api/auth/%5B...nextauth%5D.ts#L5-L53
⭐️⭐️⭐️⭐️⭐️

#

### **5️⃣ Assignment**

- 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동

⭐️⭐️⭐️⭐️⭐️

### 테이블의 Row에 onClick 이벤트로 상세 페이지 이동

⭐️⭐️⭐️⭐️⭐️

![Nov-18-2022 02-42-22](https://user-images.githubusercontent.com/74575497/202519097-4fd87d4e-52ee-4624-a989-254e8c2a0ac3.gif)

#

### **6️⃣ Assignment**

- 계좌 목록에서 각 계좌 상태별 필터링

⭐️⭐️⭐️⭐️⭐️

### 페이지의 query값과 Recoil을 사용하여 필터링을 관리하였습니다.

⭐️⭐️⭐️⭐️⭐️

<img width="1701" alt="스크린샷 2022-11-18 오전 2 46 02" src="https://user-images.githubusercontent.com/74575497/202519516-2dd65d4e-8c29-41a8-958d-f27f9821fee2.png">

## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## commit message 규칙

⭐ feat : 새로운 기능에 대한 커밋

🎨 ui : 새로운 CSS관련 디자인에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 파일 이동, 파일명 수정, 변수 제거 등의 자잘한 수정에 대한 커밋

⚒ refactor : 코드 리팩토링에 대한 커밋

📝 style : 공백 제거와 같은, 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지 ⚠ 무엇을 했는지 명확하게 작성

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## 코딩 컨벤션

- 컴포넌트의 ID사용은 지양한다.
- react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
- 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
- 코드를 설명하는 주석은 가급적 사용하지 않는다.
- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
- 반환 값이 불린인 함수는 'is'로 시작한다
- 반환 값의 유무를 이용하는 변수는 has로 시작한다
- const와 let은 사용 시점에 선언 및 할당한다.
- 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
- 이벤트 핸들러는 'on'으로 시작한다.
- 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

</div>
</details>

<details>
<summary>Lint, Formatter 규칙</summary>
<div markdown="1">

## Prettier, ESLint 규칙

##### prettier

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

##### ESLint

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

</div>
</details>

## 📚 사용 Library

<details>
<summary>Lib List</summary>
<div markdown="1">

### 공통 Lib

- eslint
- eslint-config-prettier
- husky
- prettier

### production

- react-router-dom
- axios

### dev

- tailwindcss
</div>
</details>

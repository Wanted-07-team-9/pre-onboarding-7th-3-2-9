import Image from 'next/image'
import { HeaderLayout, LeftItem, PageNameWrapper, RightItem, UserInfo, BellWrapper, Alarm, UserName } from './style'

interface IPageName {
  pageName : string
}

const Header = ({pageName} : IPageName) => {
  return(
    <HeaderLayout>
      <LeftItem>
      <Image src='/svg/LIST.svg' alt='리스트' width={30} height={30}  />
      <PageNameWrapper>{pageName}</PageNameWrapper>
      </LeftItem>
      <RightItem>
        <UserInfo>
          개발
        </UserInfo>
        <UserInfo>
          <Image src='/svg/QUESTIONMARK.svg' alt='물음표'  width={30} height={30}/>
        </UserInfo>
        <UserInfo>
          <BellWrapper>
          <Image src='/svg/BELL.svg' alt='종' width={30} height={30} />
          <Alarm>
            99+
          </Alarm>
          </BellWrapper>
        </UserInfo>
        <UserName>
          미미님
        </UserName>
      </RightItem>
    </HeaderLayout>
  )
}


export default Header
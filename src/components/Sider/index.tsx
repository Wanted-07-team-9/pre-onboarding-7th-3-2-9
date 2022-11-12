import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { SiderLayout, LogoWrapper, ImgWrapper,StyledA } from "./style"

const Sider = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false)
  const router = useRouter()
  const handleToggle = () => {
    setIsToggleOpen(!isToggleOpen)
  }
  useEffect(() => {
    if (router.pathname === '/list') {
      setIsToggleOpen(true)
    }
  }, [router.pathname])
  
  return (
    <SiderLayout>
      <LogoWrapper>
        <ImgWrapper>
        <Image src='/svg/LOGO.svg' alt='로고' width={45} height={45} />
        </ImgWrapper>
        <div>PREFACE</div>
      </LogoWrapper>
      <ul>
        <li>
          <ImgWrapper>
          <Image src='/svg/DASHBOARD.svg' alt='user' width={10} height={10} />
          </ImgWrapper>
          대시보드
          </li>
        <li onClick={handleToggle}>
          <ImgWrapper>
          <Image src='/svg/ACCOUNT.svg' alt='user' width={10} height={10} />
          </ImgWrapper>
          계좌목록
          {isToggleOpen ?
          <ImgWrapper className="arrow">
                    <Image src='/svg/UP.svg' alt="닫기" width={6} height={6} />
          </ImgWrapper>
          :
          <ImgWrapper className="arrow">
                    <Image src='/svg/DOWN.svg' alt="열기" width={6} height={6} />
          </ImgWrapper>
        } </li>
        {isToggleOpen ?
          <Link href='/list'>
            <li className={router.pathname === '/list' ? 'selected' : ''}>
              <StyledA className="list">
                <ImgWrapper>
                <Image src='/svg/GRAPH.svg' alt='user' width={10} height={10} />
                </ImgWrapper>
                투자계획
              </StyledA>
            </li>
          </Link> : <></>}
        <Link href='/user'>
          <li className={router.pathname === '/user' ? 'selected' : ''} >
            <StyledA>
              <ImgWrapper>
              <Image src='/svg/UserIcon.svg' alt='user' width={10} height={10} />
              </ImgWrapper>
              사용자
            </StyledA>
          </li>
        </Link>
        <li>
          <ImgWrapper>
          <Image src='/svg/LOGOUT.svg' alt='user' width={10} height={10} />
          </ImgWrapper>
          로그아웃
          </li>
      </ul>
    </SiderLayout>
  )
}

export default Sider
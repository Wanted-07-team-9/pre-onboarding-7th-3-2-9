import styled from "styled-components"
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"

const List = () => {
  return(
    <Container>
      <Sider />
      <div>
        <Header/>
        <div>Content</div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
`

export default List
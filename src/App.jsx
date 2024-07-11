import styled from "styled-components";
import Header from "./components/Header";

function App() {

  return (
    <>
      <AppWrapper>
        <Header />
      <h1>Social Network React</h1>
      </AppWrapper>
    </>
  )
}
const AppWrapper = styled.div`
background-color: #f1f2f5 ;
`;


export default App

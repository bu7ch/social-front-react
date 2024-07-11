import styled from "styled-components";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <AppWrapper>
        <Header />
        <Feed />
      </AppWrapper>
    </>
  );
}
const AppWrapper = styled.div`
  background-color: #f1f2f5;
`;

export default App;

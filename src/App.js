import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import AdicionarObra from './components/HomeComponent/adicionarObra';
import Header from './components/HomeComponent/Header';
import Obras from './components/HomeComponent/Obras';
import SideMenu from './components/HomeComponent/SideMenu';
import HeaderObra from './components/ObrasComponent/HeaderObra';
import ObrasDetail from './components/ObrasComponent/ObraDetail';
import ObraUpdate from './components/ObrasComponent/ObraUpdate';

function App() {

  return (
    <div className="App">
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/home">
            <Container>
                  <SideMenu/>
                  <Main>
                    <Header/>
                    <AdicionarObra/>
                    <Obras/>
                  </Main>
              </Container>
            </Route>
            <Route path="/obras/:id">
              <Container>
                  <SideMenu/>
                  <Main>
                    <HeaderObra/>
                    <ObrasDetail/>
                  </Main>
              </Container>
            </Route>
            <Route path="/update/:id">
              <Container>
                  <SideMenu/>
                  <Main>
                    <HeaderObra/>
                    <ObraUpdate/>
                  </Main>
              </Container>
            </Route>
          </Switch>
        </Router>
      </Wrapper>
        
      
    </div>
  );
}

export default App;

const Wrapper = styled.div`
background-color:#E5E5E5;
`

const Container = styled.div`
width: 100%;
height: 100vh;
@media(max-width: 800px) {
  height: auto;
}
display: flex;
grid-template-rows: 25px auto;
background-color:#E5E5E5;
`

const Main = styled.div`
width: 100%;
margin-left: 3.0rem;
margin-right: 3.0rem;
@media(max-width: 800px) {
  margin-left: 0;
  margin-right: 0;
}
`

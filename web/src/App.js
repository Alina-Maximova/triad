import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Reviews from '../src/pages/reviews'
import Home from '../src/pages/home'
import Price from '../src/pages/price'
import Inform from '../src/pages/inform'
import Footer from './components/footer';
import { Button, Form, Container } from 'react-bootstrap'
import Header from './components/header';


function App() {
  return (
    <>

    <Container style={{right:'0', left:'0' , maxWidth:"100%"}}>
      <Header />
    </Container>
      
      <Container style={{maxWidth:"100%"}}>
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/inform" component={Inform} />
          <Route path='/vk' component={() => {
                    window.location.href = 'https://vk.com/itctrida/'
                }}/>
                  <Route path='/ok' component={() => {
                    window.location.href = 'https://ok.ru/ctriada?st._aid=ExternalGroupWidget_OpenGroup/'
                }}/>

          

        </Switch>
      </Router>
      </Container>

    </>
  );
}
 
export default App;

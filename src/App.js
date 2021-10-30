import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import Header from './layout/Header/Header'
import './App.css';

function App() {
  return (
    <Router>
     <HomePage/>
      <Container>
        <Route></Route>
      </Container>
    </Router>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './component/Login';
import Header from './component/Header';
import Home from './component/Home';
import Detail from './component/Detail';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

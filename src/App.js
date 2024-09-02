import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
   <Router>
     <div className="App">
     <Navbar/>
     <div className="Day">
      <Switch>
        <Route exact path = "/">
         <Home />
        </Route>
        <Route path = "/Create">
        <Create/>
        </Route>
      </Switch>
     </div>
     </div>
   </Router>
  );
}

export default App;

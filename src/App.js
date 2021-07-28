import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/problem-showcase'exact component={Homepage}/>
         <Route path='/problem-showcase/secondpage' exact component={SecondPage}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

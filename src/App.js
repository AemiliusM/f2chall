import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Dog from './Dogs.js';
import Cat from './Cat.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Switch>
       <Route path='/' component={Start}/>
       <Route path='/dog' component={Dog}/>
       <Route path='/cat' component={Cat}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

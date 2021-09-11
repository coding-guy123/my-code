import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'

import Selection from './Pages/SelectionPage';
import Compare from './Pages/ComparePage';
import Form from './Pages/FormPage';
import MenuAppBar from './Components/Homepage resurces/AppBar';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <MenuAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/selection'} > <Selection/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/compare'}  > <Compare/> </Route>
            <Route path={process.env.PUBLIC_URL + '/form'}  > <Form/> </Route>
            
          </Switch>

      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
  }

export default App;

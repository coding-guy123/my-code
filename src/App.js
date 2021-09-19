import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'

import Selection from './Pages/SelectionPage';
import Compare from './Pages/ComparePage';
import Form from './Pages/FormPage';
import MenuAppBar from './Components/AppBar';
import SimpleCard from './Components/Selection Resources/HD pack';
import ButtonLink from './Components/Footer/FooterLinks';
import PrivacyLink from './Components/Footer/PrivacyLink';
import CookieLink from './Components/Footer/CookieLink';
import DLTLink from './Components/Footer/DLTLink';
import ContactLink from './Components/Footer/ContactLink';
import FormBasic from './Pages/FormBasic';
import FormPremium from './Pages/FormPremium';
import HMenu from './Pages/Menu';


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
            {/* Selection Page */}
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            {/* For HomePage do my-code/home */}
            <Route path={process.env.PUBLIC_URL + '/compare'}  > <Compare/> </Route>
            {/* Comparison Page */}
            <Route path={process.env.PUBLIC_URL + '/form'}  > <Form/> </Route>
            {/* HDPack Form */}
            <Route path={process.env.PUBLIC_URL + '/formbasic'}  > <FormBasic/> </Route>
            {/* Basic Form */}
            <Route path={process.env.PUBLIC_URL + '/formpremium'}  > <FormPremium/> </Route>
            {/* Basic Plan Form */}
            <Route path={process.env.PUBLIC_URL + '/menu'}  > <HMenu/> </Route>
            {/* Hamburger Menu */}
            
          </Switch>

      <footer className="App-footer">
        <br/>
        <ButtonLink/>
        <br/>
        <PrivacyLink/>
        <br/>
        <CookieLink/>
        <br/>
        <DLTLink/>
        <br/>
        <ContactLink/>
        <br/>
        <br/>
        Copy Right Information
        <br/>
        <br/>
      </footer>
    </div>
  );
  }

export default App;

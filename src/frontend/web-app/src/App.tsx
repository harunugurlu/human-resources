import * as React from 'react'
import './App.css';
import ApplicationForm from './components/application-form';
import PersonalInfo from './components/personal-info';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FormButtons from './components/form-buttons';
import HomeButton from './components/home-button';
import Home from './components/home';
import Header from './components/header';
import BackgroundImg from './components/background-img';
import UserTable from './components/data-table';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <BackgroundImg />
          <ApplicationForm />
          <UserTable />
        </div>
      </Router>
    </div>
  );
}

export default App;

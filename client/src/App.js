import React from  'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//These are pages
import Randing from "./pages/randing";
import Bets from "./pages/bets";
import BetEachFootballMatch from "./pages/bets/each-football";
import BetEachVirtualGame from "./pages/bets/each-virtualgame";
import Login from "./pages/login";
import ForgotPassword from "./pages/login/forgotPassword";
import Register from "./pages/login/register";
import Verify from "./pages/login/verify";
import Loading from "./pages/loading";
import InstantVirtual from "./pages/bets/instantVirtual";

//These are components
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <Router>
      <div className="betting-container">
      <Header />
      <InstantVirtual />
      </div>
    </Router>  );
}

export default App;

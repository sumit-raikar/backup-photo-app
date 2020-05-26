import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainHomepage from './landing-page/main-homepage';
import Header from './header/header';
import Footer from './footer/footer';
import useWindowSize from './shared-resources/window-properties';

export const WindowContext = React.createContext({});

// class App extends React.Component {
function App() {
  const size = useWindowSize();

  return (
    <div className="app-container">
      <Router>
        <div className="app-header">
          <Header />
        </div>
        <WindowContext.Provider value={size}>
          <div className="app-main">
            <Switch>
              <Route exact path="/">
                <MainHomepage />
              </Route>
            </Switch>
          </div>
        </WindowContext.Provider>
        <div className="app-footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

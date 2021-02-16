import React from 'react';
import './styles.css';
import Script from './script'
import { withTranslation } from 'react-i18next'
import Routes from './routes'
import { HashRouter as Router } from 'react-router-dom'


class App extends React.Component {
  render() {
  
  return (
    <main>
      <Script/>
     
      <Router>
          <Routes />
        </Router>
       
    </main>
  );
}
}
export default withTranslation()(App);

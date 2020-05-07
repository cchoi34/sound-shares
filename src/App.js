import React from 'react';
import logo from './logo.svg';

import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Navbar />
        <Home />
        <Footer />
      </main>
    )
  }
}

export default App;

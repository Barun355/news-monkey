import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './components/Items';
import Navbar from './components/Navbar';



export default class App extends Component {

  apikey = "6d4f9824d68a4f029b1d93949aab27c8";
  country = "in";
  category = "sports";
  page = 1;
  pageSize = 9;

  constructor() {
    super();
    this.state = {
      darkMode: false,
      mode: "light",
    }
  }

  toggle = () => {
    if (!this.state.darkMode) {
      this.setState({
        darkMode: true,
        mode: 'dark',
      })
      console.log('dark mode')
    }
    else {
      this.setState({
        darkMode: false,
        mode: 'light',
      })
      console.log('light mode')
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.darkMode?"text-white":"text-dark"} style={this.state.darkMode?{backgroundColor: "#2c3c4c"}:{backgroundColor: "white"}}>
          <Navbar darkMode={this.state.darkMode} mode={this.state.mode} toggle={this.toggle} />
          <Routes>
            <Route exact path="/" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="general" page={this.page} pageSize={this.pageSize} key="general" />} />
            <Route exact path="/business" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="business" page={this.page} pageSize={this.pageSize} key="business" />} />
            <Route exact path="/sports" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="sports" page={this.page} pageSize={this.pageSize} key="sports" />} />
            <Route exact path="/entertainment" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="entertainment" page={this.page} pageSize={this.pageSize} key="entertainment" />} />
            <Route exact path="/health" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="health" page={this.page} pageSize={this.pageSize} key="health" />} />
            <Route exact path="/science" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="science" page={this.page} pageSize={this.pageSize} key="science" />} />
            <Route exact path="/technology" element={<Items mode={this.state.mode} apikey={this.apikey} country={this.country} category="technology" page={this.page} pageSize={this.pageSize} key="technology" />} />

          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
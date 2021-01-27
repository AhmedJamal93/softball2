import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NavbarSecondary from './components/NavbarSecondary/NavbarSecondary';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Footer from './components/Footer/Footer';
import './App.css';
import { NavbarSecondaryOptions } from './components/NavbarSecondary/SecondaryOptions'
import Potg from './components/images/kawhi.jpeg';
import Brady from './components/images/brady.jpeg';
import Team from './components/images/team.jpeg';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      active:0,
      activeSecondary:0,
      navbarActive:null,
      show:true,
      secondaryOptions:['Home', 'About', 'History']
    }
  }

  handleNavbarChange = (index, title) => {
    this.setState({
      active:index,
      navbarActive:title,
      activeSecondary:0
    }, () => {
      this.setState({
        secondaryOptions:NavbarSecondaryOptions[this.state.navbarActive]
      })
    }    
  )}

  handleSecondaryNavbarChange = (index) => {
    this.setState({
      activeSecondary:index
    })
  }

  render(){
    return(
      <div className="app">
        <Header />
        <Navbar 
          handleNavbarChange={this.handleNavbarChange}
          active={this.state.active}
        />
        <NavbarSecondary 
          show={this.state.show}
          options={this.state.secondaryOptions}
          handleSecondaryNavbarChange={this.handleSecondaryNavbarChange}
          activeSecondary={this.state.activeSecondary}
        />
        <div className="content">
          <ArticleCard 
            image={Potg}
            title="Player Of The Game"
          />
          <ArticleCard 
            image={Brady}
            title="Another Ring for Brady?"
          />
          <ArticleCard 
            image={Team}
            title="Winning It ALL next season!"  
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}
export default App;

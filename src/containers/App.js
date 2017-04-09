import React, {Component} from 'react';
import '../App.css';
import Header from '../views/Header';
import FeaturedOn from '../views/FeaturedOn';
import NavigationBar from '../views/NavigationBar';
import MainBody from '../views/MainBody';
import Comments from '../views/Comments';
import Footer from '../views/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Header />
        <FeaturedOn />
        <MainBody />
        <Comments />
        <Footer />
      </div>
    );
  }
}

export default App;

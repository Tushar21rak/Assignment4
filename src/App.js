import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from './Components/HeaderComp/Header';
import Footer from './Components/FooterComp/Footer';
import MainPage from './Components/MainPage/MainPage';
import Blog1 from './Components/MainPage/Blog1';
import Blog2 from './Components/MainPage/Blog2';
import Blog3 from './Components/MainPage/Blog3';
import main from './Components/MainPage/main';

import './JSX/Home.css';

class App extends Component {
    render() {
        return (
            <Router>
                <main/>
                <div className = "MainBody">
                    <Header/>
                    <hr/>
                    <script  src = "main"></script>
                    <Route exact path='/' component = {MainPage} />
                    <Route exact path='/Blog1' component = {Blog1} />
                    <Route exact path='/Blog2' component = {Blog2} />
                    <Route exact path='/Blog3' component = {Blog3} />
                    <Footer/>

                </div>

            </Router>
        );
    }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Home from "./pages/Home/Home";

import Blog from "./pages/Blog/Blog";
import ViewBlog from "./pages/ViewBlog/ViewBlog";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login/Login";

import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";


if (localStorage.getItem("id_token")) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Wrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/blog" component={ViewBlog} />
                <Route exact path="/viewblog" component={Blog} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile/:id" component={Profile} />

            </Wrapper>
            <Footer />
        </div>
    </Router>
    , document.getElementById("root")

);

registerServiceWorker();

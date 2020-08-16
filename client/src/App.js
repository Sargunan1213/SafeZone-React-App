import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Alert } from "reactstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./react-components/AboutUs";
import ContactUs from "./react-components/ContactUs";
import Home from "./react-components/Home";
import Signup from "./react-components/Signup";
import Login from "./react-components/Login";
import Posts from "./react-components/Posts";
import Footer from "./react-components/Footer";
import AddPost from "./react-components/AddPost";
import AdminPanel from "./react-components/AdminPanel";
import HomeOwnerProfilePage from "./react-components/HomeOwnerProfilePage";
import Feedback from "./react-components/Feedback";
import Live from "./react-components/LiveCases";
import FrontlinerProfilePage from "./react-components/FrontlinerProfilePage";
import DonationPage from "./react-components/DonationPage";
import EditPostPage from "./react-components/EditPostPage";
import UserTwitterFeed from "./react-components/userTwitterFeed";
import EditProfile from "./react-components/EditProfile";
import { getHomes } from "../src/actions/action.js";
import NavBar from "./react-components/NavBar";

class App extends React.Component {
  state = {
    currentUser: null,
    visible: false,
    msg: "",
    color: "primary",
    homes: [],
    home: {
      _id: "",
      address: "",
      description: "",
      price: "",
      username: "",
      phone: "",
      email: "",
      img: "",
      zip: "",
      lat: "",
      lng: "",
    },
  };
  componentDidMount() {
    getHomes(this);
  }

  render() {
    const user = this.state.currentUser ? this.state.currentUser : {};
    return (
      <div>
        <div className="alert-div">
        <Alert color={this.state.color} isOpen={this.state.visible}>
          {this.state.msg}
        </Alert>
        </div>

        <BrowserRouter>
          {!this.state.currentUser ? (
            <NavBar />
          ) : (
            <NavBar
              type={this.state.currentUser.type}
              user={this.state.currentUser}
              app={this}
            />
          )}
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Signup" render={() => <Signup app={this}/>} />
            <Route exact path="/Login" render={() => <Login app={this} />} />
            <Route exact path="/Live" render={() => <Live />} />
            <Route
              exact
              path="/Donation"
              render={() => (
                <DonationPage app={this} homes={this.state.homes} />
              )}
            />
            <Route exact path="/Posts" render={() => <Posts app={this} />} />
            <Route
              exact
              path="/AddPost"
              render={() =>
                this.state.currentUser ? (
                  <AddPost app={this} />
                ) : (
                  <Login app={this} />
                )
              }
            />
            <Route
              exact
              path="/EditPostPage"
              render={() =>
                this.state.currentUser ? (
                  <EditPostPage app={this} home={this.state.home} />
                ) : (
                  <Login app={this} />
                )
              }
            />
            <Route exact path="/Feedback" render={() => <Feedback />} />
            <Route exact path="/AboutUs" render={() => <AboutUs />} />
            <Route exact path="/ContactUs" render={() => <ContactUs />} />
            <Route
              exact
              path="/userTwitterFeed"
              render={() =>
                  <UserTwitterFeed />        
              }
            />
            <Route
              exact
              path="/AdminPanel"
              render={() =>
                this.state.currentUser ? (
                  <AdminPanel app={this} />
                ) : (
                  <Login app={this} />
                )
              }
            />
            <Route
              exact
              path="/HomeOwnerProfilePage"
              render={() =>
                this.state.currentUser ? (
                  <HomeOwnerProfilePage user={user} app={this} />
                ) : (
                  <Login app={this} />
                )
              }
            />
            <Route
              exact
              path="/FrontlinerProfilePage"
              render={() =>
                this.state.currentUser ? (
                  <FrontlinerProfilePage user={user} app={this} />
                ) : (
                  <Login app={this} />
                )
              }
            />

            <Route
              exact
              path="/EditProfileHomeowner"
              render={() =>
                this.state.currentUser ? (
                  <EditProfile type="homeowner" user={user} app={this} />
                ) : (
                  <Login app={this} />
                )
              }
            />
            <Route
              exact
              path="/EditProfileFrontliner"
              render={() =>
                this.state.currentUser ? (
                  <EditProfile type="frontliner" user={user} app={this} />
                ) : (
                  <Login app={this} />
                )
              }
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

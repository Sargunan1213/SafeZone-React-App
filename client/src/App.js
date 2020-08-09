import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

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
import { readCookie, getHomes } from "../src/actions/action.js";
import NavBar from "./react-components/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    readCookie(this); // sees if a user is logged in.
  }
  state = {
    currentUser: null,
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
    },
  };
  componentDidMount() {
    getHomes(this);
  }

  render() {
    const user = this.state.currentUser ? this.state.currentUser : {};
    return (
      <div>
        <BrowserRouter>
          {!this.state.currentUser ? (
            <NavBar />
          ) : (
            <NavBar type={this.state.currentUser.type} />
          )}
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Signup" render={() => <Signup />} />
            <Route exact path="/Login" render={() => <Login app={this} />} />
            <Route exact path="/Live" render={() => <Live />} />
            <Route exact path="/Donation" render={() => <DonationPage />} />
            <Route exact path="/Posts" render={() => <Posts app={this} />} />
            <Route
              exact
              path="/AddPost"
              render={() => <AddPost app={this} />}
            />
            <Route
              exact
              path="/EditPostPage"
              render={() => <EditPostPage app={this} home={this.state.home} />}
            />
            <Route exact path="/Feedback" render={() => <Feedback />} />
            <Route exact path="/AboutUs" render={() => <AboutUs />} />
            <Route exact path="/ContactUs" render={() => <ContactUs />} />
            <Route
              exact
              path="/userTwitterFeed"
              render={() => <UserTwitterFeed />}
            />
            <Route
              exact
              path="/AdminPanel"
              render={() => <AdminPanel app={this} />}
            />
            <Route
              exact
              path="/HomeOwnerProfilePage"
              render={() => <HomeOwnerProfilePage user={user} app={this} />}
            />
            <Route
              exact
              path="/FrontlinerProfilePage"
              render={() => <FrontlinerProfilePage user={user} app={this} />}
            />

            <Route
              exact
              path="/EditProfileHomeowner"
              render={() => (
                <EditProfile type="homeowner" user={this.state.currentUser} />
              )}
            />
            <Route
              exact
              path="/EditProfileFrontliner"
              render={() => (
                <EditProfile type="frontliner" user={this.state.currentUser} />
              )}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

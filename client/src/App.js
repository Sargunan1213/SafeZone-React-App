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

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Signup" render={() => <Signup />} />
            <Route exact path="/Login" render={() => <Login main={this} />} />
            <Route exact path="/Live" render={() => <Live />} />
            <Route exact path="/Donation" render={() => <DonationPage />} />
            <Route exact path="/Posts" render={() => <Posts />} />
            <Route exact path="/AddPost" render={() => <AddPost />} />
            <Route
              exact
              path="/EditPostPage0"
              render={() => <EditPostPage id={0} />}
            />
            <Route
              exact
              path="/EditPostPage1"
              render={() => <EditPostPage id={1} />}
            />
            <Route exact path="/Feedback" render={() => <Feedback />} />
            <Route exact path="/AboutUs" render={() => <AboutUs />} />
            <Route exact path="/ContactUs" render={() => <ContactUs />} />
            <Route
              exact
              path="/userTwitterFeed"
              render={() => <UserTwitterFeed />}
            />
            <Route exact path="/AdminPanel" render={() => <AdminPanel />} />
            <Route
              exact
              path="/HomeOwnerProfilePage"
              render={() => <HomeOwnerProfilePage />}
            />
            <Route
              exact
              path="/FrontlinerProfilePage"
              render={() => <FrontlinerProfilePage />}
            />
            <Route
              exact
              path="/HomeOwnerPosts"
              render={() => <Posts type="homeowner" />}
            />
            <Route
              exact
              path="/SelectPosts"
              render={() => <Posts type="frontliner" />}
            />
            <Route
              exact
              path="/EditProfileHomeowner"
              render={() => <EditProfile type="homeowner" />}
            />
            <Route
              exact
              path="/EditProfileFrontliner"
              render={() => <EditProfile type="frontliner" />}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

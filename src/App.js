import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./react-components/Home";
import Signup from "./react-components/Signup";
import Login from "./react-components/Login";
import blankImg from "./react-components/Home/static/blank.png";
import NavBar from "./react-components/NavBar";
import Posts from "./react-components/Posts";
import Footer from "./react-components/Footer";
import AddPost from "./react-components/AddPost";
import AdminPanel from "./react-components/AdminPanel";
import HomeOwnerProfilePage from "./react-components/HomeOwnerProfilePage";
import Feedback from "./react-components/Feedback";
import Live from "./react-components/LiveCases";
import FrontlinerProfilePage from "./react-components/FrontlinerProfilePage";
import { signout } from "./actions/nav";
import DonationPage from "./react-components/DonationPage";

class App extends React.Component {
  state = {
    navOptions: {
      Home: "",
      Posts: "Posts",
      "Live Cases": "Live",
      "Sign Up": "Signup",
      "Sign In": "Login",
    },
    currentUser: "",
    type: "",
    profileImg: blankImg,
    // Declare hardcoded data here because these data are used to multiple pages/components, 
    // redeclaring them in each component is bad practice.
    // Data will be obtained from server.
    homeowners: {
      user: {
        name: "user",
        age: 34,
        password: "user",
        postId: [0, 1],
        tel: "416-432-1431",
        email: "user@user.com",
      },
    },

    frontliners: {
      user2: {
        fronlinerName: "user2",
        frontlinerAge: 49,
        password: "user2",
        frontlinerTel: "514-123-9030",
        frontlinerEmail: "user2@user.com",
        interest: []
      },
    },

    admins: {
      admin: {
        adminName: "admin",
        adminAge: "25",
        password: "admin",
        adminTel: "416-432-0000",
        adminEmail: "admin@user.com",
      },
    },

    homes: [
      {
        id: 0,
        address: "4130 George Street",
        city: "Peterborough",
        province: "Ontario",
        country: "Canada",
        zip: "K9H 2L1",
        pic: "home1.jpg",
        description:
          "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
        price: "$1570 per month",
        homeowner: "user", 
      },
      {
        id: 1,
        address: "2350 Bridgeport Rd",
        city: "Milton",
        province: "Ontario",
        country: "Canada",
        zip: "L9T 2Y1",
        pic: "home2.jpg",
        description:
          "10 min walk to subway, fully furnished, no pets, no smoking",
        price: "$1300 per month",
        homeowner: "user",
      },
    ],
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar
            navOptions={this.state.navOptions}
            profileImg={this.state.profileImg}
            signout={() => {signout(this)}}
            type={this.state.type}
          />

          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Signup" render={() => <Signup />} />
            <Route exact path="/Login" render={() => <Login main={this} />} />
            <Route exact path="/Live" render={() => <Live />} />
            <Route exact path="/Donation" render={() => <DonationPage />} />
            <Route
              exact
              path="/Posts"
              render={() => (
                <Posts
                  homes={this.state.homes}
                  owners={this.state.homeowners}
                  edit={false}
                  app={this}
                  type={this.state.type}
                />
              )}
            />
            <Route exact path="/AddPost" render={() => <AddPost />} />
            <Route exact path="/Feedback" render={() => <Feedback />} />
            <Route
              exact
              path="/AdminPanel"
              render={() => (
                <AdminPanel
                  homes={this.state.homes}
                  homeowners={this.state.homeowners}
                  frontliners={this.state.frontliners}
                  app={this}
                />
              )}
            />
            <Route
              exact
              path="/HomeOwnerProfilePage"
              render={() => (
                <HomeOwnerProfilePage owner={this.state.homeowners[this.state.currentUser]} />
              )}
            />
            <Route
              exact
              path="/FrontlinerProfilePage"
              render={() => (
                <FrontlinerProfilePage frontlineOwner={this.state.frontliners[this.state.currentUser]} />
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

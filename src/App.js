import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./react-components/Home";
import Signup from "./react-components/Signup";
import Login from "./react-components/Login";
import { signIn } from "./actions/nav";
import blankImg from "./react-components/Home/static/blank.png";
import NavBar from "./react-components/NavBar";
import Posts from "./react-components/Posts";
import Footer from "./react-components/Footer";
import AddPost from "./react-components/AddPost";
import AdminPanel from "./react-components/AdminPanel";
import HomeOwnerProfilePage from "./react-components/HomeOwnerProfilePage";

class App extends React.Component {
  state = {
    navOptions: {
      Home: "",
      Posts: "Posts",
      "Sign Up": "Signup",
      "Sign In": "Login"
    },
    currentUser: "",
    profileImg: blankImg,
    // May move later
    homeowners: {
      user: {
      name: "user",
      age: 34,
      password: "user",
      postId: [0, 1],
      tel: "416-432-1431",
      email: "user@user.com"
      }
    },
    frontliners: { user2: { password: "user2" } },
    admins: { admin: { password: "admin" } },
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
        homeowner: "user", // Get info about homeowner in homeowner list
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
      }
    ]
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar
            navOptions={this.state.navOptions}
            signIn={() => signIn(this)}
            profileImg={this.state.profileImg}
          />

          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Signup" render={() => <Signup />} />
            <Route exact path="/Login" render={() => <Login />} />
            <Route
              exact
              path="/Posts"
              render={() => (
                <Posts
                  homes={this.state.homes}
                  owners={this.state.homeowners}
                  edit={false}
                />
              )}
            />
            <Route exact path="/AddPost" render={() => <AddPost />} />
            <Route exact path="/AdminPanel" render={() => 
              <AdminPanel 
                homes={this.state.homes} 
                homeowners={this.state.homeowners} 
                frontliners={this.state.frontliners}
                app={this}
              />} 
            />
            <Route exact path="/HomeOwnerProfilePage" render={() => <HomeOwnerProfilePage owner={this.state.homeowners['user']} />} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

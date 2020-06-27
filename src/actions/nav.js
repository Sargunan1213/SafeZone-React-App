
// temp sign in to test nav bar changes
import profileImg1 from '../react-components/NavBar/static/profile.png';

export const signIn = (app, username, pwd) => {

    let currentUser = "";
    let type = "";
    const navOptions = app.state.navOptions;

    // Get names and password from server
    // Requires server call
    if (username === "user"  && pwd === "user"){
        currentUser = username;
        navOptions["Add Post"] = "AddPost";
        navOptions[currentUser] = "HomeOwnerProfilePage";
        type = "homeowner";
    }
    else if (username === "user2"  && pwd === "user2"){
        currentUser = username;
        navOptions[currentUser] = "FrontlinerProfilePage";
        type = "frontliner";
    }

    else if (username === "admin"  && pwd === "admin"){
        currentUser = username;
        navOptions["Admin Panel"] = "AdminPanel";
    }
    
    if (!currentUser){
        return
    }

    delete navOptions["Sign In"];
    delete navOptions["Sign Up"];

    app.setState({
        navOptions: navOptions,
        currentUser: currentUser,
        profileImg: profileImg1,
        type: type
    });
};

export const removeHome = (app, homes, home) => {
    // delete home information from server
    // requires server call
    delete homes[homes.indexOf(home)];

    app.setState({
        homes: homes
    })
}

export const addInterestedHome = (app, homeId) => {
    const frontliners = app.state.frontliners;

     // add interested home under user to server
     // requires server call
    frontliners[app.state.currentUser].interest.push(homeId);

    app.setState({
        frontliners: frontliners
    })
}

export const signout = (app) => {
    const navOptions = {
        Home: "",
        Posts: "Posts",
        "Live Cases": "Live",
        "Sign Up": "Signup",
        "Sign In": "Login",
      };

    app.setState({
        navOptions: navOptions
    })
}
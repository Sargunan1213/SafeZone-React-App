
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
        delete navOptions["Posts"];
        navOptions["My Posts"] = "Posts";
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
        type = "admin";
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

export const removeHome = (comp, homes, home) => {
    // delete home information from server
    // requires server call
    delete homes[homes.indexOf(home)];

    comp.setState({
        homes: homes
    })
}

export const addInterestedHome = (comp, homeId) => {
    const frontliners = comp.state.frontliners;

     // add interested home under user to server
     // requires server call
    frontliners[comp.state.currentUser].interest.push(homeId);

    comp.setState({
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

export const editPost = (event) => {
    // edit home post details
    // requires server call to manipulate original data to updated data
    alert("Details of the house were changed: ");
    event.preventDefault();
}

export const handleInputChange = (event, component) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    component.setState({
      [name]: value,
    });
    console.log("typing");
  }

export const submitForm = (event) => {
    // add home post details
    // requires server call to add original data to updated data
    alert("Details of the house were changed: ");
    event.preventDefault();
}

// temp sign in to test nav bar changes
import profileImg1 from '../react-components/NavBar/static/profile.png';

export const signIn = (app) => {

    const navOptions = app.state.navOptions;
    const currentUser = "user1";

    delete navOptions["Sign In"];
    delete navOptions["Sign Up"];
    navOptions[currentUser] = "";

    app.setState({
        navOptions: navOptions,
        currentUser: currentUser,
        profileImg: profileImg1
    });
};
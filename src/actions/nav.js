
// temp sign in to test nav bar changes
import profileImg1 from '../react-components/NavBar/static/profile.png';

export const signIn = (home) => {

    const navOptions = home.state.navOptions;
    const currentUser = "user1";

    navOptions.pop();
    navOptions.pop();
    navOptions.push(currentUser);

    home.setState({
        navOptions: navOptions,
        currentUser: currentUser,
        profileImg: profileImg1
    });
};
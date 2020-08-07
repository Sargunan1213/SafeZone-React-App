const log = console.log
// A function to check if a user is logged in on the session cookie
export const readCookie = (app) => {
  const url = "/users/check-session";

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((json) => {
      if (json && json.currentUser) {
        app.setState({ currentUser: json.currentUser });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A functon to update the login form state
export const updateLoginForm = (loginComp, field) => {
  const value = field.value;
  const name = field.name;

  loginComp.setState({
    [name]: value,
  });
};

// Sign up a user

export const signUpUser = (comp) => {
  const request = new Request("/signUpUser", {
    method: "post",
    body: JSON.stringify(comp.state),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a POST request with the user to be logged in
export const signIn = (comp, app) => {
  // Create our request constructor with all the parameters we need
  const request = new Request("/login", {
    method: "post",
    body: JSON.stringify(comp.state),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  console.log(request);

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((json) => {
      if (json.currentUser !== undefined) {
        console.log(json.currentUser);
        app.setState({ currentUser: json.currentUser });
      } else if (json.msg !== null) {
        alert(json.msg);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  let type = comp.state.type;
  comp.setState({
    type: type,
  });
};

// export const signIn = (comp, username, pwd) => {
//   const url = "http://localhost:5000/homeowner";

//   fetch(url)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       } else {
//         alert("Could not get homeowners");
//       }
//     })
//     .then((json) => {
//       console.log(json);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   let currentUser = "";
//   let type = comp.state.type;

//   // Get names and password from server
//   // Requires server call
//   if (username === "user" && pwd === "user") {
//     currentUser = username;
//     type = "homeowner";
//   } else if (username === "user2" && pwd === "user2") {
//     currentUser = username;
//     type = "frontliner";
//   } else if (username === "admin" && pwd === "admin") {
//     currentUser = username;
//     type = "admin";
//   }

//   if (!currentUser) {
//     return;
//   }

//   comp.setState({
//     type: type,
//   });
// };

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = "/users/logout";

  fetch(url)
    .then((res) => {
      app.setState({
        currentUser: null,
        message: { type: "", body: "" },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeHome = (comp, homes, home) => {
  // delete home information from server
  // requires server call
  delete homes[homes.indexOf(home)];

  comp.setState({
    homes: homes,
  });
};

export const addInterestedHome = (comp, homeId) => {
  const frontliners = comp.state.frontliners;

  // add interested home under user to server
  // requires server call
  alert("Interest noted");
  frontliners["user2"].interest.push(homeId);

  comp.setState({
    frontliners: frontliners,
  });
};

export const editPost = (event) => {
  // edit home post details
  // requires server call to manipulate original data to updated data
  alert("Details of the house were changed: ");
  event.preventDefault();
};

export const handleInputChange = (event, component) => {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  component.setState({
    [name]: value,
  });
  console.log("typing");
};

export const submitForm = (event, comp, app) => {
  // add home post details
  const request = new Request("/users/home", {
    method: "post",
    body: JSON.stringify(comp.state),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request).then(function(res) {
    if(res.status === 200) {
      log("success added home")
    }
    else {
      log("error fail to add home")
    }
  }).catch(err => {
    console.log(err)
  })

  const allHomes = getHomes()

  app.setState({homes: allHomes})
  // alert("Details of the house were changed: ");
  event.preventDefault();
};

export const getHomes = () => {
  const url = "/users/home"
  fetch(url).then(function(res) {
    if(res.status === 200) {
      log(res.json())
      return res.json()
    }
    else {
      log("error getting homes")
    }
  }).catch(err => {
    console.log(err)
  })
}

export const removeUser = (comp, users, user) => {
  // delete user information from server
  // requires server call
  if (user === "user") {
    alert("This user has posts, don't delete");
    return;
  }
  delete users[user];

  comp.setState({
    [users]: users,
  });
};

export const submitDonationForm = (event, comp) => {
  // Server call to send this donation data from form into the database.
  alert("Thanks you for your donation of $" + comp.state.donationAmount);
  event.preventDefault();
  const request = new Request("/donation", {
    method: "post",
    body: JSON.stringify(comp.state),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const profileChange = (event, comp) => {
  // Server call to send changed profile info into the database.
  const read = new FileReader();
  read.onload = () => {
    if (read.readyState === 2) {
      comp.setState({
        profilepic: read.result,
      });
    }
  };
  read.readAsDataURL(event.target.files[0]);
  const pic = {
    name: comp.state.name,
    profilePic: event.target.files[0],
  };
  alert("Profile information change for " + comp.state.name);
  event.preventDefault();
  const request = new Request("/changeprofilepic", {
    method: "post",
    body: JSON.stringify(pic),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const update = (event, comp) => {
//   const read = new FileReader();
//   read.onload = () => {
//     if (read.readyState === 2) {
//       comp.setState({
//         profilepic: read.result,
//       });
//     }
//   };
//   read.readAsDataURL(event.target.files[0]);
// };

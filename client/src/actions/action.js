const log = console.log;
// const local = "http://localhost:5000";
const local = "";
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
  const request = new Request(local + "/signUpUser", {
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
    }).then(()=> comp.props.history.push('/Login'))
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a POST request with the user to be logged in
export const signIn = (comp, app) => {
  // Create our request constructor with all the parameters we need
  const request = new Request(local + "/login", {
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
    }).then(()=> comp.props.history.push('/'))
    .catch((error) => {
      console.log(error);
    });

  let type = comp.state.type;
  comp.setState({
    type: type,
  });

  if (app.state.currentUser === "Homeowner") {
  }
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = "/users/logout";
  log("gere")

  fetch(url)
    .then((res) => {
      app.setState({
        currentUser: null,
        message: { type: "", body: "" },
      });
    }).then(()=> app.props.history.push('/'))
    .catch((error) => {
      console.log(error);
    });
};

export const removeHome = (app, id) => {
  // delete home information from server
  const url = local + "/users/home/" + id;
  const request = new Request(url, {
    method: "delete",
    body: JSON.stringify(app.state.home),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        log("success removed home");
      } else {
        log("error fail to remove home");
      }
    })
    .then(() => {
      getHomes(app);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Admin message
export const msg = (msgId) => {
  const url = "/users/AdminPanel/" + msgId;

  const request = new Request(url, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        log("success broadcasted message");
      } else {
        log("error fail to broadcast message");
      }
    })
    .catch((err) => {
      log(err);
    });
};



export const addInterestedHome = (homeId) => {
  const url = "/users/interest/" + homeId;

  const request = new Request(url, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        log("success added interested home");
      } else {
        log("error fail to add interested home");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getInterestedHome = (comp) => {
  const url = "/users/interest"

  fetch(url)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        log("error getting homes");
      }
    })
    .then((json) => {
      comp.setState({ homes: json });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editPost = (event, app, id) => {
  // edit home post details
  const url = "/users/home/" + id;

  const form = new FormData(event.target);

  const request = new Request(local + url, {
    method: "put",
    body: form,
  });

  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        log("success edited home");
      } else {
        log("error fail to edit home");
      }
    })
    .then(() => {
      getHomes(app);
      alert("Home info has changed")
    })
    .catch((err) => {
      console.log(err);
    });
  //alert("Details of the house were changed: ");
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

export const handleInputChangeHome = (event, component) => {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  let newHome = component.state.home;
  newHome[name] = value;

  component.setState({ home: newHome });
  console.log("typing");
};
export const handleInputChangeHomePic = (event, component) => {
  const target = event.target;
  const value = target.files[0];
  const name = target.name;

  let newHome = component.state.home;
  newHome[name] = value;

  component.setState({ home: newHome });
  console.log("typing");
};

export const submitForm = (event, comp, app) => {
  // add home post details
  console.log(app);
  event.preventDefault();
  const form = new FormData(event.target);

  const request = new Request(local + "/users/home", {
    method: "post",
    body: form,
  });
  console.log("HERE", request);
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        log("success added home");
      } else {
        log("error fail to add home");
      }
    })
    .then((apps) => {
      const allHomes = getHomes(app);
    })
    .catch((err) => {
      console.log(err);
    });

  // alert("Details of the house were changed: ");
  event.preventDefault();
};

export const getHomes = (app) => {
  const url = local + "/users/home";
  fetch(url)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        log("error getting homes");
      }
    })
    .then((json) => {
      app.setState({ homes: json });
      console.log(app.state.homes);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editHome = (app, comp, id) => {
  const url = local + "/users/home/" + id;
  fetch(url)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        log("error getting home");
      }
    })
    .then((json) => {
      return app.setState({ home: json });
    })
    .then((apps) => {
      comp.props.history.push("/EditPostPage");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeUser = (id, comp) => {
  // delete user information from server
  const url = local + "/users/" + id;
  const request = new Request(url, {
    method: "delete",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        log("success removed user");
      } else {
        log("error fail to remove user");
      }
      getHomeowners(comp);
      getFrontliners(comp);
    })
    .catch((err) => {
      console.log(err);
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

export const profileInfoChange = (e, comp, id) => {
  if (comp.state.password === "") {
    alert("Enter a password");
    return;
  }

  const url = local + "/users/" + id;
  const request1 = new Request(url, {
    method: "put",
    body: JSON.stringify(comp.state),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  fetch(request1)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
  alert("Changed");
};

export const profileChange = (form, page, app) => {
  const url = local + "/changeprofilepic/" + page.state.name;

  const imageData = new FormData(form);
  console.log(page.state.name);
  // Create our request constructor with all the parameters we need
  const request = new Request(url, {
    method: "post",
    body: imageData,
  });
  log(imageData);
  // console.log(request.name)
  // Send the request with fetch()
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        const json1 = res.json();
        return json1;
      }
    })
    .then((json1) => {
      log(json1);
      app.setState({ currentUser: json1.user });
    })
    .catch((error) => {
      console.log(error);
    });
  // Server call to send changed profile info into the database.
  // const read = new FileReader();
  // read.onload = () => {
  //   if (read.readyState === 2) {
  //     comp.setState({
  //       profilepic: read.result,
  //     });
  //   }
  // };
  // read.readAsDataURL(event.target.files[0]);
  // const pic = {
  //   name: comp.state.name,
  //   profilePic: event.target.files[0],
  // };
  // alert("Profile information change for " + comp.state.name);
  // event.preventDefault();
  // const request = new Request("/changeprofilepic", {
  //   method: "post",
  //   body: JSON.stringify(pic),
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json",
  //   },
  // });

  // // Send the request with fetch()
  // fetch(request)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       return res.json();
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

export const getHomeowners = (comp) => {
  const url = local + "/users/homeowners";
  fetch(url)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        log("error getting homeowners");
      }
    })
    .then((json) => {
      comp.setState({ homeowners: json });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFrontliners = (comp) => {
  const url = local + "/users/frontliners";
  fetch(url)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        log("error getting homeowners");
      }
    })
    .then((json) => {
      comp.setState({ frontliners: json });
    })
    .catch((err) => {
      console.log(err);
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

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
    })
    .then(() => comp.props.history.push("/Login"))
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

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((json) => {
      if (json && json.currentUser !== undefined) {
        console.log(json.currentUser);
        app.setState({ currentUser: json.currentUser });
        app.setState({ visible: true, msg: "Successfully logged in WELCOME!" });
        setTimeout(() => {
          app.setState({
            visible: false,
          });
        }, 3000);
      } else if (json.msg !== null) {
        app.setState({
          visible: true,
          msg: "Wrong Credentials please try Again",
        });
        setTimeout(() => {
          app.setState({ visible: false });
        }, 3000);
      }
    })
    .then(() => comp.props.history.push("/"))
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
  log("gere");

  fetch(url)
    .then((res) => {
      app.setState({
        currentUser: null,
        message: { type: "", body: "" },
      });
    })
    .then(() => app.props.history.push("/"))
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
        app.setState({ visible: true, msg: "Home removed successfully" });
        setTimeout(() => {
          app.setState({
            visible: false,
          });
        }, 3000);
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

export const getTweets = (comp) => {
  const url = local + "/users/userTwitterFeed";

  fetch(url)
    .then(function (res) {
      if (res.status === 200) {
        const json = res.json();
        log(json)
        return json
      } else {
        log("error getting tweets");
      }
    })
    .then((json) => {
      log(json)
      comp.setState({ twitterMsgs: json });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Admin message
export const msg = (event) => {
  event.preventDefault();
  const url = "/users/userTwitterFeed";

  const form = new FormData(event.target);

  const request = new Request(local + url, {
    method: "post",
    body: form,
  });
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        alert("success broadcasted message");
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
  const url = "/users/interest";

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
        app.setState({
          visible: true,
          msg: "Your post was successfully edited!",
        });
        setTimeout(() => {
          app.setState({
            visible: false,
          });
        }, 3000);
      } else {
        log("error fail to edit home");
      }
    })
    .then(() => {
      getHomes(app);
      app.setState({
        visible: true,
        msg: "Home info has changed",
      });
      setTimeout(() => {
        app.setState({ visible: false });
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
    });

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
  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        app.setState({ visible: true, msg: "Successfully added your home!" });
        setTimeout(() => {
          app.setState({
            visible: false,
          });
        }, 3000);
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
        app.setState({ visible: true, msg: "Successfully removed user!" });
        setTimeout(() => {
          app.setState({
            visible: false,
          });
        }, 3000);
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

export const submitDonationForm = (app, event, comp) => {
  // Server call to send this donation data from form into the database.
  app.setState({
    visible: true,
    msg: "Thanks you for your donation of $" + comp.state.donationAmount,
  });
  setTimeout(() => {
    app.setState({ visible: false });
  }, 3000);

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

export const profileInfoChange = (e, comp, id, app) => {
  if (comp.state.password === "") {
    app.setState({
      visible: true,
      msg: "Enter a password",
    });
    setTimeout(() => {
      app.setState({ visible: false });
    }, 3000);
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
    .then(function (res) {
      if (res.status === 200) {
        const json1 = res.json();
        return json1;
      }
    })
    .then((json1) => {
      log(json1);
      app.setState({ currentUser: json1 });
      app.setState({
        visible: true,
        msg: "Profile info changed",
      });
      setTimeout(() => {
        app.setState({ visible: false });
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
    });
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

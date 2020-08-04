export const signIn = (comp, username, pwd) => {
  const url = "http://localhost:5000/homeowner";

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        alert("Could not get homeowners");
      }
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
  let currentUser = "";
  let type = comp.state.type;

  // Get names and password from server
  // Requires server call
  if (username === "user" && pwd === "user") {
    currentUser = username;
    type = "homeowner";
  } else if (username === "user2" && pwd === "user2") {
    currentUser = username;
    type = "frontliner";
  } else if (username === "admin" && pwd === "admin") {
    currentUser = username;
    type = "admin";
  }

  if (!currentUser) {
    return;
  }

  comp.setState({
    type: type,
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

export const submitForm = (event) => {
  // add home post details
  // requires server call to add original house data to updated data
  alert("Details of the house were changed: ");
  event.preventDefault();
};

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
  alert("Profile information change for " + comp.state.name);
  event.preventDefault();
  const request = new Request("/changeprofilepic", {
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

export const update = (event, comp) => {
  const read = new FileReader();
  read.onload = () => {
    if (read.readyState === 2) {
      comp.setState({
        profilepic: read.result,
      });
    }
  };
  read.readAsDataURL(event.target.files[0]);
};

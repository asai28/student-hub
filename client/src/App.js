import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "@progress/kendo-theme-default/dist/all.css";

// components
import Header from "./Components/Navbar";
import Login from "./Pages/Login/loginForm";
import SignupForm from "./Pages/signUpForm";
import Home from "./Pages/Home";
import Internships from "./Pages/Internships";
import RateMyProfessor from "./Pages/RateMyProfessor/RateMyProfessor";
import SchedulerContainer from "./Pages/SchedulerContainer/SchedulerContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }
  // componentDidMount() {
  //   axios.get("/auth/user").then(response => {
  //     console.log(response.data);
  //     if (response.data.user) {
  //       console.log("There is a user! YAY!");
  //       // this.setState({
  //       //   loggedIn: true,
  //       //   user: response.data.user
  //       // });
  //     } else {
  //       console.log("There is no user");
  //       this.setState({
  //         loggedIn: false,
  //         user: null
  //       });
  //     }
  //   });
  // }

  _logout(event) {
    event.preventDefault();
    console.log("Logging you out");
    axios.post("/auth/logout").then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.set({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _login(username, password) {
    // axios.post("/auth/login", (req, res) => {
    //   res.json({ username, password });
    //   //   this.set({
    //   //     loggedIn: true,
    //   //     user: response.data.user
    //   //   });
    //   // }
    // });
    console.log("i'm here")
    axios.post("/auth/login", { username, password }).then(response => {
      console.log("after post")
      console.log(response);
      if (response.status === 200) {
        //update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    }, console.log("after axos post"));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignupForm} />
            <Route
              exact path="/login"
              component={() => <Login login={this._login} />}
            />
            <Route exact path="/home" component={Home} />
            <Route exact path="/rmp" component={RateMyProfessor} />
            <Route exact path="/schedule" component={SchedulerContainer} />
            <Route exact path="/internships" component={Internships} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

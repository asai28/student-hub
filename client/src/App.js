import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Internships from "./Pages/Internships";
import Navbar from "./Components/Navbar/index";
// import RateMyProfessor from "./Pages/RateMyProfessor";
// import Widgets from "./Pages/Widgets";
import NoMatch from "./Pages/NoMatch";

const App = () => {
    return (
        <Router>
            <div>
               <Navbar />
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/rmp" component={RateMyProfessor} />
                    <Route exact path="/schedule" component={SchedulerContainer} />
                    <Route exact path="/internships" component={Internships} />
                </Switch>
            </div>
        </Router>
        );
};

export default App;
    
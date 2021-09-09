import React, { useState } from "react";
// CSS
import "./App.css";
// packages
import { Switch, Route } from "react-router-dom";
// :components
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Admin from "./Pages/Admin/Admin";
import User from "./Pages/User/User";
import PrivateRoute from "./router/PrivateRoute";
import Error from "./Pages/Error/Error";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const message = "hello test";

  return (
    <div className="App">
      <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/user/:id" component={User} />
        {/* <Route path="/admin" component={Admin} /> */}
        <PrivateRoute
          path="/admin"
          component={Admin}
          isAuth={isAuth}
          message={message}
        />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;

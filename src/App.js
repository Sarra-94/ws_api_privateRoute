import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Admin from "./Pages/Admin/Admin";
import User from "./Components/User/User";
import PrivateRoute from "./router/PrivateRoute/PrivateRoute";
import Error from "./Pages/Error/Error";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  const message = "hello test";

  return (
    <div className="App">
      <NavBar isAuth={isAuth} login={login} logout={logout} />

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

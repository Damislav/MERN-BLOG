import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Homepage from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/TopBar";
import { Context } from "./context/Context";
import { useContext } from "react";
import "./App.css";
const App = () => {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
          <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

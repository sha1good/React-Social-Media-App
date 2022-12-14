import HomePage from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/register">
           <Register />
        </Route>
        <Route path="/profile/:username">
           <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

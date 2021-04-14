import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Body from "./components/Body";
import Register from "./components/Register";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";

function App() {
  return (
    <Router>
      <Navigation/>
    
      <Switch>
        <Route path="/" exact component={Body} ></Route>
        <Route path="/contensection" exact component={ContentSection} ></Route>
        <Route path="/footer" exact component={Footer} ></Route>
        <Route path="/register" exact component={Register} ></Route>
        <Route path="/login" exact component={Login} ></Route>
        <Route path="/passwordreset" exact component={PasswordReset} ></Route>
        <Route component={Error} ></Route>
      </Switch>
    </Router>
  );
}

export default App;

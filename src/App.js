import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <Navigation/>
    
      <Switch>
        <Route path="/" exact component={Body} ></Route>
        <Route path="/contensection" exact component={ContentSection} ></Route>
        <Route path="/footer" exact component={Footer} ></Route>
        <Route component={Error} ></Route>
      </Switch>
    </Router>
  );
}

export default App;

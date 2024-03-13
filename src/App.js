import "./styles.css";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';

export default function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} /> {/* Define the route to your SignUp component */}
    </Switch>
  </Router>
  );
}
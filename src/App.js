import logo from "./logo.svg";
import "./App.css";
import Readers from "./components/readers";
import ReaderService from "./services/readerService";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import AddReader from './components/addReader'
import ReaderDetails from './components/readerDetails'
import Home from './components/home'
import PageNotFound from './components/pageNotFound'
import Feedback from './components/feedback'
import AddFeedback from './components/addFeedback';
import FeedbackDetails from './components/feedbackDetails';


function App() {
  return (
    <div>
    <Nav />
    <div className="container-fluid">
      <Switch>
        <Route path="/reader/add" component={AddReader} />
        <Route path="/reader/update/:id" component={ReaderDetails} />
        <Route path="/reader/:id" component={ReaderDetails} />
        <Route path="/reader" component={Readers} />

        <Route path="/feedback/add" component={AddFeedback} />
        <Route path="/feedback/update/:id" component={FeedbackDetails} />
        <Route path="/feedback/:id" component={FeedbackDetails} />
        <Route path="/feedback" component={Feedback} />

       
        
        {/*<Route path="/register" component={Register} />
        <Route path="/login" component={Login} />*/}
        <Route path="/" exact component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </div>
  );
}

export default App;

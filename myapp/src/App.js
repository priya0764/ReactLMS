
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home";
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Users from './components/user';
import AddUser from './components/addUser';
import UserDetails from './components/userDetails';
import Address from './components/address';
import AddAddress from './components/addAddress';
import AddressDetails from'./components/addressDetails';
import BooksIssued from './components/booksIssued';
import AddBooksIssued from './components/addBooksIssued';
import BooksIssuedDetails from './components/booksIssuedDetails';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <switch>
        <Route exact path="/user/add" component={AddUser}/>
        <Route exact path="/user/update/:id" component={UserDetails}/>
        <Route exact path="/user/get/:id" component={UserDetails}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/address/add" component={AddAddress}/>
        <Route exact path="/address/update/:id" component={AddressDetails}/>
        <Route exact path="/address/get/:id" component={AddressDetails}/>
        <Route exact path="/address" component={Address}/>
        <Route exact path="/booksIssued/add" component={AddBooksIssued}/>
        <Route exact path="/booksIssued/update/:id" component={BooksIssuedDetails}/>
        <Route exact path="/booksIssued/get/:id" component={BooksIssuedDetails}/>
        <Route exact path="/booksIssued" component={BooksIssued}/>
        <Route exact path="/" component={Home}/>
        
        
      </switch>
     </div>
    </Router>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import AddDestination from './Pages/AddDestination/AddDestination';
import NotFound from './Pages/NotFound/NotFound';
import OfferingDetails from './Pages/OfferingDetails/OfferingDetails';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/offerings/:id">
              <OfferingDetails></OfferingDetails>
            </PrivateRoute>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/addDestination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

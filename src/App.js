import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./component/Login";
import DashBoard from "./component/DashBoard";
import SignUpForm from "./component/SignUpForm" 
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" children ={() => < Login/>} />
          <Route exact path="/home" children ={() => < DashBoard/>} />
          <Route exact path="/signUp" children ={() => < SignUpForm/>} />
          <Route path="*">
           <h1>404 page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

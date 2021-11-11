import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Signupform from "./component/Signupform";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" children ={() => < Login/>} />
          <Route exact path="/home" children ={() => < Dashboard/>} />
          <Route exact path="/signUp" children ={() => < Signupform/>} />
          <Route path="*">
           <h1>404 page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

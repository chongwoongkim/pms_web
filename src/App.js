import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";
//import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import JoninUser from "./components/User/JoninUser";

function App() {

    return (
        <React.Fragment>
            <MainHeader/>
            <main>
                <Switch>
                    <Route path="/joinUser" component={JoninUser}></Route>
                    <Route path="/" component={Login}></Route>

                    {/*
          {true && <Login/>}
          {false && <Home/>}
           */}
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;

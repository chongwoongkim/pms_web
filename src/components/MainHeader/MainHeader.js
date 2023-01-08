import React from "react";
// import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import {useSelector} from "react-redux";

const MainHeader = (props) => {
    const headerName = useSelector((state) => state.header.headerName);

    return (
        <header className={classes["main-header"]}>
            <h1>{headerName}</h1>
            {/* 
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
 */}
        </header>
    );
};

export default MainHeader;

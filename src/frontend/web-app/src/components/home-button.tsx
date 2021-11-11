import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class HomeButton extends React.Component {
    render() {
        return(
            <Link to="/home">
                <button className="Button">
                    <span>Home</span>
                </button>
                
            </Link>
        )
    }
}
export default HomeButton;
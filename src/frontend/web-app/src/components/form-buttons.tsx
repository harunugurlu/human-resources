import React from "react";
import ApplicationForm from "./application-form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class FormButtons extends React.Component {
    handleClick() {
        
    }
    render() {
        return (
            <Link to="/forms">
                <button className="Button">
                    <span>Forms</span>
                </button>
            </Link>
        );
    }

}

export default FormButtons;
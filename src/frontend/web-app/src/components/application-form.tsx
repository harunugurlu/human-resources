import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AdditionalInfo from './additional-info';
import Experiences from './experiences';
import PersonalInfo from './personal-info';
import '../App.css';

function ApplicationForm() {
    return (
        <div>
            <h1>Application Forms</h1>
            <div className="forms-container" id="forms">
                <PersonalInfo />
                <Experiences />
                <AdditionalInfo />
            </div>
            <div id="exp-button-div">
                <button id="new-experience-button">Add new experience</button>
            </div>
        </div>
    );
}

export default ApplicationForm;
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
import React, { Component } from 'react';
import { render } from 'react-dom';
import { analyzeBreakpoints } from '@chakra-ui/utils';

class ApplicationForm extends React.Component<any, any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            forms: [
                {
                    div: Array(3).fill(null)
                }
            ]
        };
    }

    addExperience() {
        const forms = this.state.forms.slice();
        const current = forms[forms.length - 1];
        const div = current.div.slice();
        this.setState({
            forms: forms.concat([
                {
                    div: div + 1
                }
            ])
        });
        console.log('Click');


    }

    render() {
        return (
            <div>
                <h1>Application Forms</h1>
                <div className="forms-container" id="forms">
                    <PersonalInfo />
                    <Experiences
                        addExperience={this.addExperience.bind(this)} /* ? */
                    />
                    <AdditionalInfo />
                </div>
                <div id="exp-button-div">
                    <button id="new-experience-button">Submit</button>
                </div>
            </div>
        );
    }
}

export default ApplicationForm;
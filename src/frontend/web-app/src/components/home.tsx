import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import FormButtons from './form-buttons';
import HomeButton from './home-button';

function Home() {
    return (
        <div className="Container">
            <FormButtons />
            <HomeButton />
        </div>
    );
}

export default Home;
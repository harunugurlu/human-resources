import React from "react";
import { addSyntheticLeadingComment } from "typescript";

function Experiences() {

    function addExperience() {
        return (
            console.log('Click')
        );
    }

    return (
        <div className="div-form-exp">
            <form>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" placeholder="Company name.." />

                <label htmlFor="startYear">Last Name</label>
                <input type="number" id="startYear" name="startYear" placeholder="Start year.." />
                
                <label htmlFor="endYear">End Year</label>
                <input type="number" id="endYear" name="endYear" placeholder="End year.." />
                <label htmlFor="stillWorking">Still Working?</label>
                <button id="click-here">Click here!</button>
  
            </form>
            <br />
            <button onClick={addExperience}>
                Add new experience
            </button>
        </div>
    )
}

export default Experiences;
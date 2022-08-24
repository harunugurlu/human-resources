import React, { Component } from "react";
import { addSyntheticLeadingComment } from "typescript";

class Experiences extends Component<any, any> {

    render() {
        const addExperience = this.props;
        return (
            <div className="div-form-exp" id="div-exp">
                <form>
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Company name.." />

                    <label htmlFor="startYear">Last Name</label>
                    <input type="number" id="startYear" name="startYear" placeholder="Start year.." />

                    <label htmlFor="endYear">End Year</label>
                    <input type="number" id="endYear" name="endYear" placeholder="End year.." />

                    <label htmlFor="stillWorking">Still working?</label>
                    <button id="click-here">Click here!</button>
                </form>

                <br />
                <label htmlFor="stillWorking">More experience?</label>
                <button className="button-inside-form" onClick={this.props.addExperience}>
                    Add new experience
                </button>

            </div>
        )
    }
}

export default Experiences;
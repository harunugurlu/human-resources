import React from "react";

function PersonalInfo() {
    return (
        <div className="div-form">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." className="input"/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" id="birthdate" name="birthdate" placeholder="Your last name.." />
  
               
            </form>
        </div>
    );
}

export default PersonalInfo;
import React from "react";

function AdditionalInfo() {
    return(
        <div className="div-form">
            <form>
                <label htmlFor="salary">Salary Expectation</label>
                <input type="number" id="salary" name="salary" placeholder="Salary expectation.." />

                <label>Additional Expectations</label>
                <br/>
                <input type="textarea" className="additional"/>
  
            </form>
        </div>
    )
}

export default AdditionalInfo;
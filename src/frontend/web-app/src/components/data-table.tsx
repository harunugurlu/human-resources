import * as React from 'react';

function UserTable() {
    return (
        <div>
            <h1>Our Candidates</h1>
        <div id='candidates'>
            <table id='user-table'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birth Date</th>
                    <th>Experiences</th>
                    <th>Salary Expectation</th>
                    <th>Additional Expectations</th>
                </tr>
                <tr>
                    <td>Harun</td>
                    <td>Ugurlu</td>
                    <td>01.03.2001</td>
                    <td>None</td>
                    <td>15000</td>
                    <td>None</td>
                </tr>
            </table>
        </div>
        </div>
    )
}

export default UserTable;
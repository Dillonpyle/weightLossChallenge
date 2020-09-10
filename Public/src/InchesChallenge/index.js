import React from 'react';
import { withRouter } from 'react-router-dom';

const InchesChallenge = ({ username }) => {
    console.log(username);
    return (
        <div className='InchesChallenge'>
            <h2>{username}</h2>
            <h3>my inches</h3>
        </div>
    )

}
export default withRouter(InchesChallenge);
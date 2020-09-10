import React from 'react';
import { withRouter } from 'react-router-dom';

const WeightChallenge = ({ username, weight }) => {
    console.log(username);
    console.log(weight);
    return (
        <div className='WeightChallenge'>

            <h2>{username}</h2>
            <h3>my weight</h3>
        </div>
    )

}
export default withRouter(WeightChallenge);

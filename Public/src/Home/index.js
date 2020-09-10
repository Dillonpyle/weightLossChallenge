import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './home.css'



const Home = ({ username }) => {
    return (
        <div id='homeBody'>
            <h1 id='homeHeader'>this is {username}'s Page</h1>
            <div id='homePageButtons'>
                <Link to={'/weightChallenge'}><button >Weight Challlenge</button></Link>
                <Link to={'/inchesChallenge'}>  <button > Inches Challenge</button> </Link>
            </div>

        </div>
    )
}

export default withRouter(Home)

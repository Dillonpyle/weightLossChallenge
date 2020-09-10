import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './home.css'



const Home = ({ username }) => {
    return (
        <div id='homeBody'>
            <h1 id='homeHeader'></h1>
            <h3>Welcome to the Team Beauty women’s only 6 week challenge. That help motivate & Keep you accountable for the results you want! to the Team Beauty women’s only 6 week challenge. That help motivate & Keep you accountable for the results you want!</h3>

            <div id='homePageButtons'>
                <Link to={'/weightchallenge'}><button >Weight Challlenge</button></Link>
                <Link to={'/incheschallenge'}>  <button > Inches Challenge</button> </Link>
            </div>

        </div>
    )
}

export default withRouter(Home);
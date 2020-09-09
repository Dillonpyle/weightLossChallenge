import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './home.css'



const index = ({ username }) => {




    return (
        <div id='homeBody'>
            <h1 id='homeHeader'>{username}'s Page</h1>
            <div id='homePageButtons'>
                <Link to={'/'}><button >Ingredients</button></Link>
                <Link to={'/'}>  <button > Recipe</button> </Link>
                <button >Add Recipe</button>
            </div>

        </div>
    )
}

export default withRouter(index)

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import img from './pantry1.jpeg'

import './register.css';

const Register = ({ handleRegister, handleSubmit, handleChange, handleClick }) => {

    return (
        <React.Fragment>
            <div id='registerHeader'>
                <h1>Weightloss Challenge</h1>
                <h2>Keep track of your progress</h2>
            </div>
            <div id='form'>
                <h3>Login Here</h3>
                <Form onSubmit={handleRegister}>
                    <FormGroup>
                        <Label>
                            <Input type='text' name='username' placeholder="Username" onChange={handleChange} />
                        </Label>
                        <Label>
                            <Input type='password' name='password' placeholder="Password" onChange={handleChange} />
                        </Label>
                        <button type='submit' onClick={handleClick}> Login </button>
                    </FormGroup>
                </Form>
                <h3>Sign Up Here</h3>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        <Input type='text' name='username' placeholder="Username" onChange={handleChange} />
                    </Label>
                    <Label>
                        <Input type='password' name='password' placeholder="Password" onChange={handleChange} />
                    </Label>
                    <Label>
                        <Input type='text' name='phone' placeholder="Phone" onChange={handleChange} />
                    </Label>
                    <Label>
                        <Input type='text' name='email' placeholder="Email" onChange={handleChange} />
                    </Label>
                    <Button type='submit'>Register</Button>
                </Form>


            </div>
            <div id="homeImgDiv">
                <img id='homeImg' src={img} alt="fitness" />
            </div>
        </React.Fragment>
    )
}

export default withRouter(Register); 
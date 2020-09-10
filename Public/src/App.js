import React, { Component } from 'react';
import { Route, Switch, withRouter, } from 'react-router-dom';
import UserPage from './UserHome';
import Home from './Home'
import Register from './register';
import Navagation from './Navagation';
import Weight from './WeightChallenge';
import Inches from './InchesChallenge';

require('dotenv').config()

class App extends Component {
    state = {
        user_id: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        weight: 'Field Empty'
    }



    handleRegister = async (e) => {
        e.preventDefault();
        console.log('login activated')
        try {
            const loginResponse = await fetch(`http://localhost:9000/login`, {
                method: 'POST',
                body: JSON.stringify(this.state),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText)
            }
            //taken from pantry-app-fe
            const registerParsed = await loginResponse.json()
            console.log(registerParsed, "this is registerParsed")

            if (loginResponse.ok) {
                this.setState({
                    user_id: registerParsed.userId,
                    username: registerParsed.username
                });
                console.log(this.state, 'this is state');
                this.props.history.push('/home')
            }

        } catch (err) {
            console.log(err)
        }
    }

    //taken frome pantry-app-fe
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const loginResponse = await fetch(`http://localhost:9000/login/register`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            });


            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText)
            }

            const parsedResponse = await loginResponse.json();
            console.log(parsedResponse, 'this is sign ups response');
            console.log(parsedResponse.username, 'this is parsedResponse.username');


            if (loginResponse.ok) {
                this.setState({
                    user_id: parsedResponse.userId,
                    username: parsedResponse.username
                });
                console.log(this)
                this.props.history.push('/home')
            }

            console.log(this.state, "this is state")
            console.log(parsedResponse, "this is sign ups parsedResponse")

        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //this is working for folder Login file Login.js
    // render() {
    //      return (
    //          <Switch>
    //              <Route exact path="/" render={() => <Login
    //                  username={this.state.username}
    //                  password={this.state.password}
    //                 handleChange={this.handleChange}
    //                  handleSignUp={this.handleSignUp}
    //                   handleLogin={this.handleLogin} />} />
    //          </Switch>
    //      );
    //  }


    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/' render={() => <Home username={this.state.username} user_id={this.state.user_id} />} />
                        <Route exact path='/register' render={() => <Register handleRegister={this.handleRegister} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />} />
                        <Route exact path='/userpage' render={() => <UserPage username={this.state.username} user_id={this.state.user_id} />} />
                        <Route exact path='/weightchallenge' render={() => <Weight username={this.state.username} user_id={this.state.user_id} weight={this.state.weight} />} />
                        <Route exact path='/incheschallenge' render={() => <Inches username={this.state.username} user_id={this.state.user_id} />} />
                    </Switch>
                </main>
                <footer>
                    <Navagation />
                </footer>
            </div>

        );
    }
}

export default withRouter(App);

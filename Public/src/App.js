import React, { Component } from 'react';
import { Route, Switch, withRouter, } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home';
import Register from './register';
import Navagation from './Navagation';
import { createBrowserHistory } from 'history';
//import history from './history';





require('dotenv').config()

class App extends Component {
    state = {
        user_id: '',
        username: '',
        password: '',
        phone: '',
        email: ''
    }

    handleSignUp = async (e) => {

        e.preventDefault();
        try {
            const loginResponse = await fetch(`http://localhost:9000/login/register`, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText)
            }

            const parsedResponse = await loginResponse.json();


            // if (parsedResponse.data === 'login successful') {
            //   this.props.history.push('/map')
            // }

            console.log(parsedResponse, 'loginResponse')
        } catch (err) {
            console.log(err)
        }
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
            if (loginResponse.ok) {
                this.setState({
                    user_id: registerParsed.id,
                    username: registerParsed.username
                });
                console.log('history')
                this.props.history.push('/Home')
            }

            // const parsedResponse = await loginResponse.json();
            // if (parsedResponse.data === 'login successful') {
            //     this.setState({
            //         id: parsedResponse.userId
            //     })
            //     this.props.history.push('/home')
            // }

        } catch (err) {
            console.log(err)
        }
    }

    //taken frome pantry-app-fe
    handleSubmit = async (e) => {
        e.preventDefault();

        //fetch('http://localhost:9000/user')
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
            console.log(parsedResponse, 'this is logins response')


            if (loginResponse.ok) {
                this.setState({
                    user_id: parsedResponse.id,
                    username: parsedResponse.username
                });
                console.log(this)
                this.props.history.push('/Home')
            }

            console.log(this.state, "this is state")
            console.log(parsedResponse, "this is parsedResponse")

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
            <React.Fragment>
                <main>
                    <Switch>
                        <Route exact path='/' render={() => <Register handleRegister={this.handleRegister} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />} />
                        <Route exact path='/Home' render={() => <Home username={this.state.username} user_id={this.state.user_id} />} />
                    </Switch>
                </main>
                <footer>
                    <Navagation />
                </footer>
            </React.Fragment>

        );
    }
}

export default withRouter(App);

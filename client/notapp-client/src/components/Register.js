import axios from 'axios';
import React, { Component } from 'react'

export class Register extends Component {
    state = {
        username: null,
        password: null,
        error: null
    }

    onChange = (param) => {
        this.setState({[param.target.name]: param.target.value})
    }

    Register = (event) => {
        event.preventDefault()
        const body = {
            username: this.state.username,
            password: this.state.password,
            date: new Date()
        }
        axios.post('/api/users', body).catch(
            this.setState({error: 'Register Failed!'})
        )

        
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>Register</h1>
                <form>
                    <div>
                        <label className='form-label'>Username</label>
                        <input name="username" onChange={(e) => this.onChange(e)} className='form-control'></input>
                    </div>
                    <br />
                    <div>
                        <label children='form-label'>Password</label>
                        <input name="password" onChange={(e) => this.onChange(e)}  className='form-control' type="password"></input>
                    </div>
                    <br />
                    <div className='text-center'>
                        <button onClick={this.Register} className='btn btn-secondary'>Register</button>
                    </div>
                    <div style={{color: 'red'}}>{this.state.error}</div>
                </form>
            </div>
        )
    }
}

export default Register
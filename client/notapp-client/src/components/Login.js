import React, { Component } from 'react'

export class Login extends Component {
    state = {
        username: null,
        password: null
    }

    onChange = (param) => {
        this.setState({ [param.target.name]: param.target.value })
        console.log(param);
        console.log(param.name);
        console.log(param.target.value)
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>Login</h1>
                <form>
                    <div>
                        <label className='form-label'>Username</label>
                        <input className='form-control'></input>
                    </div>
                    <br />
                    <div>
                        <label children='form-label'>Password</label>
                        <input className='form-control' type="password"></input>
                    </div>
                    <br />
                    <div className='text-center'>
                        <button className='btn btn-secondary'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
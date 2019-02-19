import React, {Component} from 'react';
import styled from 'styled-components';

class Login extends Component{

    handleLogin = event=>{
        event.preventDefault();
        this.props.history.push('/notes');
    }

    render(){
        return(
            <div onClick={this.handleLogin}>
                Click Here To Login
            </div>
        )
    }
}

export default Login;
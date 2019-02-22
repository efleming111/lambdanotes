import React, {Component} from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// This component is not work on the database side!!!!

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuth: false,
            testReturn: ''
        }
    }

    componentDidMount(){
        // Hack to bypass this component
        this.props.history.push(`/notes`);
    }

    handleLogin = event=>{
        event.preventDefault();
        // axios.get('https://ericsnotesbackend.herokuapp.com/auth/google')
        // .then(data=>{
        //     console.log(data.data.message);
        // })
        // .catch(error=>{
        //     console.log('Something went wrong');
        // })
    }

    render(){
        return(
            <div onClick={this.handleLogin}>
                Login in with Google+
            </div>
        )
    }
}

export default Login;
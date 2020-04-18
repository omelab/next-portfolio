import Layout from "../components/Layout";

import fetch from 'isomorphic-unfetch';

import Error from './_error';

import { Component } from "react";

export default class About extends Component{

    static async getInitialProps(){

        let data;
        let statusCode;
        
        try{
            const res = await fetch('https://api.github.com/users/omelab');
            statusCode = res.status > 200 ? res.status : false;
            data = await res.json();
        } catch (err) {
            data = [];
            statusCode = 500
        }  

        return { user:data, statusCode}
    }

    //Client Side Rendering
    /* 
    //initial data
    state = {
        user : null
    }

    //set data when page load
    componentDidMount(){
        fetch('https://api.github.com/users/omelab')
        .then(res => res.json())
        .then(data =>{

            this.setState({
                user:data
            });

            console.log(data);
        })
    }*/


    render(){
        const { user, statusCode } = this.props;

        if(statusCode){
            return <Error title={statusCode} />
        }
        
        return(
        <Layout>
            {/* {JSON.stringify(this.state.user)} */}
            <h1>About</h1>
           
            <p>{user.name}</p>
            <img src={user.avatar_url} alt={user.name}/>
        </Layout>
        )
    }
    
}
 
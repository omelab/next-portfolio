
import Link from 'next/link';

import Layout from "../components/Layout";

import fetch from 'isomorphic-unfetch';

import { Component } from "react";

export default class About extends Component{

    static async getInitialProps(){

        const res = await fetch('https://api.github.com/users/omelab');
        const data = await res.json();

        return { user:data }
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
        const { user } = this.props;
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
 
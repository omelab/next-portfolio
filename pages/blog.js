import Layout from "../components/Layout";
import { Component } from "react";
import Link from "next/link";

const  PostLink =({slug, title})=>(
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
           <a>{title}</a>
        </Link>
    </li>
);

export default class Blog extends Component{

    render(){
        return(
            <Layout title="Hellow Blog">
                <ul>
                    <PostLink slug="react-psot" title="React Post" />  
                    <PostLink slug="angular-psot" title="Angular Post" />  
                    <PostLink slug="vue-psot" title="Vue Post" />  
                </ul>
            </Layout>
        ) 
    }
}




/*
export default () => (
    <Layout title="Blog"> 
    </Layout>
)*/
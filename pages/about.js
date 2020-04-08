
import Link from 'next/link';
import Layout from "../components/Layout";

const About = () =>(
    <Layout>
        <h1>About</h1>
        <Link  href="/">
            <a> Go to Home</a>
        </Link>
        <p>A javascript Programmer</p>
        <img src="/static/bg.jpg" alt=""/>
    </Layout>
);
export default About;
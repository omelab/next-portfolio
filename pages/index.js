import Link from "next/link";
import Layout from "../components/Layout";

const Index = ()=>
    <Layout title="Home">
        <Link href="/about"><a>About</a></Link>
        <p> Welcome to the home page </p>
    </Layout>;

export default Index;
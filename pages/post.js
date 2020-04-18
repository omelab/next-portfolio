import Layout from "../components/Layout";
import {withRouter} from "next/router";

const post = ({router})=>(
    <Layout title={router.query.title}> 
        <p>lorema ipsum post lorema ipsum post lorema ipsum post lorema
            ipsum post lorema ipsum post lorema ipsum post 
            lorema ipsum post lorema ipsum post lorema ipsum post
            lorema ipsum post </p>        
    </Layout>
)
export default withRouter(post)
import {FC} from "react";

import Layout from "@/components/layout/Layout";


const Home: FC = () => {

    return (
        <Layout
            title='Home'
            description='test description'
        >
            <h1>Test Next.js</h1>
        </Layout>
    )
}

export default Home;
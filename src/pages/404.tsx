import {NextPage} from "next";
import Image from "next/image";

import Layout from "@/components/layout/Layout";


const NotFound: NextPage = () => {
    return (
        <Layout title='404'>

            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <Image priority src='/404.png' alt='404' width={450} height={433}/>
            </div>

        </Layout>
    )
}

export default NotFound;
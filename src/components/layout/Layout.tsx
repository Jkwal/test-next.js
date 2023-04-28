import {FC, PropsWithChildren} from "react";

import Meta from "@/components/seo/Meta";
import {IMeta} from "@/components/seo/meta.interface";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer/Footer";
import dynamic from "next/dynamic";


const DynamicFooter = dynamic(() => import('./Footer/Footer'), {
    ssr: false,
})

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Meta>
    )
}

export default Layout;
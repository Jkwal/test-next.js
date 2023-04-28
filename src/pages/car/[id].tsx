import {NextPage} from "next";
import {useRouter} from "next/router";


const CarPage: NextPage = () => {

    const {push, replace} = useRouter();

    return (
        <div>
            <button onClick={()=>push('/')}>go home1</button>
            <button onClick={()=>replace('/')}>go home2</button>
        </div>
    )
}

export default CarPage;
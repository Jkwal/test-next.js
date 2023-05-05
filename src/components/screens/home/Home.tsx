import {FC} from "react";

import Layout from "@/components/layout/Layout";
import CarItem from "@/components/UI/car/CarItem";
import {ICarData} from "@/interfaces/car.interface";


const Home: FC<ICarData> = ({cars}) => {

  return (
    <Layout
      title='Home'
      description='test description'
    >
      <h1>Test Next.js</h1>

      {
        cars.length
          ? cars.map(car => <CarItem key={car.id} car={car}/>)
          : <div>Cars not found!</div>
      }

    </Layout>
  )
}

export default Home;
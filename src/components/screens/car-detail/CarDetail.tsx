import {FC} from "react";

import Layout from "@/components/layout/Layout";
import CarItem from "@/components/UI/car/CarItem";
import {ICarDataSingle} from "@/interfaces/car.interface";


const CarDetail: FC<ICarDataSingle> = ({car}) => {
  return (
    <Layout title={car.name} description='Car'>
      <CarItem car={car}/>
    </Layout>
  )
}

export default CarDetail
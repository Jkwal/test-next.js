import {FC} from "react";

import styles from './Home.module.scss';

import Layout from "@/components/layout/Layout";
import CarItem from "@/components/ui/car/CarItem";
import {ICarData} from "@/interfaces/car.interface";


const Home: FC<ICarData> = ({cars}) => {

  return (
    <Layout
      title='Home'
      description='test description'
    >
      <h1>Test Next.js</h1>

      <div className={styles.list}>
        {
          cars.length
            ? cars.map(car => <CarItem key={car.id} car={car}/>)
            : <div>Cars not found!</div>
        }
      </div>

    </Layout>
  )
}

export default Home;
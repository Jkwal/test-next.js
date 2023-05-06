import {GetStaticProps, NextPage} from "next";

import {CarService} from "@/services/car.service";
import Home from "@/components/screens/home/Home";
import {ICarData} from "@/interfaces/car.interface";

const HomePage: NextPage<ICarData> = ({cars}) => {
  return (
    <Home cars={cars}/>
  )
}
//ssr
// export const getServerSideProps: GetServerSideProps<ICarData> =
//   async () => {
//     const cars = await CarService.getAll();
//
//     return {
//       props: {cars},
//     }
//   }

//ssg
export const getStaticProps: GetStaticProps<ICarData> =
  async () => {
    const cars = await CarService.getAll();

    return {
      props: {cars},
      revalidate: 60,//csr
    }
  }

export default HomePage
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";

import {CarService} from "@/services/car.service";
import {ICarDataSingle} from "@/interfaces/car.interface";
import CarDetail from "@/components/screens/car-detail/CarDetail";


const CarDetailPage: NextPage<ICarDataSingle> = ({car}) => {
  return (
    <CarDetail car={car}/>
  )
}


interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

  const cars = await CarService.getAll()

  return {
    paths: cars.map(car => ({
      params: {
        id: car.id.toString(),
      }
    })),
    fallback: 'blocking',
  }
}

//ssg
export const getStaticProps: GetStaticProps<ICarDataSingle> =

  async ({params,}) => {

    const car = await CarService.getById(String(params?.id));

    return {
      props: {car},
      revalidate: 60,//csr
    }
  }

export default CarDetailPage
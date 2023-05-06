import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

import styles from './CarItem.module.scss'

import {ICarDataSingle} from "@/interfaces/car.interface";

const CarItem: FC<ICarDataSingle> = ({car}) => {
  const {name, price, image, id} = car;

  return (
    <div className={styles.item}>
      <Image src={image} alt={name} width={300} height={200}/>
      <h2>{name}</h2>
      <small>{price}</small>

      <Link href={`/car/${id}`}>Read more</Link>
    </div>
  )
}

export default CarItem
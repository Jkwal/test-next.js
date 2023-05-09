import {FC, useState} from "react";
import ReactSelect, {OnChangeValue} from "react-select";
import makeAnimated from 'react-select/animated';

import {IOption} from "@/components/screens/react-select/react-select.interface";


const options: IOption[] = [{
   value: 'south-korea',
   label: 'South korea'
}, {
   value: 'germany',
   label: 'Germany'
}, {
   value: 'canada',
   label: 'Canada'
}, {
   value: 'japan',
   label: 'Japan'
}]

const animatedComponents = makeAnimated();

const isMulti = true;


const MultiplySelect: FC = () => {

   const [currentCountries, setCurrentCountries] = useState<any>([
      'south-korea',
      'japan'
   ])

   const getValue = () => {
      if (currentCountries) {
         return (
            isMulti
               ? options.filter((c) => currentCountries.indexOf(c.value) >= 0)
               : options.find(c => c.value === currentCountries)
         )
      } else {
         return isMulti ? [] : undefined
      }
   }

   const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
      setCurrentCountries(
         isMulti
            ? (newValue as IOption[]).map((v) => v.value)
            : (newValue as IOption).value
      )
   }

   return (
      <div className='w-4/5 mx-auto'>
         <h1 className="text-4xl font-bold mb-10">Select 2</h1>
         <ReactSelect
            classNamePrefix='custom-select'
            onChange={onChange}
            value={getValue()}
            options={options}
            isMulti={isMulti}
            isSearchable={false}
            placeholder='Chose countries'
            components={animatedComponents}
         />
      </div>
   )
}

export default MultiplySelect

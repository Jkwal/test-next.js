import {FC, useState} from "react";
import ReactSelect from "react-select";

import Layout from "@/components/layout/Layout";
import MultiplySelect from "@/components/screens/react-select/MultiplySelect";


const options = [{
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


const ReactSelectTest: FC = () => {

   const [currentCountry, setCurrentCountry] = useState('south-korea')

   const getValue = () => {
      return currentCountry
         ? options.find(c => c.value === currentCountry) : ''
   }

   const onChange = (newValue: any) => {
      setCurrentCountry(newValue.value)
   }

   return (
      <Layout title='ReactSelect' description='test React Select'>

         <section className='flex gap-10 p-10'>
            <div className='w-4/5 mx-auto'>
               <h1 className="text-4xl font-bold mb-10">Chose country:</h1>
               <ReactSelect onChange={onChange} value={getValue()} options={options}/>
            </div>

            <MultiplySelect/>
         </section>


      </Layout>
   )
}

export default ReactSelectTest
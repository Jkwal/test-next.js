import {FC} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";

import styles from "@/components/screens/hook-form/HookForm.module.scss";

import {IOption, IShippingFields} from "@/interfaces/hookForm.interface";
import ReactSelect from "react-select";


const options: IOption[] = [
   {
      value: 'russia',
      label: 'Russia',
   },
   {
      value: 'china',
      label: 'China',
   },
   {
      value: 'usa',
      label: 'USA',
   },
   {
      value: 'new-zeeland',
      label: 'New Zeeland',
   },
]

const getValue = (value: string) => (
   value
      ? options.find((option) => option.value === value)
      : ''
)


const ShippingForm: FC = () => {

   const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
      control,
   } = useForm<IShippingFields>({
      mode: 'onChange',
   })

   const onSubmit: SubmitHandler<IShippingFields> = (data) => {
      alert(data)
      reset()
   }

   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

         <h3>Form 2</h3>

         <input
            {
               ...register('name',
                  {
                     required: 'Name is require field!',
                  })
            }
            placeholder="Name"
         />
         {
            errors.name
            && <div style={{color: 'red'}}>{errors.name.message}</div>
         }


         <input
            {
               ...register('email',
                  {
                     required: 'Email is require field!',
                     pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Please enter valid email!'
                     }
                  })
            }
            placeholder="Email"
         />
         {
            errors.email
            && <div style={{color: 'red'}}>{errors.email.message}</div>
         }

         <Controller
            control={control}
            name='address.country'
            rules={{
               required: 'Country is required!'
            }}
            render={({field: {onChange, value}, fieldState: {error}}) =>
               <div>
                  <ReactSelect
                     placeholder='Countries'
                     options={options}
                     value={getValue(value)}
                     onChange={(newValue) => onChange((newValue as IOption).value)}
                  />
                  {
                     error
                     && <div style={{color: 'red'}}>{error.message}</div>
                  }
               </div>
            }
         />

         <input
            {
               ...register('address.city',
                  {
                     required: 'City is require field!',
                  })
            }
            placeholder="City"
         />
         {
            errors.address?.city
            && <div style={{color: 'red', marginBottom: 10}}>{errors.address.city.message}</div>
         }

         <input
            {
               ...register('address.street',
                  {
                     required: 'Street is require field!',
                  })
            }
            placeholder="Street"
         />
         {
            errors.address?.street
            && <div style={{color: 'red', marginBottom: 10}}>{errors.address.street.message}</div>
         }

         <input
            {
               ...register('address.house',
                  {
                     required: 'House is require field!',
                  })
            }
            placeholder="House"
         />
         {
            errors.address?.house
            && <div style={{color: 'red', marginBottom: 10}}>{errors.address.house.message}</div>
         }


         <div>
            <button className={styles.buttonSend}>Send</button>
         </div>

      </form>
   )
}

export default ShippingForm;
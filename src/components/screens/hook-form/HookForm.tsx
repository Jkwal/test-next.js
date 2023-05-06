import {FC} from "react";
import ReactSelect from 'react-select';
import {Controller, SubmitHandler, useForm} from "react-hook-form";

import styles from './HookForm.module.scss';

import Layout from "@/components/layout/Layout";
import ShippingForm from "@/components/screens/hook-form/ShippingForm";
import {IOption, IShippingFields} from "@/interfaces/hookForm.interface";


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


const HookForm: FC = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    // watch,
    setValue,
    control,
  } = useForm<IShippingFields>({
    // defaultValues: {
    //   name: 'Test',
    //   email: 'test@test.com',
    // },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    alert(`Your country ${data.address.country}`)
    reset()
  }

  // useEffect(() => {
  //   const subscription = watch(
  //     (value, {name, type}) => console.log
  //     (value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch])


  return (
    <Layout title='Hook Form' description='test react hook form'>
      <section className={styles.section}>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

          <h3>Form 1</h3>

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


          <div>
            <button className={styles.buttonSend}>Send</button>
          </div>

        </form>

        <ShippingForm/>

        <div>
          <button onClick={() => {
            setValue('name', 'Jkwal')
            setValue('email', 'TEST@TEST.RU')
          }}
          >
            Fill data
          </button>
        </div>

      </section>
    </Layout>
  )
}

export default HookForm
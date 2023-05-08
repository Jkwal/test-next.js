import {FC} from "react";
import {SubmitHandler, useForm} from 'react-hook-form';

import styles from "@/components/screens/hook-form/HookForm.module.scss";

import {IThirdForm} from "@/interfaces/hookForm.interface";


const ThirdForm: FC = () => {

   const {
      register,
      formState: {
         errors,
         isValid,
      },
      handleSubmit,
      reset,
   } = useForm<IThirdForm>({
      mode: 'onBlur'
   });


   const onSubmit: SubmitHandler<IThirdForm> = (data) => {
      alert(JSON.stringify(data));
      reset();
   }


   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <h3>Form 3</h3>

         <label>
            First Name:<br/>
            <input
               {
                  ...register('firstName', {
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                     },
                  })
               }
            />
         </label>
         <div>
            {
               errors.firstName
               && <p className={styles.error}>{errors.firstName.message || 'Error!'}</p>
            }
         </div>

         <label>
            Last Name:<br/>
            <input
               {
                  ...register('lastName', {
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                     },
                  })
               }
            />
         </label>
         <div>
            {
               errors.lastName
               && <p className={styles.error}>{errors.lastName.message || 'Error!'}</p>
            }
         </div>

         <button className={styles.buttonSend} disabled={!isValid}>Send</button>
      </form>
   )
}

export default ThirdForm;
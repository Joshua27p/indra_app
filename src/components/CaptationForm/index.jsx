import React from 'react'
import SelectDocument from '../SelectDocument'
import './CaptationForm.scss'
import CustomInput from '../CustomInput'
import Button from '../Button'
import CheckBoxInput from '../CheckBoxInput'
import formSchema from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { fetchUser } from '../../services/index'; 
import { login, savePlate } from 'src/redux/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


const CaptationForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema)
  });
  
  const { handleSubmit } = methods;
  const onSubmit = async data =>{
    const id = +data.identification.substr(data.identification.length - 1) + 1
    console.log(id)
    const user = await fetchUser(id)
    dispatch(login(user))
    dispatch(savePlate(data))
    history.push('/welcome')
  };


  return (
    <div className="captation-form__container">
      <h2>Déjanos tus datos</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SelectDocument
            name="identification"
          />
          <CustomInput
            type="number"
            name="phone"
            placeholder="Celular"
          />
          <CustomInput 
            type="text"
            name="plate"
            placeholder="Placa"
          />
          <CheckBoxInput 
            type="checkbox"
          />
          <Button 
            type="submit"
            label="Cotízalo"
            className="button__primary"
          />
        </form>
      </FormProvider>

    </div>
  )
}

export default CaptationForm

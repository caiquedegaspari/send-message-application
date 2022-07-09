import React from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { CREATE_COMMENT } from '../../services/mutations/createComment.mutation'
import {
  CreateCommentReturn,
  CreateCommentVars
} from '../../services/mutations/createComment.mutation-type'
import { Input } from '../Input'
import { Button, Container, StyledForm, Textarea } from './style'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorText } from '../Input/style'

const validationSchema = yup.object({}).shape({
  name: yup.string().required('Insert a name'),
  email: yup
    .string()
    .required('Insert an e-mail')
    .email('Insert a valid e-mail'),
  message: yup.string().required('Insert a message')
})

export interface ICommentForm {
  name: string
  email: string
  message: string
}

export function Form() {
  const [runQuery] = useMutation<CreateCommentReturn, CreateCommentVars>(
    CREATE_COMMENT
  )
  const { control, handleSubmit, register, setValue, formState } =
    useForm<ICommentForm>({
      defaultValues: {
        name: '',
        email: '',
        message: ''
      },
      resolver: yupResolver(validationSchema)
    })
  function submitForm(data: ICommentForm) {
    runQuery({
      variables: {
        createCommentInput: data
      },
      onCompleted: () => {
        toast.success('Your message has been sent successfully!')
        setValue('email', '')
        setValue('message', '')
        setValue('name', '')
      }
    })
  }
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(submitForm)}>
        <Input name="name" control={control} placeholder="Your name*" />
        <Input name="email" control={control} placeholder="Your e-mail*" />
        <Textarea {...register('message')} placeholder="Your message*" />
        {formState.errors ? (
          <ErrorText>{formState?.errors?.message?.message}</ErrorText>
        ) : null}
      </StyledForm>
      <Button onClick={handleSubmit(submitForm)} type="submit">
        Send message
      </Button>
    </Container>
  )
}

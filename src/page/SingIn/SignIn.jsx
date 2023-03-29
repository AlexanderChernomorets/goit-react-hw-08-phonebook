import { FormButton, FormContact, FormInput, FormLabel, TitleForm } from 'components/ContactForm/ContactForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/authOperations';

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(logIn(data));

  return (
    <div>
      <TitleForm>Sign In to PhoneBook</TitleForm>
      <FormContact autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          <span>User name</span>
          <FormInput type="email" {...register('email')} required />
        </FormLabel>
        <FormLabel>
          <span>Password</span>
          <FormInput type="password" {...register('password')} required />
        </FormLabel>
        <FormButton type="submit">Sign In</FormButton>
      </FormContact>
    </div>
  );
}

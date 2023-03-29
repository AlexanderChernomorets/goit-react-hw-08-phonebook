import { FormButton, FormContact, FormInput, FormLabel, TitleForm } from 'components/ContactForm/ContactForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AuthOperations } from 'redux/user';

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async data => dispatch(AuthOperations.register(data));

  return (
    <div>
      <TitleForm>Lets start registration?</TitleForm>
      <FormContact autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          <span>User name</span>
          <FormInput
            type="name"
            {...register('name')}
            required
            placeholder="Example name"
          />
        </FormLabel>
        <FormLabel>
          <span>Email</span>
          <FormInput
            type="email"
            {...register('email')}
            required
            placeholder="examplename@mail.com"
          />
        </FormLabel>
        <FormLabel>
          <span>Password</span>
          <FormInput
            type="password"
            {...register('password')}
            minLength="5"
            maxLength="12"
            required
          />
        </FormLabel>
        <FormButton type="submit"> Register</FormButton>
      </FormContact>
    </div>
  );
}

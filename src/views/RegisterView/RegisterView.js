import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section';
import { register } from 'redux/auth/authOperations';
import { getError } from 'redux/auth/authSelectors';
import { resetError } from 'redux/auth/authActions';
import useFormFields from 'hook/useFormFields';
import {
  FormButton,
  FormInput,
  FormRegister,
  Title,
} from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const {
    state: userName,
    setState: setUserName,
    handleChange: handleUserNameChange,
  } = useFormFields('');
  const {
    state: userEmail,
    setState: setUserEmail,
    handleChange: handleUserEmailChange,
  } = useFormFields('');
  const {
    state: userPassword,
    setState: setUserPassword,
    handleChange: handleUserPasswordChange,
  } = useFormFields('');
  const error = useSelector(getError);

  const handleRegisterSubmit = evt => {
    evt.preventDefault();
    dispatch(
      register({ name: userName, email: userEmail, password: userPassword })
    );
    formReset();
  };

  const formReset = () => {
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Section isHidden={false}>
      <FormRegister onSubmit={handleRegisterSubmit}>
        <Title>Please register</Title>
        <FormInput
          id="outlined-basic"
          label="Name:"
          variant="outlined"
          type="text"
          autoFocus={true}
          value={userName}
          placeholder="Enter your name 🙍‍♂️"
          onChange={handleUserNameChange}
        />
        <FormInput
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          type="email"
          value={userEmail}
          placeholder="Enter Email ✉️"
          onChange={handleUserEmailChange}
        />
        <FormInput
          id="outlined-basic"
          label="Password:"
          variant="outlined"
          type="password"
          required
          value={userPassword}
          placeholder="Enter password 🔐"
          onChange={handleUserPasswordChange}
        />
        <FormButton
          variant="contained"
          type="submit"
          disabled={
            !userName || !userEmail || userPassword.length < 7 ? true : false
          }
        >
          Register now
        </FormButton>
      </FormRegister>
      {error && (
        <div
          sx={{
            width: '400px',
            margin: '10px auto',
            boxShadow: 8,
            backgroundColor: '#fff',
          }}
          spacing={2}
        >
          <div
            severity="error"
            variant="outlined"
            onClose={setTimeout(() => {
              dispatch(resetError());
            }, 2000)}
            action={
              <button
                color="inherit"
                size="small"
                onClick={() => {
                  dispatch(resetError());
                }}
              >
                Close
              </button>
            }
          >
            {error}
          </div>
        </div>
      )}
    </Section>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section';
import { logIn } from 'redux/auth/authOperations';
import { getError } from 'redux/auth/authSelectors';
import { resetError } from 'redux/auth/authActions';
import useFormFields from 'hook/useFormFields';
import { FormButton, FormContact, FormInput, Title } from './LoginView.styled';

export default function LogInView() {
  const dispatch = useDispatch();
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

  const handleLogInSubmit = evt => {
    evt.preventDefault();

    dispatch(logIn({ email: userEmail, password: userPassword }));
    formReset();
  };

  const formReset = () => {
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Section isHidden={false}>
      <FormContact onSubmit={handleLogInSubmit}>
        <Title>Please sign in</Title>
        <FormInput
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          type="email"
          autoFocus={true}
          value={userEmail}
          placeholder="Enter your Email ✉️"
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
          disabled={!userEmail || userPassword.length < 7 ? true : false}
        >
          Log In
        </FormButton>
      </FormContact>
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
              <FormButton
                onClick={() => {
                  dispatch(resetError());
                }}
              >
                Close
              </FormButton>
            }
          >
            {error}
          </div>
        </div>
      )}
    </Section>
  );
}

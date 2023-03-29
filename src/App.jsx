import { AppBar } from 'page/AppBar/AppBar';
import { Suspense } from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/user/authOperations';
import Loader from './components/Loader/Loader';
import { PrivateRouter } from './components/PrivateRouter/PrivateRouter';
import { PublicRouter } from './components/PublicRouter/PublicRouter';
// import { AuthOperations } from 'redux/user';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import FilterContact from './FilterContacts/FilterContacts';

const createAsyncComponent = path => lazy(() => import(`${path}`));

const HomePage = createAsyncComponent('./page/Home/Home.jsx');
const ContactsPage = createAsyncComponent('./page/Contacts/Contacts.jsx');
const SingIn = createAsyncComponent('./page/SingIn/SignIn.jsx');
const SingUp = createAsyncComponent('./page/SingUp/SignUp.jsx');
const ErrorMessage = createAsyncComponent('./page/ErrorMessage/ErrorMessage');

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="/error" element={<ErrorMessage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRouter>
                  <ContactsPage />
                </PrivateRouter>
              }
            />

            <Route
              path="/sign-in"
              element={
                <PublicRouter restricted>
                  <SingIn />
                </PublicRouter>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRouter restricted>
                  <SingUp />
                </PublicRouter>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <PrivateRouter>
                <ContactsPage />
              </PrivateRouter>
            }
          />
        </Routes>
      </Suspense>
      {/* <ContactForm />
      <FilterContact />
      <ContactList /> */}
    </div>
  );
}

export default App;

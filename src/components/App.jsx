import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import Header from './Header';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { getIsRefreshingUser } from 'redux/auth/authSelectors';
import {
  isModalShownSelector,
  openedContactSelector,
} from 'redux/modal/modalSelectors';

const PhonebookView = lazy(() => import('views/PhonebookView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LogInView = lazy(() => import('views/LogInView'));
const ModalFormEditContact = lazy(() => import('./ModalFormEditContact'));

export default function App() {
  const isModalShown = useSelector(isModalShownSelector);
  const openedContact = useSelector(openedContactSelector);
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <Bars
      height="80"
      width="80"
      margin="0 auto"
      color="rgba(86, 96, 147, 70%)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <>
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
        <Header />

        <Suspense
          fallback={
            <Bars
              height="80"
              width="80"
              margin="0 auto"
              color="rgba(86, 96, 147, 70%)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          }
        >
          <main>
            <Routes>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PhonebookView />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LogInView />
                  </PublicRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute restricted>
                    <Navigate to="/login" replace />
                    <LogInView />
                  </PublicRoute>
                }
              />
            </Routes>
          </main>
          {isModalShown && (
            <ModalFormEditContact openedContact={openedContact} />
          )}
        </Suspense>
      </div>
    </>
  );
}

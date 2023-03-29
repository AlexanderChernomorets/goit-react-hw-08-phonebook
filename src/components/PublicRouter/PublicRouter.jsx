import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/authSelector';

export const PublicRouter = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const redirect = isLoggedIn && restricted;
  return <>{redirect ? <Navigate to="/contacts" replace /> : children}</>;
};

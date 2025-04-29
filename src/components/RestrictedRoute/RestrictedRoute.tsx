import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { RouteProps as RestrictedRouteProps } from '../../types';
import { useAppSelector } from '../../redux/hooks';

export const RestrictedRoute = ({
  component: Component,
  redirectTo,
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

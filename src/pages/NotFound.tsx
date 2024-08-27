import MaximumWidthWrapper from '../components/shared/MaximumWidthWrapper';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectUser } from '../redux/features/auth/authSlice';

const NotFound = () => {
  const user = useAppSelector(selectUser);

  return (
    <MaximumWidthWrapper className="grid place-content-center gap-3 mt-20">
      <ul className="text-blue-500 text-xl">
        <li>
          <Link to="/">Go to Home</Link>
        </li>

        {user ? (
          <li>
            <Link to="/services">Services</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Go to Login</Link>
          </li>
        )}
      </ul>

      <img className="h-screen w-screen" src="/public/error.png" alt="" />
    </MaximumWidthWrapper>
  );
};

export default NotFound;

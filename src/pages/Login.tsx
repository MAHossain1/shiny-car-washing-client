import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const toastId = toast.loading('Logging...');
    try {
      const result = await login(formData).unwrap();

      const user = verifyToken(result.data.token);
      dispatch(setUser({ user, token: result.data.token }));
      toast.success('Logged in', {
        id: toastId,
        duration: 2000,
      });
      navigate('/');

      // console.log(user);
    } catch (error: any) {
      toast.error('Something went wrong!', {
        id: toastId,
      });
      // console.log({ error });
      setMessage(error.data.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-black bg-opacity-75 flex justify-center">
      <div className="max-auto max-w-md pt-12 grid place-content-center">
        <h1 className="text-3xl text-center font-semibold text-white mb-5">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-blue-500 text-white p-2 rounded uppercase"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <p className="py-4 text-center text-white">
          No account?{' '}
          <Link to="/signup" className="text-white font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

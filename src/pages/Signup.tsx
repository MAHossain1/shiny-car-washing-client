import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../redux/features/auth/authApi';
import { toast } from 'sonner';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const [message, setMessage] = useState('');
  const [signup] = useSignupMutation();
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

    try {
      const result = await signup(formData).unwrap();

      // console.log(result);
      if (result.success) {
        toast.success(result.message, {
          duration: 2000,
        });

        navigate('/login');
      }
      if (result.error.status === 400) {
        setMessage('This user with this email already exists');
      } else {
        toast.error('Something went wrong..', {
          duration: 2000,
        });
      }
    } catch (error: any) {
      if (error.data.message === 'Cast error.')
        setMessage('This user with this email already exists');
    }
  };

  return (
    <div className="h-screen w-screen bg-black bg-opacity-75 flex justify-center">
      <div className="max-auto max-w-md pt-12 grid place-content-center">
        <h1 className="text-3xl text-center font-semibold text-white mb-5">
          Please Signup
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
        >
          <div className="mb-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-2">
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
          <div className="mb-2">
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
          <div className="mb-2">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-blue-500 text-white p-2 rounded uppercase"
          >
            Sign Up
          </button>
        </form>
        {message && <p className=" text-red-500">{message}</p>}
        <p className="py-2 text-center text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-white font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

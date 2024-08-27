import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-75 flex justify-center">
      <div className="max-auto max-w-md pt-12 grid place-content-center">
        <h1 className="text-3xl text-center font-semibold text-white mb-10">
          Please Signup
        </h1>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              // value={formData.name}
              // onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              // value={formData.name}
              // onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              // value={formData.name}
              // onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-5 bg-blue-500 text-white p-2 rounded uppercase"
          >
            Sign Up
          </button>
        </form>

        <p className="py-4 text-center text-white">
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

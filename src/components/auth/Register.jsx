import  { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styles


const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '', 
  });

  // Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };

  const handlePhoneChange = phoneNumber => {
    setUser(prevUser => ({
      ...prevUser,
      phoneNumber,
    }));
  };

  // Handle Form Submit
  const handleSubmit = e => {
    e.preventDefault();
    // Your form submission logic here
    console.log(user); // For demonstration purposes
  };

  return (
    <section className='my-8'>
      <div className='flex justify-center mt-4'>
        <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
          <h1 className='text-3xl font-mono text-gray-500 text-center'>
            REGISTRATION
          </h1>
          <form
            onSubmit={handleSubmit}
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                name='name'
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                onChange={handleChange}
                type='text'
                placeholder='Your full name'
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                name='email'
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                onChange={handleChange}
                type='email'
                placeholder='Your email address'
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='password' className='block text-gray-600'>
                Password
              </label>
              <input
                name='password'
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                onChange={handleChange}
                type='password'
                placeholder='Your password'
              />
            </div>

            {/* Phone Number Input */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='phoneNumber' className='block text-gray-600'>
                Phone Number
              </label>
              <PhoneInput
                name='phoneNumber'
                defaultCountry='BD' 
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                value={user.phoneNumber}
                onChange={handlePhoneChange}
                placeholder='Your phone number'
              />
            </div>

            <div className='flex flex-col items-center justify-center sm:items-center sm:flex-row'>
              <button
                type='submit'
                className='w-full px-20 py-2 mt-5 bg-indigo-700 text-center rounded-sm text-gray-50 sm:w-auto sm:mt-0'
              >
                SUBMIT
              </button>
            </div>
          </form>
          <p className='my-0 text-xs font-medium text-center text-gray-700 sm:my-5'>
            Already have an account?{' '}
            <a href='#' className='text-gray-800 hover:text-purple-700'>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};



export default SignUp;

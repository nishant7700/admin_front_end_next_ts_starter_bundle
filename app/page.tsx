import { LoginForm } from './(landing)/login/_components/loginForm';

const Login = () => {
  return (
    <>
      <div className='flex justify-center h-full'>
        <div className='w-2/3'>
          <img src='/banner.jpg' alt='logo' className='w-full h-full' />
        </div>
        <div className='w-1/3'>
          <div className='flex justify-center items-center flex-col w-full py-12 '>
            <img src='/logo.png' alt='logo' />
            <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-50 mt-16'>
              Login to your Account
            </h1>
            <p className='text-sm text-muted-foreground '>
              Enter your email below to login your account
            </p>
            <LoginForm initialData={null} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

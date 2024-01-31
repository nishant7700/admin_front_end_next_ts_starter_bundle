import axios from 'axios';
const login = async (user: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      user
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

export { login };

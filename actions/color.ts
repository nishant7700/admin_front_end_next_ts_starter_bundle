import axios from 'axios';
const getColors = async (query?: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/colors?${query}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const addColor = async (color: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/colors/add`,
      color
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const updateColor = async (id: string, color: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/colors/edit/${id}`,
      color
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const deleteColor = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/colors/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const getColor = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/colors/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

export { getColors, addColor, updateColor, deleteColor, getColor };

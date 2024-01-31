import axios from 'axios';
const getSizes = async (query?: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/sizes?${query}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const addSize = async (size: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/sizes/add`,
      size
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const updateSize = async (id: string, size: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/sizes/edit/${id}`,
      size
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const deleteSize = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/sizes/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const getSize = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/sizes/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

export { getSizes, addSize, updateSize, deleteSize, getSize };

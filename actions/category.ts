import axios from 'axios';
const getCategories = async (query?: String) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories?${query}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};
const addCategory = async (category: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/add`,
      category
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};
const updateCategory = async (id: string, category: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}/edit`,
      category
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};
const deleteCategory = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const getCategory = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};
export {
  getCategories,
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
};

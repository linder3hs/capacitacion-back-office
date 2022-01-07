import { BASE_URL } from "./config";
import { GET, POST, PUT, DELETE } from "./methods";
/**
 * Haremos las peticiones para productos
 */

const URL = `${BASE_URL}/products`;

export const getProducts = async () => {
  try {
    const response = await fetch(URL, GET());

    const data = await response.json();

    return data;
  } catch (err) {
    return err.message;
  }
};

export const storeProduct = async (body) => {
  try {
    const response = await fetch(`${URL}/store`, POST(body));

    const data = await response.json();

    return data;
  } catch (err) {
    return err.message;
  }
};

export const updateProduct = async (body, id) => {
  try {
    const response = await fetch(`${URL}/update/${id}`, PUT(body));

    const data = await response.json();

    return data;
  } catch (err) {
    return err.message;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${URL}/delete/${id}`, DELETE());

    const data = await response.json();

    return data;
  } catch (err) {
    return err.message;
  }
};

import { BASE_URL } from "./config";
import { GET, POST } from "./methods";
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

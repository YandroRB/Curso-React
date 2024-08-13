import { type userKey, type Item, type User } from '../store/users/slice';

function fetchData() {
  async function getData(): Promise<Item[]> {
    try {
      const response = await fetch(
        'https://66b17f3f1ca8ad33d4f44192.mockapi.io/api/v1/users'
      );
      if (!response.ok)
        throw new Error(
          'Ha ocurrido un error al obtener los datos: ' + response.status
        );
      const result: Item[] = await response.json();
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async function postData(user: User) {
    try {
      const response = await fetch(
        'https://66b17f3f1ca8ad33d4f44192.mockapi.io/api/v1/users',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok)
        throw new Error(
          'Hubo un problema al conectar con el servidor: ' + response.status
        );
      const result = response.json();
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async function updateData(item: Item) {
    const { key, ...newData } = item;
    try {
      const response = await fetch(
        `https://66b17f3f1ca8ad33d4f44192.mockapi.io/api/v1/users/${key}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newData),
        }
      );
      if (!response.ok) {
        throw new Error(
          'Hubo un problema al conectar con el servidor ' + response.status
        );
      }
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function deleteData(key: userKey) {
    try {
      const response = await fetch(
        `https://66b17f3f1ca8ad33d4f44192.mockapi.io/api/v1/users/${key}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok)
        throw new Error(
          'Hubo un problema al conectar con el servidor: ' + response.status
        );
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return { getData, postData, deleteData, updateData };
}
export default fetchData;

// Task 4: delUser(number)
import { getServerURL } from './task1.js';
export const delUser = async (id) => {
  try {
    const response = await fetch(`${getServerURL()}users/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error al eliminar usuario con ID ${id}: ${response.status} ${response.statusText}`);
    }
    console.log(`Usuario con ID ${id} eliminado con éxito.`);
  } catch (error) {
    console.error(`Ocurrió un error: ${error.message}`);
  }
};
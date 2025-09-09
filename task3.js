import { getServerURL } from './task1.js';

const getUsers = async () => {
  try {
    const response = await fetch(`${getServerURL()}users`);
    if (!response.ok) {
      throw new Error(`Error al obtener usuarios: ${response.status} ${response.statusText}`);
    }
    return await response.json(); 
  } catch (error) {
    console.error(`Ocurrió un error al obtener usuarios: ${error.message}`);
    return [];
  }
};

export const addUser = async (firstName, lastName, email) => {
  try {

    const users = await getUsers();

    const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
    const newUser = {
      id: maxId + 1,
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    const response = await fetch(`${getServerURL()}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) {
      throw new Error(`Error al agregar usuario: ${response.status} ${response.statusText}`);
    }
    const addedUser = await response.json();
    console.log("Usuario agregado con éxito:", addedUser);

  } catch (error) {
    console.error(`Ocurrió un error: ${error.message}`);
  }
};


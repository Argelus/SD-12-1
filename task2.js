// Task 2: listUsers()

import { getServerURL } from './task1.js';

export const listUsers = async () => {
  try {
    const response = await fetch(`${getServerURL()}/users`);
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status} ${response.statusText}`);
    }
    
    const users = await response.json();
    console.log(users);
    
  } catch (error) {
    console.error(`Ocurrió un error: ${error.message}`);
  }
}
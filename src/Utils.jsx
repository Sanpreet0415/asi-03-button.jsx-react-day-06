
import axios from 'axios';

export async function FetchData() {
  try {
    const response = await axios.get('https://reactday-03-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Optionally rethrow the error if needed
  }
}

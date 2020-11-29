import axios from 'axios'
import { Profile } from './Profile';

const API = 'https://api.github.com/users';

export const getUser = async (user: string) => {
  return await axios.get<Profile>(`${API}/${user}`);
}
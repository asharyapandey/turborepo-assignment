import { User } from "../types/users";

export const fetchUsers = async (): Promise<User[]> => {
	const response = await fetch("https://dummyjson.com/users?limit=5");
	const data = await response.json();

	return data?.users;
};

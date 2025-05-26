import { getRandomDepartment, getRandomPerformance } from "./mockUtils";

export async function fetchUsers() {
  const res = await fetch("https://dummyjson.com/users?limit=20");
  const data = await res.json();
  return data.users.map((user) => ({
    ...user,
    department: getRandomDepartment(),
    performance: getRandomPerformance(),
  }));
}

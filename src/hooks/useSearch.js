import { useState } from "react";

export default function useSearch(users) {
  const [query, setQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleSearch = (user) => {
    const q = query.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(q) ||
      user.lastName.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.department.toLowerCase().includes(q)
    );
  };

  const handleDepartmentFilter = (user) =>
    selectedDepartments.length === 0 ||
    selectedDepartments.includes(user.department);

  const handleRatingFilter = (user) =>
    selectedRatings.length === 0 || selectedRatings.includes(user.performance);

  const filteredUsers = users
    .filter(handleSearch)
    .filter(handleDepartmentFilter)
    .filter(handleRatingFilter);

  return {
    query,
    setQuery,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  };
}

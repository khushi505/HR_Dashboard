"use client";

import useFetchUsers from "@/hooks/useFetchUsers";
import UserCard from "@/components/Card/UserCard";
import useSearch from "@/hooks/useSearch";
import MultiSelect from "@/components/UI/MultiSelect";

export default function HomePage() {
  const { users, loading } = useFetchUsers();
  const {
    query,
    setQuery,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  } = useSearch(users);

  const departments = [...new Set(users.map((u) => u.department))];
  const ratings = [1, 2, 3, 4, 5];

  return (
    <main className="p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, email, or department..."
        className="w-full max-w-md px-4 py-2 mb-4 border rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <MultiSelect
          label="Filter by Department"
          options={departments}
          selected={selectedDepartments}
          setSelected={setSelectedDepartments}
        />
        <MultiSelect
          label="Filter by Rating"
          options={ratings}
          selected={selectedRatings}
          setSelected={setSelectedRatings}
        />
      </div>

      {/* User Cards */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}

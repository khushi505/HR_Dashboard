"use client";

import useFetchUsers from "@/hooks/useFetchUsers";
import useStore from "@/store/useStore";
import useSearch from "@/hooks/useSearch";
import UserCard from "@/components/Card/UserCard";
import MultiSelect from "@/components/UI/MultiSelect";
import { useState } from "react";

export default function HomePage() {
  const { users: fetchedUsers, loading } = useFetchUsers();
  const { users: addedUsers } = useStore(); // created users
  const users = [...addedUsers, ...fetchedUsers]; // merged

  const {
    query,
    setQuery,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredUsers,
  } = useSearch(users);

  const USERS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const start = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(start, start + USERS_PER_PAGE);

  return (
    <main className=" p-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, email, or department..."
        className="w-full max-w-md px-4 py-2 mb-4 border rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <MultiSelect
          label="Filter by Department"
          options={[...new Set(users.map((u) => u.department))]}
          selected={selectedDepartments}
          setSelected={setSelectedDepartments}
        />
        <MultiSelect
          label="Filter by Rating"
          options={[1, 2, 3, 4, 5]}
          selected={selectedRatings}
          setSelected={setSelectedRatings}
        />
      </div>

      {/* Users */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {currentUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}

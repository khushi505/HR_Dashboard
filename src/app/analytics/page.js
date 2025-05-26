"use client";

import useFetchUsers from "@/hooks/useFetchUsers";
import DepartmentBarChart from "@/components/Charts/DepartmentBarChart";
import BookmarkTrendChart from "@/components/Charts/BookmarkTrendChart";

export default function AnalyticsPage() {
  const { users, loading } = useFetchUsers();

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">📊 HR Analytics Dashboard</h1>

      {loading ? (
        <p>Loading charts...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DepartmentBarChart users={users} />
          <BookmarkTrendChart />
        </div>
      )}
    </main>
  );
}

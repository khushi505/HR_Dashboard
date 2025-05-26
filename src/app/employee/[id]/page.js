"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  generateMockBio,
  generateMockPerformanceHistory,
} from "@/lib/mockUtils";
import Tabs from "@/components/UI/Tabs";

export default function EmployeeDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser({
          ...data,
          bio: generateMockBio(),
          performanceHistory: generateMockPerformanceHistory(),
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!user) return <p>User not found</p>;

  const overview = (
    <div className="space-y-2">
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Address:</strong> {user.address?.address}, {user.address?.city}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
    </div>
  );

  const projects = (
    <ul className="list-disc pl-5 space-y-1">
      <li>Onboarding Automation Tool</li>
      <li>Internal HR Portal Revamp</li>
      <li>Performance Review Integration</li>
    </ul>
  );

  const feedback = (
    <ul className="list-disc pl-5 space-y-1">
      {user.performanceHistory.map((item) => (
        <li key={item.year}>
          <strong>{item.year}:</strong> {item.rating}★ performance
        </li>
      ))}
    </ul>
  );

  return (
    <main className=" max-w-xl mx-auto mt-10 bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-1">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600 mb-2">
        Age {user.age}, {user.company?.department}
      </p>

      <Tabs
        tabs={[
          { label: "Overview", content: overview },
          { label: "Projects", content: projects },
          { label: "Feedback", content: feedback },
        ]}
      />
    </main>
  );
}

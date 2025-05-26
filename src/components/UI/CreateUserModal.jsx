"use client";

import { useState } from "react";
import useStore from "@/store/useStore";

const departments = ["Marketing", "Engineering", "Sales", "HR", "Operations"];

export default function CreateUserModal({ isOpen, onClose }) {
  const { addUser } = useStore();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    department: departments[0],
    performance: 3,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email.includes("@") ||
      isNaN(form.age)
    ) {
      alert("Please fill all fields correctly.");
      return;
    }

    const newUser = {
      ...form,
      id: Date.now(), // mock unique ID
      age: parseInt(form.age),
      performance: parseInt(form.performance),
    };

    addUser(newUser);
    onClose(); // close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md text-black dark:text-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create New Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {departments.map((dep) => (
              <option key={dep}>{dep}</option>
            ))}
          </select>
          <label className="block">Performance Rating (1-5)</label>
          <input
            type="range"
            name="performance"
            min={1}
            max={5}
            value={form.performance}
            onChange={handleChange}
            className="w-full"
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 rounded border dark:border-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

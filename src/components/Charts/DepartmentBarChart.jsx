import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function DepartmentBarChart({ users }) {
  const departments = [...new Set(users.map((u) => u.department))];

  const averageRating = departments.map((dept) => {
    const deptUsers = users.filter((u) => u.department === dept);
    const avg =
      deptUsers.reduce((sum, u) => sum + u.performance, 0) / deptUsers.length;
    return parseFloat(avg.toFixed(2));
  });

  const data = {
    labels: departments,
    datasets: [
      {
        label: "Average Rating",
        data: averageRating,
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow max-w-xl w-full">
      <h2 className="text-lg font-bold mb-2">
        📊 Department-wise Average Ratings
      </h2>
      <Bar data={data} />
    </div>
  );
}

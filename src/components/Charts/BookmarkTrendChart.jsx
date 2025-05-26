import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function BookmarkTrendChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const bookmarks = [1, 3, 5, 6, 4, 8, 10]; // mock data

  const data = {
    labels: days,
    datasets: [
      {
        label: "Bookmarks This Week",
        data: bookmarks,
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow max-w-xl w-full">
      <h2 className="text-lg font-bold mb-2">📈 Bookmark Trends (Mock)</h2>
      <Line data={data} />
    </div>
  );
}

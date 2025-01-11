import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CommonDiseasesReport() {
  // Sample data for the chart: departments and their respective total appointments
  const departmentsData = {
    labels: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Dermatology",
    ],
    datasets: [
      {
        label: "Total Appointments",
        data: [120, 150, 100, 200, 180], // Sample number of appointments
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Appointments by Department",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-4">Common Diseases Report</h3>
      <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
        <Bar data={departmentsData} options={options} />
      </div>
    </div>
  );
}

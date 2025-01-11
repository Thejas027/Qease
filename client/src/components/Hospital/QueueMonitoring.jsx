import CommonDiseasesReport from "./CommonDiseasesReport";
import BookedAppointments from "../BookedAppointments";
import Sidebar from "../patient/SidebarPatient";

export default function QueueMonitoring() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Queue Monitoring</h2>
        <p className="text-gray-600 mb-6">
          It is commonly implemented using digital systems, screens, and
          real-time updates in sectors like healthcare, banking, retail, and
          government services.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CommonDiseasesReport />
        </div>
        <BookedAppointments />
      </div>
    </div>
  );
}

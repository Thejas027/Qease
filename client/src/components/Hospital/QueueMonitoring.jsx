import AppointmentBooked from "./AppointmentBooked";
import Sidebar from "./SidebarHospital";
export default function QueueMonitoring() {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-12 px-8 py-2">
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-blue-700">
              Welcome to Our Hospital
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Our hospital is committed to providing the highest quality
              healthcare services. We offer a wide range of medical services,
              from routine checkups to specialized treatments. Our dedicated
              medical staff ensures that each patient receives the care they
              need.
            </p>
          </div>
          <div>
          
          </div>
        </div>
        <div className="w-full">
          <AppointmentBooked />
        </div>
      </div>
    </div>
  );
}

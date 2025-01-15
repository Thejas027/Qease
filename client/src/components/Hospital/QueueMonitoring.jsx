import AppointmentBooked from "./AppointmentBooked";
import Sidebar from "./SidebarHospital";
export default function QueueMonitoring() {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div>some data </div>
          <div></div>
        </div>
        <div className="w-full">
          <AppointmentBooked />
        </div>
      </div>
    </div>
  );
}

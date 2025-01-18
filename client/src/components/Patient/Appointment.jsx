import SidebarPatient from "./SidebarPatient";
import PatientBooking from "./PatientBooking";

function Appointment() {
  return (
    <div>
      <div className="flex">
        <div>
          <SidebarPatient />
        </div>
        <div className="w-full">
          <PatientBooking />
        </div>
      </div>
    </div>
  );
}

export default Appointment;

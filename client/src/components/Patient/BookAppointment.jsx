import SidebarPatient from "./SidebarPatient";

function BookAppointment() {
  return (
    <div className="flex">
      <div>
        <SidebarPatient />
      </div>
      <div className="w-full">BookAppointment</div>
    </div>
  );
}

export default BookAppointment;

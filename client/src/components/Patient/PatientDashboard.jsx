import SidebarPatient from "./SidebarPatient";

function PatientDashboard() {
  return (
    <div className="flex">
      <div>
        <SidebarPatient />
      </div>
      <div className="w-full">Dashboard content</div>
    </div>
  );
}

export default PatientDashboard;

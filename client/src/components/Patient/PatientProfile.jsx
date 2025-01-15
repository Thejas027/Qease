import Sidebar from "./SidebarPatient";

function PatientProfile() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">PatientProfile</div>
    </div>
  );
}

export default PatientProfile;

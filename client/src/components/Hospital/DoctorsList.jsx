import Sidebar from "../patient/SidebarPatient";
export default function DoctorsList() {
  const doctors = [
    { name: "Dr. Ramesh Kumar", status: "Available", color: "bg-green-500" },
    {
      name: "Dr. Nandini Shetty",
      status: "Unavailable",
      color: "bg-yellow-500",
    },
    { name: "Dr. Deepak Agarwal", status: "Available", color: "bg-green-500" },
    { name: "Dr. Chandan Shetty", status: "Off Duty", color: "bg-red-500" },
    { name: "Dr. Ramesh Kumar", status: "Available", color: "bg-green-500" },
    {
      name: "Dr. Nandini Shetty",
      status: "Unavailable",
      color: "bg-yellow-500",
    },
    { name: "Dr. Deepak Agarwal", status: "Available", color: "bg-green-500" },
    { name: "Dr. Chandan Shetty", status: "Off Duty", color: "bg-red-500" },
  ];

  return (
    <div className="flex ">
      <div >
        <Sidebar />
      </div>
      <div className="bg-white p-4 rounded shadow  w-full">
        <h3 className="text-lg font-bold mb-4">Doctors List</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2">#</th>
              <th className="text-left py-2">Doctors Name</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{doctor.name}</td>
                <td className="py-2">
                  <span
                    className={`text-white px-2 py-1 rounded ${doctor.color}`}
                  >
                    {doctor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

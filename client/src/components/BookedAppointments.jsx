export default function BookedAppointments() {
  const appointments = [
    {
      id: "001",
      patient: "Sagar",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Fever",
    },
    {
      id: "002",
      patient: "Ramya",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Cholera",
    },
    {
      id: "003",
      patient: "Sandhya",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Fever",
    },
    {
      id: "004",
      patient: "James",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Cold",
    },
    {
      id: "001",
      patient: "Sagar",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Fever",
    },
    {
      id: "002",
      patient: "Ramya",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Cholera",
    },
    {
      id: "003",
      patient: "Sandhya",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Fever",
    },
    {
      id: "004",
      patient: "James",
      doctor: "Dr. Ramesh Kumar",
      date: "07-01-2025",
      disease: "Cold",
    },
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded shadow h-64 overflow-y-auto">
      <h3 className="text-lg font-bold mb-4">Booked Appointments</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2">#</th>
            <th className="text-left py-2">Patient Name</th>
            <th className="text-left py-2">Assigned Doctor</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Diseases</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="py-2">{appointment.id}</td>
              <td className="py-2">{appointment.patient}</td>
              <td className="py-2">{appointment.doctor}</td>
              <td className="py-2">{appointment.date}</td>
              <td className="py-2 text-red-500">{appointment.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

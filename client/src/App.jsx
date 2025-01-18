import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PatientDashboard from "./components/Patient/PatientDashboard";
import HospitalDashboard from "./components/Hospital/QueueMonitoring";
// import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import PatientStatus from "./components/Patient/PatientStatus";
import HomeLayout from "./pages/HomeLayout";
import PatientForm from "./components/Patient/PatientForm";

import QueueStatus from "./components/Hospital/QueueStatus";
import DepartmentList from "./components/Hospital/DepartmentList";
import DoctorsList from "./components/Hospital/DoctorsList";

import SignUp from "./pages/SignUp";
import PatientProfile from "./components/Patient/PatientProfile";
import Appointment from "./components/Patient/Appointment";
import BookAppointment from "./components/Patient/BookAppointment";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/hospital" element={<HospitalDashboard />} />
          <Route path="/patient-form" element={<PatientForm />} />
          <Route
            path="/patient-status/:patientId"
            element={<PatientStatus />}
          />
          <Route path="/hospital/queue-status" element={<QueueStatus />} />
          <Route path="/department-list" element={<DepartmentList />} />
          <Route path="/doctors/:departmentId" element={<DoctorsList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route
            path="/patient-appointment-booking"
            element={<Appointment />}
          />
          <Route path="/appointment-book-form" element={<BookAppointment />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

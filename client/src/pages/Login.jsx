import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        const data = await response.json();
        login(data.user);
        console.log("Response Data:", data); // Debugging: Log response data

        if (data.user && data.user.role === "patient") {
          navigate("/patient"); // Navigate to patient page
          console.log("Navigating to /patient");
        } else if (data.user && data.user.role === "hospital") {
          navigate("/hospital"); // Navigate to hospital page
          console.log("Navigating to /hospital");
        } else {
          console.error("Unexpected role or missing user data:", data);
          setError("Unexpected error. Please contact support.");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials");
        console.error("Login failed with error:", errorData);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded w-full"
            >
              <option value="patient">Patient</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

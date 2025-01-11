import Sidebar from "./SidebarPatient"; // Import Sidebar component

function PatientForm() {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    alert("Form Submitted Successfully!"); // Show alert
  };

  return (
    <div className="flex min-h-screen gap-32 bg-gray-100 min-w-full">
      <Sidebar />

      <div className="flex-1 w-full">
        <h1 className="text-4xl text-indigo-600 font-bold mb-6 text-left mt-4">
          Patient Registration Form
        </h1>
        <div className="bg-indigo-100 p-8 rounded-xl shadow-lg w-full max-w-5xl">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit} // Add the submit event handler
          >
            {/* Form fields */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-semibold"
                >
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  pattern="[0-9]{10}"
                  required
                  className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="age"
                  className="block text-gray-700 font-semibold"
                >
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  required
                  className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="bloodgroup"
                  className="block text-gray-700 font-semibold"
                >
                  Blood Group:
                </label>
                <input
                  type="text"
                  id="bloodgroup"
                  name="bloodgroup"
                  required
                  className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-semibold"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="dob"
                  className="block text-gray-700 font-semibold"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-3/4 py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-semibold"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                required
                className="w-3/4 py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit" // Ensure the button triggers form submission
                className="w-36 py-2 bg-pink-600 text-white rounded-lg hover:bg-purple-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientForm;

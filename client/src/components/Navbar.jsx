export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏥 Hospital</h1>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">Why Choose Us</a>
        <a href="#" className="hover:underline">Info</a>
        <button className="bg-white text-purple-700 px-4 py-1 rounded">Login</button>
      </div>
    </nav>
  );
}

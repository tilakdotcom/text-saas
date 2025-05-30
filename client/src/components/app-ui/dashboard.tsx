// SimpleDashboard.jsx
export default function SimpleDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-xl font-bold mb-4">Dashboard</header>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 shadow rounded">Users: 120</div>
        <div className="bg-white p-4 shadow rounded">Revenue: $5,200</div>
        <div className="bg-white p-4 shadow rounded">Active Sessions: 23</div>
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Activity } from "lucide-react";

export default function UpdatedDashboard() {
  const stats = [
    { label: "Users", value: "120", icon: <Users className="w-5 h-5 text-blue-500" /> },
    { label: "Revenue", value: "$5,200", icon: <BarChart3 className="w-5 h-5 text-green-500" /> },
    { label: "Sessions", value: "23", icon: <Activity className="w-5 h-5 text-purple-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold mb-6">📊 Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="hover:shadow-md transition duration-200">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full">{stat.icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Home,
  MapPin,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react";

const HeroSection = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  // Sample data for charts
  const barData = [
    { month: "T1", value: 4200 },
    { month: "T2", value: 5800 },
    { month: "T3", value: 6100 },
    { month: "T4", value: 7200 },
    { month: "T5", value: 8900 },
    { month: "T6", value: 9600 },
    { month: "T7", value: 10200 },
    { month: "T8", value: 11800 },
    { month: "T9", value: 12400 },
    { month: "T10", value: 13100 },
    { month: "T11", value: 14200 },
    { month: "T12", value: 15600 },
  ];

  const lineData = [
    { year: "2020", price: 32 },
    { year: "2021", price: 35 },
    { year: "2022", price: 41 },
    { year: "2023", price: 45 },
    { year: "2024", price: 52 },
  ];

  const pieData = [
    { name: "Căn hộ", value: 45, color: "#3B82F6" },
    { name: "Nhà riêng", value: 30, color: "#06B6D4" },
    { name: "Biệt thự", value: 15, color: "#8B5CF6" },
    { name: "Đất nền", value: 10, color: "#EC4899" },
  ];

  const stats = [
    { label: "Dự án đang bán", value: "2,847", icon: Home },
    { label: "Giao dịch/tháng", value: "15,623", icon: BarChart3 },
    { label: "Nhà đầu tư", value: "89,420", icon: Users },
    { label: "Tỷ VND giao dịch", value: "142.5", icon: DollarSign },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue((prev) => (prev + 1) % 100);
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-10 animate-spin slow"></div>
      </div>

      <div className="absolute top-40 right-20 w-24 h-24 bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-3 animate-pulse">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData.slice(0, 2)}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={30}
            >
              {pieData.slice(0, 2).map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-600 font-medium">
                <TrendingUp className="w-5 h-5" />
                <span>Phân tích thị trường BDS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Website thống kê
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  thị trường giá
                </span>
                <span className="block">
                  bất động sản tại
                  <span className="text-blue-600 ml-2">Việt Nam</span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                Nền tảng phân tích dữ liệu toàn diện về thị trường bất động sản
                Việt Nam với thông tin chi tiết, báo cáo chuyên sâu và xu hướng
                giá cả theo thời gian thực.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span>Xem báo cáo</span>
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Khám phá khu vực</span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = currentStat === index;
                return (
                  <div
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-500 ${
                      isActive ? "scale-110 shadow-xl bg-blue-50" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      } transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Main Chart (Animation Removed) */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Giao dịch BDS 2024
                  </h3>
                  <p className="text-gray-600">Số lượng giao dịch theo tháng</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">
                    +24.8%
                  </div>
                  <div className="text-sm text-gray-500">So với năm trước</div>
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      radius={[6, 6, 0, 0]}
                      fill="url(#barGradient)"
                    />
                    <defs>
                      <linearGradient
                        id="barGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Mini Charts Row */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-2">
                    Xu hướng giá (triệu VND/m²)
                  </div>
                  <div className="h-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineData}>
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#3B82F6"
                          strokeWidth={3}
                          dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-2">
                    Phân khúc thị trường
                  </div>
                  <div className="h-16 flex items-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={20}
                          outerRadius={30}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="ml-4 space-y-1">
                      {pieData.map((entry, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-xs"
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                          ></div>
                          <span>{entry.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full">
        <svg
          className="w-full h-24 text-white"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
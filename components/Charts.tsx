"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const sampleData = [
    { month: "1월", 접수: 35, 완료: 20 },
    { month: "2월", 접수: 28, 완료: 22 },
    { month: "3월", 접수: 40, 완료: 30 },
    { month: "4월", 접수: 25, 완료: 20 },
    { month: "5월", 접수: 32, 완료: 29 },
    { month: "6월", 접수: 38, 완료: 36 },
];

export function Charts() {
    return (
        <div className="bg-white dark:bg-zinc-950 border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">📈 월별 장애 접수·완료 추이</h3>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sampleData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" tick={{ fill: "#555" }} />
                    <YAxis tick={{ fill: "#555" }} />
                    <Tooltip contentStyle={{ borderRadius: "10px" }} />
                    <Legend />
                    <Line type="monotone" dataKey="접수" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="완료" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

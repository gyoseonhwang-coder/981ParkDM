"use client";

import { Home, BarChart2, Settings } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64 bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-zinc-800 p-6 hidden md:flex flex-col">
            <h1 className="text-2xl font-bold mb-10 text-blue-600">981Park</h1>
            <nav className="flex flex-col gap-3">
                <a href="/" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500">
                    <Home className="w-5 h-5" /> 대시보드
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500">
                    <BarChart2 className="w-5 h-5" /> 통계
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500">
                    <Settings className="w-5 h-5" /> 설정
                </a>
            </nav>
        </aside>
    );
}

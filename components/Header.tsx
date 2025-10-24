"use client";

export function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-blue-600">장애관리 현황</h2>
            <div className="text-sm text-gray-500">981Park Admin · 2025</div>
        </header>
    );
}

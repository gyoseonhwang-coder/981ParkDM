"use client";

export function StatCard({ title, value, color }: { title: string; value: string; color: string }) {
    const colors: any = {
        blue: "bg-blue-50 text-blue-600 border-blue-200",
        yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
        green: "bg-green-50 text-green-600 border-green-200",
    };

    return (
        <div className={`rounded-xl border p-6 text-center ${colors[color]}`}>
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
    );
}

"use client";

export function IssueTable() {
    const dummy = [
        { id: 1, name: "VR 존1", issue: "화면 끊김", status: "점검중" },
        { id: 2, name: "아레나 2호기", issue: "센서 미인식", status: "접수중" },
        { id: 3, name: "서바이벌 3번건", issue: "탄창 불량", status: "완료" },
    ];

    return (
        <div className="bg-white dark:bg-zinc-950 border rounded-xl overflow-hidden">
            <table className="min-w-full border-collapse">
                <thead className="bg-gray-100 dark:bg-zinc-800 text-sm text-gray-600 dark:text-gray-300">
                    <tr>
                        <th className="p-3 text-left">구분</th>
                        <th className="p-3 text-left">장애내용</th>
                        <th className="p-3 text-left">상태</th>
                    </tr>
                </thead>
                <tbody>
                    {dummy.map((row) => (
                        <tr key={row.id} className="border-t border-gray-200 dark:border-zinc-800">
                            <td className="p-3">{row.name}</td>
                            <td className="p-3">{row.issue}</td>
                            <td className="p-3">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${row.status === "완료"
                                        ? "bg-green-100 text-green-700"
                                        : row.status === "점검중"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-blue-100 text-blue-700"
                                    }`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

"use client";

import { StatCard } from "../components/StatCard";
import { IssueTable } from "../components/IssueTable";
import { Charts } from "../components/Charts";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* 상단 요약 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="오늘 접수" value="8건" color="blue" />
        <StatCard title="점검중" value="3건" color="yellow" />
        <StatCard title="완료" value="15건" color="green" />
      </div>

      {/* 그래프 */}
      <Charts />

      {/* 테이블 */}
      <IssueTable />
    </div>
  );
}

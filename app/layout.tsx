import "./globals.css";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const metadata = {
  title: "981Park Dashboard",
  description: "시설관리 · 장애현황 통합 대시보드",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-zinc-900 dark:text-zinc-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

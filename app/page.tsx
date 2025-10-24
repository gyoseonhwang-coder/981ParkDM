"use client";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start bg-gray-50 py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          🚀 981Park 장애관리 대시보드
        </h1>
        <p className="text-gray-600 mb-8">
          구글 스프레드시트 데이터를 기반으로 장애 접수, 처리 현황, 통계를 한눈에 볼 수 있는 대시보드입니다.
        </p>

        {/* 임시 요약 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-500">오늘 접수된 장애</p>
            <h2 className="text-2xl font-bold text-blue-700">8건</h2>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-500">점검중</p>
            <h2 className="text-2xl font-bold text-yellow-700">3건</h2>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-500">완료</p>
            <h2 className="text-2xl font-bold text-green-700">15건</h2>
          </div>
        </div>

        {/* 최근 장애 목록 */}
        <h2 className="text-xl font-semibold mb-3">📋 최근 장애 접수</h2>
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2">날짜</th>
              <th className="border border-gray-200 px-3 py-2">포지션</th>
              <th className="border border-gray-200 px-3 py-2">설비</th>
              <th className="border border-gray-200 px-3 py-2">내용</th>
              <th className="border border-gray-200 px-3 py-2">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2">2025-10-24</td>
              <td className="border border-gray-200 px-3 py-2">레이저 서바이벌</td>
              <td className="border border-gray-200 px-3 py-2">총기 7번</td>
              <td className="border border-gray-200 px-3 py-2 text-gray-700">
                발사 불량 / 방아쇠 불량
              </td>
              <td className="border border-gray-200 px-3 py-2 text-blue-600 font-semibold">
                접수중
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2">2025-10-23</td>
              <td className="border border-gray-200 px-3 py-2">고카트존</td>
              <td className="border border-gray-200 px-3 py-2">카트 12번</td>
              <td className="border border-gray-200 px-3 py-2 text-gray-700">
                센서 오류 / 전원 불량
              </td>
              <td className="border border-gray-200 px-3 py-2 text-yellow-600 font-semibold">
                점검중
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

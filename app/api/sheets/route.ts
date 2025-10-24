import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // ✅ Vercel 환경 변수로부터 인증 구성
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            projectId: process.env.GOOGLE_PROJECT_ID,
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // ✅ SHEET_ID도 환경변수에서 불러오기
        const spreadsheetId = process.env.SHEET_ID;

        // ✅ 가져올 시트 범위
        const range = "접수내용!A2:Q";

        const res = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = res.data.values || [];

        const data = rows.map((r: string[]) => ({
            priority: r[0],
            date: r[1],
            writer: r[2],
            position: r[3],
            location: r[4],
            equipment: r[5],
            category: r[6],
            issueType: r[7],
            description: r[8],
            status: r[9],
        }));

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("🚨 Sheets API Error:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

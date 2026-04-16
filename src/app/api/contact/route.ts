import { NextRequest, NextResponse } from "next/server";

const DASHBOARD_URL = "https://haandvaerker-sider-iota.vercel.app";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    body.source = "odense-elektriker.dk";
    
    const res = await fetch(`${DASHBOARD_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: false });
  }
}

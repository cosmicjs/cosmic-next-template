// app/api/cosmic-webhooks/route.ts
// Use this as a starting point for your Cosmic webhooks https://www.cosmicjs.com/docs/dashboard/buckets#webhooks
import { NextResponse, type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const res = await request.json()
  const event = res.event
  const object = res.data.object
  try {
    if (event === "created") {
      // Do something with newly created object
    }
    if (event === "edited") {
      // Do something with edited object
    }
    if (event === "deleted") {
      // Do something with deleted object
    }
    return Response.json({ success: true })
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}

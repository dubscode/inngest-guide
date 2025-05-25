import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client"; // Import our client

// Create a simple async Next.js API route handler
export async function POST() {
  // Send your event payload to Inngest
  await inngest.send({
    name: "test/hello.world",
    data: {
      name: "Ali",
    },
  });

  return NextResponse.json({ message: "Event sent!" });
}

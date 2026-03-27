import { NextResponse } from "next/server";
import prisma from "@/src/lib/db";
import { BookingStatus } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      checkIn,
      checkOut,
      totalPrice,
      propertyId,
      guestId, // For now, we'll expect this or use a default
    } = body;

    // Ensure guest exists (dummy for now if not provided)
    let guest_id = guestId;
    if (!guest_id) {
       const defaultGuest = await prisma.user.upsert({
         where: { email: "guest@example.com" },
         update: {},
         create: {
           email: "guest@example.com",
           name: "Demo Guest",
         }
       });
       guest_id = defaultGuest.id;
    }

    const booking = await prisma.booking.create({
      data: {
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        totalPrice: parseInt(totalPrice),
        status: BookingStatus.PENDING,
        propertyId,
        guestId: guest_id,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: "Failed to create booking", details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

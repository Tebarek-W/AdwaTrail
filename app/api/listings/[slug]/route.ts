import { NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const listing = await prisma.property.findFirst({
      where: { id: slug }, // We used slug as ID in seed for convenience
      include: {
        host: true,
        reviews: {
          include: {
            guest: true,
          },
        },
      },
    });

    if (!listing) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json(listing);
  } catch (error) {
    console.error("Error fetching listing:", error);
    return NextResponse.json({ error: "Failed to fetch listing" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import prisma from "@/src/lib/db";
import { PropertyType } from "@prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q") || searchParams.get("location");

  try {
    const listings = await prisma.property.findMany({
      where: {
        ...(query && {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { location: { contains: query, mode: "insensitive" } },
            { city: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        }),
        ...(category === "luxury" && { pricePerNight: { gt: 10000 } }),
        ...(category === "cultural" && { type: PropertyType.EXPERIENCE }),
      },
      include: {
        host: true,
        reviews: true,
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      location,
      city,
      country,
      type,
      pricePerNight,
      mainImageUrl,
      galleryImages,
      maxGuests,
      hostId, // For now, we'll expect this from the body or use a default
    } = body;

    let validHostId = hostId;
    if (!validHostId) {
      // Find default host created by seed
      let defaultHost = await prisma.user.findUnique({
        where: { email: "aman@adwatrail.com" }
      });
      
      // If not exists, create it just in case
      if (!defaultHost) {
        defaultHost = await prisma.user.create({
          data: {
            email: "aman@adwatrail.com",
            name: "Aman Gebru",
            role: "HOST",
          }
        });
      }
      validHostId = defaultHost.id;
    }

    const property = await prisma.property.create({
      data: {
        title,
        description,
        location,
        city,
        country,
        type: type as PropertyType,
        pricePerNight: parseInt(pricePerNight),
        mainImageUrl,
        galleryImages: galleryImages || [],
        maxGuests: parseInt(maxGuests),
        hostId: validHostId,
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json({ error: "Failed to create listing" }, { status: 500 });
  }
}

import { PrismaClient, Role, PropertyType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create a default host
  const host = await prisma.user.upsert({
    where: { email: "aman@adwatrail.com" },
    update: {},
    create: {
      email: "aman@adwatrail.com",
      name: "Aman Gebru",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
      role: Role.HOST,
    },
  });

  const properties = [
    {
      slug: "gheralta-luxury-stay",
      title: "Gheralta Cliffs Eco-Lodge",
      description: "Perched on the edge of the Gheralta escarpment, this eco-lodge offers breathtaking 360-degree views of the Tigray mountains. Experience silence, luxury, and proximity to some of the world's most impressive rock-hewn churches. Our lodge is built using local stone and sand, blending perfectly with the landscape.",
      location: "Gheralta Mountains, Tigray",
      city: "Hawzen",
      country: "Ethiopia",
      pricePerNight: 14500,
      type: PropertyType.ENTIRE_HOME,
      mainImageUrl: "/images/gheralta_luxury_stay_1773406024643.png",
      galleryImages: [
        "/images/gheralta_luxury_stay_1773406024643.png",
        "/images/lalibela_boutique_hotel_1773406077350.png",
        "/images/simien_cultural_expedition_1773406095779.png",
      ],
      maxGuests: 4,
      hostId: host.id,
    },
    {
      slug: "lalibela-boutique-hotel",
      title: "Lalibela Boutique Heritage",
      description: "A stone's throw from the UNESCO World Heritage rock-hewn churches, our boutique hotel offers modern comforts steeped in traditional Aksumite design. Each room is meticulously decorated with Ethiopian crafts and textiles.",
      location: "Heritage Zone, Lalibela",
      city: "Lalibela",
      country: "Ethiopia",
      pricePerNight: 9800,
      type: PropertyType.PRIVATE_ROOM,
      mainImageUrl: "/images/lalibela_boutique_hotel_1773406077350.png",
      galleryImages: [
        "/images/lalibela_boutique_hotel_1773406077350.png",
        "/images/gheralta_luxury_stay_1773406024643.png",
        "/images/simien_cultural_expedition_1773406095779.png",
      ],
      maxGuests: 2,
      hostId: host.id,
    },
    {
      slug: "simien-cultural-expedition",
      title: "Simien Mountains Safari Lodge",
      description: "Experience the roof of Africa. Our lodge sits in the heart of the Simien Mountains National Park, home to the Gelada baboon and Walia ibex. Luxury canvas tents with heated blankets and professional guides ready for your adventure.",
      location: "Simien Mountains National Park",
      city: "Debark",
      country: "Ethiopia",
      pricePerNight: 12100,
      type: PropertyType.EXPERIENCE,
      mainImageUrl: "/images/simien_cultural_expedition_1773406095779.png",
      galleryImages: [
        "/images/simien_cultural_expedition_1773406095779.png",
        "/images/gheralta_luxury_stay_1773406024643.png",
        "/images/lalibela_boutique_hotel_1773406077350.png",
      ],
      maxGuests: 6,
      hostId: host.id,
    },
  ];

  for (const property of properties) {
    await prisma.property.upsert({
      where: { id: property.slug }, // Using slug as ID or just checking if title exists? The schema uses cuid for ID. 
      // I'll check by title for simplicity in seeding.
      update: {},
      create: {
        ...property,
        id: property.slug, // Manually setting ID to slug for easier testing if needed, or I can let it generate.
        // Actually, schema says ID is @id @default(cuid()). I can provide it.
      },
    });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient, PropertyType, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Cleanup
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.property.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create a mock Host
  const host = await prisma.user.create({
    data: {
      email: "host@adwatrail.com",
      name: "Aman Adwa",
      role: Role.HOST,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
    },
  });

  // 2. Create a mock Guest
  const guest = await prisma.user.create({
    data: {
      email: "guest@adwatrail.com",
      name: "Sara Gebre",
      role: Role.GUEST,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
    },
  });

  // 3. Properties
  const properties = [
    {
      title: "Gheralta Cliffs Eco-Lodge",
      description: "Experience the majestic Tigray mountains from this eco-friendly sanctuary. Perfect for mountain trekking and visiting rock-hewn churches.",
      location: "Gheralta Mountains, Tigray",
      city: "Hawzen",
      country: "Ethiopia",
      type: PropertyType.ENTIRE_HOME,
      pricePerNight: 14500,
      mainImageUrl: "/images/gheralta_luxury_stay_1773406024643.png",
      maxGuests: 4,
      hostId: host.id,
    },
    {
      title: "Lalibela Boutique Heritage",
      description: "A blend of traditional architecture and modern luxury, just steps away from the world-famous rock-hewn churches of Lalibela.",
      location: "Lalibela, Amhara",
      city: "Lalibela",
      country: "Ethiopia",
      type: PropertyType.PRIVATE_ROOM,
      pricePerNight: 9800,
      mainImageUrl: "/images/lalibela_boutique_hotel_1773406077350.png",
      maxGuests: 2,
      hostId: host.id,
    },
    {
      title: "Simien Cultural Expedition",
      description: "A high-altitude retreat offering guided tours of the Simien Mountains National Park. Spot endemic Gelada baboons and enjoy the roof of Africa.",
      location: "Simien Mountains National Park",
      city: "Debark",
      country: "Ethiopia",
      type: PropertyType.EXPERIENCE,
      pricePerNight: 12100,
      mainImageUrl: "/images/simien_cultural_expedition_1773406095779.png",
      maxGuests: 6,
      hostId: host.id,
    },
    {
      title: "Harar Heritage Mansion",
      description: "Stay inside the walled city of Harar Jugol. Experience the vibrant culture, street markets, and the famous hyena feeding ritual.",
      location: "Old City, Harar",
      city: "Harar",
      country: "Ethiopia",
      type: PropertyType.ENTIRE_HOME,
      pricePerNight: 6900,
      mainImageUrl: "/images/lalibela_boutique_hotel_1773406077350.png", // Reuse for now
      maxGuests: 3,
      hostId: host.id,
    },
    {
      title: "Addis Sky-View Apartment",
      description: "The height of urban luxury in Addis Ababa's diplomatic district. Fully serviced with breathtaking city views.",
      location: "Bole Diplomatic Zone",
      city: "Addis Ababa",
      country: "Ethiopia",
      type: PropertyType.ENTIRE_HOME,
      pricePerNight: 17800,
      mainImageUrl: "/images/gheralta_luxury_stay_1773406024643.png", // Reuse for now
      maxGuests: 2,
      hostId: host.id,
    },
  ];

  for (const p of properties) {
    const property = await prisma.property.create({ data: p });

    // Add a review for each
    await prisma.review.create({
      data: {
        rating: 5,
        comment: "An absolutely breathtaking experience! Highly recommend.",
        guestId: guest.id,
        propertyId: property.id,
      },
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

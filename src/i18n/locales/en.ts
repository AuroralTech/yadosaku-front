export default {
  common: {
    nav: {
      facilities: "Facilities",
      reservations: "Reservations",
    },
  },
  plan: {
    price: {
      label: "Price",
      per: {
        person: "person",
        room: "room",
      },
    },
    period: {
      label: "Available Period",
    },
    remaining: {
      label: "Available",
      unit: "rooms",
    },
    button: {
      reserve: "Reserve Now",
    },
    section: {
      allergens: {
        title: "Allergens",
      },
      imageAlt: {
        meal: "Image",
      },
    },
    facility: {
      name: "Facility Name",
      type: "Type",
      capacity: "Capacity",
      units: "Units",
    },
  },
  reservation: {
    title: "Reservation Details",
    steps: {
      schedule: "Schedule",
      guest: "Guest Information",
      confirm: "Confirmation",
    },
    labels: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      name: "Name",
      email: "Email",
      phone: "Phone",
      notes: "Notes",
    },
    buttons: {
      next: "Next",
      back: "Back",
      confirm: "Confirm Reservation",
    },
    placeholders: {
      name: "John Doe",
      email: "example@example.com",
      phone: "090-1234-5678",
      notes: "Please enter any special requests",
    },
    remaining: {
      label: "Remaining",
      unit: "rooms",
    },
  },
} as const;

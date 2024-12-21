export default {
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
  },
} as const;

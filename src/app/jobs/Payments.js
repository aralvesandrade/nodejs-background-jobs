import { faker } from "@faker-js/faker";

export default {
  key: "Payments",
  options: {
    repeat: { cron: "*/1 * * * *" },
  },
  async handle() {
    const OrderID = faker.string.alphanumeric(10);
    console.log(`Payment ${OrderID} done!`);
  },
};

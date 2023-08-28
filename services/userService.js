const { User } = require("../models/index");

module.exports = {
  createUser: async (userData) => {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
  // Add other user-related service methods here
};

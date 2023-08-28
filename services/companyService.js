const { Company } = require("../models/index");

module.exports = {
  createCompany: async (companyData) => {
    try {
      const company = await Company.create(companyData);
      return company;
    } catch (error) {
      throw new Error("Failed to create company");
    }
  },
  // Add other company-related service methods here
};

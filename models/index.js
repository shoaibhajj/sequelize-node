const User = require("./user");
const Company = require("./companyModel");

User.belongsTo(Company);
Company.hasMany(User);

module.exports = { User, Company };

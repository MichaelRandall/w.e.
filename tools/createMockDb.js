/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { sites, organizations, sub_organizations } = mockData;
const data = JSON.stringify({ sites, organizations, sub_organizations });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.baseUrl = "https://aqueous-brook-60480.herokuapp.com/";
      config.specPattern = "cypress/integration/api-tests/*.spec.{js,jsx,ts,tsx}"
      return config
    },
  },
});

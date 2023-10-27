const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");

exports.swaggerSetup = (app) => {
  dotenv.config();

  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Counter App backend docs",
        version: "v 1.0",
        description:
          "Information related to all the available endpoints for the Counter App By Shreyas Bhat K",
        contact: {
          name: "Shreyas Bhat K",
        },
        servers: [`127.0.0.1:${process.env.PORT}`],
      },
    },
    apis: ["src/view/swagger/swagger.js"],
  };

  const options = {
    customCss:
      ".swagger-ui .topbar { display: none } .scheme-container { display: none }",
    customSiteTitle: "Docs",
  };

  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));
};

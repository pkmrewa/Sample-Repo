import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js API",
            version: "1.0.0",
            description: "A simple REST API using Node.js and Express",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"], // Path to API routes
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("📄 Swagger Docs available at http://localhost:5000/api-docs");
};

export default swaggerDocs;

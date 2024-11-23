import swaggerJsDoc from 'swagger-jsdoc';
import { Express } from 'express';
import path from 'path';
const apiDocsPath = [`docs/*.js`];
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - ECOMMERCE',
      version: '1.0.0',
      description: 'api for ECOMMERCE',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    externalDocs: {
      description: 'thông tin về api tại đây',
      url: 'http://localhost:5173',
    },
  },
  apis: apiDocsPath,
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
const setupSwagger = (app: Express) => {
  app.set('views', path.join(__dirname, '../../views'));
  app.set('view engine', 'ejs');
  app.get('/docs', (req, res) => {
    res.render('swagger-ui', {
      apiUrl: '/swagger.json',
    });
  });
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
  });
};
export default setupSwagger;

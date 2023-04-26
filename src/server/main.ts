import express from "express";
import ViteExpress from "vite-express";
const PORT = 3000;
const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port ... " + PORT)
);



// import express, {
//   Request,
//   Response,
//   NextFunction,
//   RequestHandler,
// } from 'express';

//  const PORT = 6001;
//   const app = express();

// app.use(express.json());

// app.get('/api', (req: Request, res: Response) => {
//     try {
//       const mockData = {
//         firstName: 'Adeesh',
//         lastName: 'Sharma'
//       };

//       res.json(mockData);
//     } catch (err) {
//       res.status(500).json({error: err.message });
//     }
//   });

// //Global error handler
// app.use(
//   '/',
//   (err: any, req: Request, res: Response, next: NextFunction) => {
//     const defaultErr = {
//       log: 'Express error handler caught unknown middleware error',
//       status: 400,
//       message: { err: 'An error occurred' },
//     };
//     const errorObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
//   }
// );

// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));

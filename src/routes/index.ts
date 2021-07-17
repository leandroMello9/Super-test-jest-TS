import express from "express";
import userRoutes from "./User";
const routes = express();
routes.use('/user',userRoutes);

export default routes;

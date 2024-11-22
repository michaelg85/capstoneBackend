import express from "express";
import movieController from "../controllers/movieController.mjs";

const router = express.Router();

router
    .route('/')
    .post(movieCTRL.createMovie)
    .get(movieCTRL.getAllMovies);

router
    .route('/:id')
    .get(movieCTRL.getOneMovie)
    .put(movieCTRL.updateOneMovie)
    .delete(movieCTRL.deleteOneMovie)

    
export default router;

import express from "express";
import movieCTRL from "../controllers/movieController.mjs";

const router = express.Router();

router
    .route('/')
    .post(movieCTRL.createMovie)
    .get(movieCTRL.getAllMovies);

router
    .route('/:id')
    .get(movieCTRL.getOneMovie)
    .put(movieCTRL.updateOneMovie)
    .delete(movieCTRL.deleteOneMovie);

// router
//     .route('/api/movies')
//     .get(movieCTRL.getAllMovies);

router
    .route('/seed')
    .get(movieCTRL.seedDB);

export default router;

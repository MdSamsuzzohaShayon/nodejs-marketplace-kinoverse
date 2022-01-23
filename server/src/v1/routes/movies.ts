import { Router } from 'express';
import Movie from '../controllers/MovieController'

const router = Router();

router.get('/get-all-movies',  Movie.routes.get);
router.get('/get-movie/:id', Movie.routes.getOne);
router.get('/get-movie-by-user/:id', Movie.routes.getByUserId);
router.post('/create-movie',  Movie.routes.create);
router.put('/update-movie/:id',  Movie.routes.update);
router.delete('/delete-movie/:id',  Movie.routes.delete);
router.post('/file',  Movie.routes.file);

export default router;
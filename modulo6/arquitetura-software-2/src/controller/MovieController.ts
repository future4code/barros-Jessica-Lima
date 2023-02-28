import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
    async createMovie(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, duration_in_minutes, year_of_release } = req.body

            const movieBusiness = new MovieBusiness()
            await movieBusiness.createMovie({ title, description, duration_in_minutes, year_of_release })

            res.status(201).send({ message: "Filme cadastrado com sucesso!" });

        } catch (err: any) {
            res.status(400).send(err.message);

        }
    }

    // --------------- GET ALL MOVIES --------------------
    async getAllMovies(req: Request, res: Response): Promise<void> {
        try {
            const movies = await new MovieBusiness().getAllMovies()

            res.status(201).send({ message: movies });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}
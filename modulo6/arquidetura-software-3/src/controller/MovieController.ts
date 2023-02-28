import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/MovieDTO";

export class MovieController {

    async createMovie(req: Request, res: Response) {
        try {

            const { title, description, duration_in_minutes, year_of_release} = req.body
            
            const input: MovieInputDTO = { 
                title, 
                description, 
                duration_in_minutes, 
                year_of_release 
            }

            const movieBusiness = new MovieBusiness()
            await movieBusiness.createMovie(input)

            res.status(201).send({ message: "Filme cadastrado com sucesso!" });

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage);

        }
    }

    // --------------- GET ALL MOVIES --------------------
    async getAllMovies(req: Request, res: Response) {
        try {
            const movies = await new MovieBusiness().getAllMovies()

            res.status(201).send({ message: movies });
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
        }
    }
}
import { CustomError } from "../error/CustomError";
import { InsertMovieInputDTO } from "../model/MovieDTO";
import { Movie } from "../model/Movies";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = 'LABEFLIX_MOVIE';

    async createMovie(movie: InsertMovieInputDTO): Promise<void> {
        await MovieDatabase.connection
            .insert(movie).into(MovieDatabase.TABLE_NAME)
    }

    // --------------- GET ALL MOVIES --------------------
    getAllMovies = async () => {
        try {
            const movies: Movie[] = []

            const result = await BaseDatabase.connection()
                .select('*')
                .from('LABEFLIX_MOVIE')

            for (let movie of result) {
                movies.push(movie);
            }

            return movies

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
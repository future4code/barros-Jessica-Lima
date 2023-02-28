import { Movie } from "../types/Movies";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = 'LABEFLIX_MOVIE';

    async createMovie({ id, title, description, duration_in_minutes, year_of_release }: any): Promise<void> {
        await MovieDatabase.connection
            .insert({
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release
            }).into(MovieDatabase.TABLE_NAME)
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

        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}
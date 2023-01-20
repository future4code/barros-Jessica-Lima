import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/MovieDatabase'

export class MovieBusiness {

    async createMovie({ title, description, duration_in_minutes, year_of_release }: any): Promise<void> {

        if (!title || !description || !duration_in_minutes || !year_of_release) {
            throw new Error('Body inválido')
        }
        const id = generateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.createMovie({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }

    // --------------- GET ALL MOVIES --------------------
    getAllMovies = async () => {
        const movieDatabase = new MovieDatabase()
        return await movieDatabase.getAllMovies()
    }
}
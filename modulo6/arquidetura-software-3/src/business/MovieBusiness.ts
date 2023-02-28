import { MovieDatabase } from '../data/MovieDatabase'
import { CustomError } from '../error/CustomError'
import { InvalidDuration, InvalidTitle } from '../error/MovieError'
import { MovieInputDTO } from '../model/MovieDTO'
import { IdGenerator } from '../services/IdGenerator'

export class MovieBusiness {

    async createMovie(input: MovieInputDTO): Promise<void> {
        
        const { title, description, duration_in_minutes, year_of_release } = input
        
        if (!title || !description || !duration_in_minutes || !year_of_release) {
            throw new CustomError(400, 'Body inválido')
        }

        if(title.length <= 4){ throw new InvalidTitle()}
        if(duration_in_minutes < 30){ throw new InvalidDuration()}

        const id = IdGenerator()

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
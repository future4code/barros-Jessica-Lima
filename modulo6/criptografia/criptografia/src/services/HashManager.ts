import * as bcrypt from 'bcryptjs'

export class HashManager {

    public generateHash = async (plainText: string): Promise<string> => {

        //cost
        const cost:number = Number(process.env.BCRYPT_COST)
        //salt
        const salt:string = await bcrypt.genSalt(cost)
        //hash
        const hash:string = await bcrypt.hash(plainText,salt)

        return hash
    }

    public compareHash = async(plainText:string, hashText:string):Promise<boolean>=>{
        const result = await bcrypt.compare(plainText, hashText)
        return result

    }
}
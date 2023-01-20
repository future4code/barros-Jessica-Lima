import { Knex } from "knex";

export abstract class BaseDatabase{

    protected static connection:Knex

    constructor(protected connection:Knex){
        this.connection = connection;
    }
}
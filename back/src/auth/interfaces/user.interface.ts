import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
    id: string;
    name: string;
    password: string;
    email: string;
}

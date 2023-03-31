import { ObjectId } from "../../depts.ts";

export interface User{
    _id: ObjectId;
    name: string;
    email: string;
}
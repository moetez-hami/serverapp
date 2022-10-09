import { Server } from "http";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: string;
    status:string;
    reason:string;
    developperMessage: string;
    data:{servers?: Server[], server?: Server };
}
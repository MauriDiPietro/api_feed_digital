import { HttpResponse } from "../utils/http.response"
const httpResponse = new HttpResponse();

export const errorHandler = (error: any) => {
    console.log( `error ${error.message}`) 
    return httpResponse.ServerError(error?.message)
}

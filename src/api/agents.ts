import axios, {AxiosResponse} from "axios";
import { IValue } from "../interfaces/IValue";

axios.defaults.baseURL = "https://localhost:5001/api/value";

const responsebody: any = (response: AxiosResponse) => response.data;

const request: any = {
    get: (url: string) => axios.get(url).then(responsebody),
    post: (url: string, body: {}) => axios.post(url, body).then(responsebody),
    put: (url: string, body: {}) => axios.put(url, body).then(responsebody),
    del: (url: string, body:{}) => axios.delete(url).then(responsebody)
};

export const Values : any = {
    list: () : Promise<IValue[]> => request.get("/list"),
    details: (id: string) => request.get(`/${id}`)
}

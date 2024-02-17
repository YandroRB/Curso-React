import { OPTIONS, URL_PREFIX_ENDPOINT } from "../../constant";


export async function getMovieList(endpoint){
    const response = await fetch(URL_PREFIX_ENDPOINT+endpoint, OPTIONS)
    if(!response.ok) throw new Error(response.status);
    const {results}=await response.json();
    return results;
}
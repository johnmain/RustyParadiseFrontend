export async function get(request){
    let data;
    const RPNEWS_URL = import.meta.env.VITE_BACKEND_URL + "rp-news-items?_sort=id:DESC&_limit=3&category.name=News";
    const response = await fetch(RPNEWS_URL);
    data = await response.json();
    return{body:data}
 }
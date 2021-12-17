export async function get(request){
    let data;
    const RPNEWS_URL = import.meta.env.VITE_BACKEND_URL + "rp-news-items?sort=id:desc&pagination[pageSize]=3&populate=category&filters[category][name][$eq]=Events";
    const response = await fetch(RPNEWS_URL);
    data = await response.json();
    return{body:data}
 }
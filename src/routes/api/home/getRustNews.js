  import xml2json from 'xml2json'
  export async function get(request){
    const RSS_URL = 'https://rust.facepunch.com/rss/news';
    let data;
    const response = await fetch(RSS_URL);
    data = await response.text();
    let json =  JSON.parse(xml2json.toJson(data));
    let arr = json.rss.channel.item;
    return{body: arr.slice(0, 3)}
  }


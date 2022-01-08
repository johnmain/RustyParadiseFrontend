import { marked } from "marked";
export async function getRustNews(){
  let data;
  const response = await fetch(import.meta.env.VITE_ENDPOINT_URL +'home/getRustNews');
  data = await response.json();
  const news = data.map((data) =>{
    return{
      category: '',
      title: data.title,
      post: data.description,
      link: data.link,
      createdAt: new Date(data.pubDate.split(',')[1].substring(0, data.pubDate.split(',')[1].length - 1)).toLocaleString()
    }
  });
  return news;
}

export async function getRPNews(){
  let data;
  const response = await fetch(import.meta.env.VITE_ENDPOINT_URL +'home/getRPNews');
  data = await response.json();
  console.log(data);
  const news = data.map((data) =>{
    return{
      category: data.category.name,
      title: data.title,
      post: marked.parse(data.post),
      createdAt: new Date(data.created_at).toLocaleString()
    }
  });
  
  return news;
}

export async function getRPEvents(){
  let data;
  const response = await fetch(import.meta.env.VITE_ENDPOINT_URL +'home/getRPEvents');
  data = await response.json();
  const news = data.data.map((data) =>{
    return{
      category: data.attributes.category.data.name,
      title: data.attributes.title,
      post: data.attributes.post,
      createdAt: new Date(data.attributes.createdAt).toLocaleString()
    }
  });
  return news;
}

export async function getRPVIPS(){
  let vips = [
    {user:"Tofu"},
    {user:"RenewedPath"},
    {user:"Jayren"},
    
  ]
  return vips;
}


  

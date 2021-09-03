export default async function blogGet(){
    let res = await fetch('http://localhost:3000/blogs');
    let json = await res.json();
    return json;
}
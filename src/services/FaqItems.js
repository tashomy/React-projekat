export default async function getFaqItems() {
    let res = await fetch('http://localhost:8000/faq-items');
    let json = await res.json();
    return json;
}
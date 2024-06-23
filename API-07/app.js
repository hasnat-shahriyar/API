// Define the URL of the API you want to fetch data from
// const apiUrl = 'https://openapi.programming-hero.com/api/ai/tools';

const loadTools = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch (url);
    const data = await res.json();
    displayTools (data.data.tools[0].name);
}

const displayTools = Tools => {
    console.log (Tools);
}

loadTools();
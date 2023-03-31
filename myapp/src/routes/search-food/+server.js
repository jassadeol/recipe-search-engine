
// import {comments} from '$lib/comments.js';
// import {json} from '@sveltejs/kit'

// export const load = async (loadEvent) => {
//     const {fetch} = loadEvent;
//     const title = 'list of available recipes';
//     const response = await fetch('https//dummyjson.com/test');
//     const products = await response.json();
//     return {
//         title,
//         products
//     };
// };

//export function GET() {
//    return new Response("Hello from demo-api");
//}
// const requestURL = "https://api/spooncular.com/recipes/716429/information?apiKey=089b13c07e3542d2be62c27a64dd265c&includeNutrition=true";
// const url = "https://google.com";
// export function GET(requestUrl) {
//     const {request} = requestUrl;
//     console.log(request.headers)
//     const {text} = request;
   
//     return json(request);
// }

// export async function load({fetch}) {
//     const res = await fetch ('https://api.agify.io/?name=bella', {
//         method: 'GET', 
//     });

//     const data = await res.json();
//     console.log(data);
//     return {
//         props: {
//             data:data
//         }
//     };
// }
// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 1a. 
// const stringJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);

// 1b.
p1.innerText = jokeJS1.setup;
// OR
// const {setup} = jokeJS1;
// p1.innerText = setup;

// 1c. 
p2.innerText = jokeJS1.punchline;

// Use the Friends API for questions 2 & 3 (Link below)…
// https://friends-quotes-api.herokuapp.com/

// 2a.
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random/`)

// 2b. 
// .then(res => {
//     const friendJS2 = res;
//     // 2c.
//     p3.innerText = friendJS2.data.character;
//     p4.innerText = friendJS2.data.quote;
// })

.then(friendJS2 => {
    p3.innerText = friendJS2.data.character;
    p4.innerText = friendJS2.data.quote;
})

// 2d. 
// .catch(err => {
//     console.log(`rejected`);
//     console.log(err);
// });

.catch(rejected => {
    console.log(rejected);
    console.log(`Try agian`);
});

// 3b.
async function quoteFunc(){
    // 3d.
    try{
        // 3a. 
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random/`);
        // 3c. 
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
    }catch(err){
        // console.log(`rejected`);
        console.log(err);
    }
};
quoteFunc();


// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api

// // 4a. 
// async function tvMazeFunc(){
//     // 4b. 
//     try{
//     const tvmaze = `https://api.tvmaze.com`;
//     const episodeByNumber = `/shows/38963/episodebynumber?season=2&number=8`;
//     const finalEp = tvmaze + episodeByNumber;
//     const res = await axios.get(finalEp);
//     // console.log(res);
//     p7.innerText = res.data.name;

//     } catch(err){
//         // console.log(`rejected`);
//         console.log(err);
//     }
// }
// tvMazeFunc();

// OR
const id = 38963;
const season = 2;
const episode = 8;
const tvMazeURL = `https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`;
async function tvMazeFunc(){ 
    try{
    const show = await axios.get(tvMazeURL);
    p7.innerText = show.data.name;
    } catch(err){
        // console.log(`rejected`);
        console.log(err);
    }
}
tvMazeFunc();

// BONUS...
// 5. 
async function getImg(){
    try{
        const pokeAPIpika = `https://pokeapi.co/api/v2/pokemon/pikachu`;
        const pikachu = await axios.get(pokeAPIpika);
        // console.log(pikachu);
        const image1 = document.createElement(`img`);
        const image2 = document.createElement(`img`);
        image1.src = pikachu.data.sprites.front_default;
        image2.src = pikachu.data.sprites.back_default;
        fourth.after(image1, image2);
    } catch(err){
        console.log(err);
        console.log(`rejected`);
    }
}
getImg();

// 6. 
// const body = document.querySelector(`body`);
// async function getPoster(){
//     try{
//         const omdbAPI = `http://www.omdbapi.com/?i=tt0119822&apikey=a3726122`;
//         const aG = await axios.get(omdbAPI);
//         console.log(aG);
//         console.log(aG.data);
        
//         const image = document.createElement(`img`);
//         image.src = aG.data.Poster;
//         // fourth.after(image);
//         body.append(image);
//     }
//     catch(err){
//         console.log(err);
//     }

// }
// getPoster();   
const apikey = `a3726122`;
const title = `Sleepless in Seattle`;
const omdbURL = `http://www.omdbapi.com/?apikey=${apikey}&t=${title}`;

const body = document.querySelector(`body`);
async function getPoster(){
    try{
        // const omdbAPI = `http://www.omdbapi.com/?i=tt0119822&apikey=a3726122`;
        const response = await axios.get(omdbURL);        
        const image = document.createElement(`img`);
        image.src = response.data.Poster;
        // fourth.after(image);
        body.append(image);
    }
    catch(err){
        console.log(err);
    }
}
getPoster();   

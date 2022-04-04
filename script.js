//1 a. b. 
const jPDinos =["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];
// using spread
function seeDinos(a,b,c) {
    console.log(a);
    console.log(b,c);
}
seeDinos(...jPDinos);
// using REST
function seeDInos(a, ...b) {
    console.log(a);
    console.log(b);
}
seeDInos(...jPDinos);

//2 a, b
const jPCharacters={
alanGrant: "Sam Neill" ,
ellieSattler: "Laura Dern",
ianMalcolm: "Jeff Goldblum"
};
const seeCharacters=({ellieSattler})=>console.log(ellieSattler);
seeCharacters(jPCharacters);

//BONUS
//3 a. b.
const jurassicParkMovies =[
    {one: "Jurassic Park",
    two: "The Lost World: Jurassic Park",
    three: "Jurassic Park III" },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion" 
    }
];

const [{one, two, three}, {four, five, six}] = jurassicParkMovies;

const allMovies = [one, two, three, four, five, six];
console.log(allMovies);
 

seeJPMovies = (y) => {
 console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 console.log(five);
 console.log(six);
}

seeJPMovies(allMovies);

seeJPMovies([{one,two,three}, {four, five,six}]) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
   }
   
   seeJPMovies(jurassicParkMovies);

   //or

   seeJPMovies ({one, two, three}, {four, five, six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
   }
seeJPMovies(...jurassicParkMovies);








/*const [{one, two, three}, {four, five, six}] = jurassicParkMovies;

const seeJPMovies = [one, two, three, four, five, six];
console.log(seeJPMovies);*/
 
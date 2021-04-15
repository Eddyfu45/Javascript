const favoriteArtist = ['Do Kyungsoo','Taylor Swift','Usher'];
const randomEmojis = ['😀', '🤣', '😍', '😛', '🍀', '🔫'];
const eliteCoders = ['Rome Bell', 'Janeth Ledezma Sanchez', 'Daniel Lafontant', 'Dave Molk', 'Cody Christ', 'Sebastian Gayle', 'Ariel DeLaura', 'Jesse Jensen', 'Tyler Ashford'];
const theDevLeague = ['Paula Bauerman', 'Brandon Hall', 'Thomas Duong', 'Paul Knick', 'Evan Woodworth', 'Aaron Prince', 'Brianna Giorgi', 'Maurice Chevez', 'Amanda Posey'];
const mechaPodzilla = ['Joshua Smith', 'Christopher Rachal', 'Avery Wood', 'Charlene Batiste', 'Shawn Dunn', 'Jason Frost', 'Tibor Cseley', 'Stephen Herget'];
const reallyCoolPodName = ['Brian Krabec', 'Jordan Wright', 'Vinny Vilasboa', 'Edward Shultz', 'Omar Munoz', 'Anthony Manganiello', 'Edison Fu', 'Jeremy Wilder'];
const my2DArray = [eliteCoders, theDevLeague, mechaPodzilla, reallyCoolPodName];


for (let i = 0; i < favoriteArtist.length; i++){
    let numArtist = favoriteArtist[i];
    console.log(i + ' ' + favoriteArtist[i] + ' Soundtrack');
}

for (let i = 0; i < eliteCoders.length; i++){
    let eliteOrder = eliteCoders.sort();
    console.log(i + " " + eliteOrder[i]);
}

for (let i = 0; i < reallyCoolPodName; i++){
    let coolBackwards = reallyCoolPodName.reverse();
    console.log(i + " " + coolBackwards[i]);
}
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
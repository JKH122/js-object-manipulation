const sculptureList = require('./data.js'); // import data.js

const sculptureListLength = [];
function pushItem(i){
    const element = sculptureList[i] // <---- comment out this line in your solution!
    sculptureListLength.push({
        name: element.name.length,
        artist: element.artist.length,
        description: element.description.length,
        url: element.url.length,
        alt: element.alt.length
    });
}

for (let i = 0; i < sculptureList.length; i++) { //Loop function through all the data indexes
    pushItem(i);
}

for(let i = 0; i < sculptureListLength.length; i++){
    console.log(sculptureListLength[i])
}



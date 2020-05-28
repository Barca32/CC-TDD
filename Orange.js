/*
randomNumberGen randomly selects a number between 2 and 3, containing two decimal points.
*/
function randomNumberGen(){
    return Math.floor(Math.random() * (300 - 100) + 200) / 100;
}

class Orange{
    constructor(){
        this.diameter = randomNumberGen();
    }
}

module.exports = Orange;
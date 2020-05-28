class OrangeTree {
    /* 
        Trees should start at the age of 0. 
        Trees should start at a height of 0.
    */
    constructor(){
      this.age = 0;
      this.height = 0;
    }

    /*
        Each growing season.
        A tree should age one year.
        A tree should grow 2.5 feet taller until it reaches its maximum height, say 25 feet.
        A tree should bear fruit if it is mature ( at least six years old )
            Between 100 and 300 oranges of fruit. 
        All oranges from the previous year drop off the tree.       
    */
    passGrowingSeason(){
      this.age++;
      this.height += 2.5;
      if (this.height > 25) {
        this.height = 25;
      }
    }

    /*
        Checks if a tree is old enough to bear fruit ( at least 6 years )
    */
    isMature(){
      return (this.age >= 6);
    }

    /*
        Add instance method: hasOrange() which returns whether or not a tree has any oranges on it.
    */
    hasOranges(){
      
    }

    /*
        Harvest an Orange:
        Should pick an orange of a tree and return it.
        Or throw an error if there are no oranges.
    */
    harvestOrange(){

    }

    /*
        Add class method: isDead() which returns whether or not a tree is older than 100 years.
    */


}

module.exports = OrangeTree;
/*
  DON'T EDIT THIS FILE
  Click Run to run the tests.
  Add new tests and .js files.
*/
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
});

jasmine.execute();

/*
Overall instructions, in this script. Model the life of a tree.
1. Pass growing seasons until a tree is mature.
  For each growing season, print out the age and height of a tree.  
2. When a tree is mature, print "Tree matured"
3. For each season a tree is mature, pass growing seasons. For each growing season, print out the age, height, and oranges for each season.
4. Refactor your orange tree class into saplings. When creating a new orange tree, pass in both an age and height.
5. Create a parent class, Fruit Tree. Move the properties from orange tree to fruit tree that make sense. Orange Tree should inheret from Fruit Tree.
6. For each of the growing seasons above, harvest oranges into an array. 
  Also print the total diameters and average diameter for all oranges picked.
*/
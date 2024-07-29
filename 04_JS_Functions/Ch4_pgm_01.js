// Displaying an object's properties on the console

var movie1, movie2;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "The Dark Knight",
  actors: "Christian Bale, Heath Ledger",
  directors: "Christopher Nolan"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");


console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");


var blogPost;

blogPost = {
  title: "Introduction to JavaScript",
  author: "John Doe",
  publishDate: "2024-07-13",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

console.log("Blog Post: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Published on: " + blogPost.publishDate);
console.log("-----------------------------------------");
console.log(blogPost.content);
console.log("-----------------------------------------");




/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */
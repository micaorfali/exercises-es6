/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/
import songs from './songs.js'
console.log('ex 1', songs)

const getTitle = songs.map(item => (item.title.toUpperCase()));
console.log("ex 2", getTitle);

const getSongsBf1975 = songs.filter(item => item.year < 1975);
console.log('ex 3', getSongsBf1975);

const [{firstSong}] = songs;
console.error('ex 4', firstSong); // NO ME SALE

const getHotelCalifornia = songs.find (item => item.title = "Hotel California")
console.log('ex 5', getHotelCalifornia);

// no puedo hacer el 6
console.error('ex 6, no pude hacerlo')

const reformattedArray = songs.map(({ title, artist, year }) => {
    return `
        ${title} - ${artist} (${year})
    `
});
console.warn('ex 7', reformattedArray); // Revisar

const byTheBeatles = songs.filter (item=> item.artist == "The Beatles")
console.warn('ex 8', byTheBeatles);  // Le falta el destructuring

// el 9 y 10 no lo hago pq tiene reduce y no llego con el tiempo a ver este tema

//const longestTitle = songs.find( item => item.title ? (i => i.length) )
//console.log('ex 11', longestTitle);
// Math.min(...arr.map(i => i.length)) ???? 


// el 11, 12 y 13 no se
// necesito repasar template literals, rest operator y destructuring
// reduce, some y every tambien

console.log('ex 17', `"The Beatles released Let It Be in 1970."`)

const everyArtist = songs.map(item => item.artist)
console.log('ex 18', everyArtist);
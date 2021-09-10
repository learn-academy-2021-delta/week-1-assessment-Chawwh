// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
//console.log(cohort.length)

// a) Your answer: My guess is 10. .length will return the length of the string we have here. My guess comes from adding the number of letters in 'Delta', the space, and the number of numbers in '2021'. I'm still not entirely sure if I am supposed to add the space but it's a gut feeling that I do.
// b) Verify and explain: I WAS RIGHT!!!! Alright so, .length does indeed return the length of the string including the space because it is still apart of the string itself. Also just for bonus points: The first character read by .length counts as 1, not 0! 


// --------------------2) What will this log?

var greeting = "Hello World!"
//console.log(greeting[3])

// a) Your answer: My guess here is the console will log the second 'l' in 'Hello' because it is at the index of 3 in the string provided.
// b) Verify and explain: HAH! LOOK AT ME GOOOOOO!! So I tested both the indexes of [2] and [1] as well just to make sure it was actually the second 'l' and not the first one. To add to my last bonus: An Index starts at 0! 


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
//console.log(languages[index])

// a) Your answer: My guess on this one is "Ruby". It's located in [1] of this array. 
// b) Verify and explain: Once again, I am correct. The variable index is set to 1 so by calling it inside the brackets it's the same as calling just 1. Var is really just assigning nicknames to whatever we tell it to. 


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: WOW. You got me this time... this code resulted in an error. I was totally on a roll thinking I know everything and am the smartest version of myself today but it completely spaced my mind that .toUpperCase() only works on specific data types. T-T //crying face because I didn't take a minute to remember how sensitive .toUpperCase() is. Hmph.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer: You guys got me feeling really insecure after that last one. So I start by seeing .length added to the end making me thing we're getting a number for this log. BUT I ALSO SEE TYPEOF INFRONT OF THIS! Context clues tell me we're getting the type of dataTypes.length. SO IF dataTypes.length will give me a number that means adding typeof will literally give me "number"! Alrighty, My guess is 'number' before I give myself a headache.
// b) Verify and explain: YES!!!!!!! I feel a little better after that one! That was challenging! I'd like to thank everyone that has help me get to this point in my life. Thank you!

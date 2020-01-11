//write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t
// const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn"]

// const myFavoriteFoods = (array) => {
//     let newArray = []
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(element.startsWith("a") || element.startsWith("t")){
//             newArray.push(element)
//         }

//     }
//     return newArray
// }

// console.log(myFavoriteFoods(foodArray))


//write a function that accepts an array. If the array contains more than one exclamation point, and the array is more than three items long, return true, otherwise return false.

// const arrayOne = [ "*", "&", "!", "@", "%", "!"]
// const arrayTwo = [ "*", "&", "!", "@", "%"]
// const arrayThree = ["!", "!", "!"]


// const truthFinder = (array) => {
//     let answer = false
//     let counter = 0
//     for (const item of array) {
//         if (item === "!" && array.length > 3)
//         {
//             counter ++
//         }
//     }
//     if(counter > 1){
//         answer = true
//     }
//     return answer
// }

// console.log(truthFinder(arrayOne))
// console.log(truthFinder(arrayTwo))
// console.log(truthFinder(arrayThree))



//Declare three variables (eyeColor, hairColor, height). If eyeColor is blue and hairColor is red and height is 6ft, console log the string template `red hair, blue eyes, and 6ft tall, otherwise console log "not a match"

// const eyeColor = "green"
// const hairColor = "purple"
// const height = "2ft"

// if (eyeColor === "blue" && hairColor === "red" && height === "6ft"){
//     console.log(`${hairColor} hair, ${eyeColor} eyes, ${height} tall`)

// }
// else{
//     console.log("not a match")
// }



function songDecoder(song){
  let songArray = song.split("WUB")
  let indexArray = []
    console.log(songArray)
   songArray.forEach((element, index) => {
      if (element.length === 0)
      {
        indexArray.push(index)
      }
  })

  for (var i = indexArray.length -1; i >= 0; i--) 
  songArray.splice(indexArray[i], 1);

  let properlySpacedString = songArray.join(" ")

  return properlySpacedString

  }

  const slickSong = (song) => {
      return song.split("WUB").filter(Boolean).join(' ')
  }
  console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"),"compared to WE ARE THE CHAMPIONS MY FRIEND")
//   console.log(songDecoder("AWUBBWUBC"))
  console.log(slickSong("AWUBWUBWUBBWUBWUBWUBC"))
//   console.log(songDecoder("WUBAWUBBWUBCWUB"))


const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"

function newTacoObject (inputObject, newID) {
  var newTaco = {id:newID, name:'changed', price:inputObject.price, about:inputObject.about}

  return newTaco
}


// console.log(tacos)
// tacos.push(newTacoObject(taco, 6))
// console.log(tacos)


// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)

const tacoObjHtml = (inputObject) => {
  return(
`    <div>
      <h1>${inputObject.name} Taco</h1>
      <p>Price: ${inputObject.price}</p>
      <p>About: ${inputObject.about}</p>
    </div>`
  )
}

// console.log(tacoObjHtml(taco))


// write a function that takes an tacoOBJ and return formatted price with

// .00 

function formatPrice (inputObject) {
  var price = inputObject.price.toFixed(2)
  return price
}

// console.log(formatPrice(taco1))



// create a new array where all of the prices is formatted with .00

function newPriceArray(inputArray) {
  //deep clone array to prevent original from being changed
  var newArray = JSON.parse(JSON.stringify(inputArray))
  newArray.map ((object) => {
    object.price = formatPrice(object)
    object.name = "changed"
    return object
  })

  
return newArray
}

// console.log(tacos)
// console.log(newPriceArray(tacos))
// console.log(tacos)



// write a function that takes an array and logs each item in the array

// hint forEach

function logEachItem(inputArray) {
  inputArray.forEach(printItem)

  function printItem(item, index){
    // console.log(`item ${index}`)
    console.log(item)
  }

}

// logEachItem(tacos)

// use the find method to return the object with id:1

function findItem (inputArray,inputID){
  return inputArray.find(i => i.id == inputID)
}

// console.log(findItem(tacos))

// return a new array with all prices greater than 19
function pricesGreaterThan (inputArray){
  var newArray = inputArray.filter(i => i.price > 19)

  return newArray
}

// console.log(pricesGreaterThan(tacos))
// console.log(tacos)

// return a new array with a 'about' key where it is a combo of
// name price and about

function newAboutArray(inputArray) {
  //deep clone array to prevent original from being changed
  var newArray = []
  inputArray.map ((object) => {
    let about =  {}
    about["about"] = (`Name: ${object.name}, Price: ${object.price}, About: ${object.about}`)
    newArray.push(about)
    return 
  })


return newArray
}

// console.log(tacos)
// console.log(newAboutArray(tacos))
// console.log(tacos)


///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)

// READ (array of obj to array of html) 
const ReadArray = (inputArray) => {
  const renderObjects = () =>{
      return inputArray.map( object => {
          return (
          `<div>
            <h1>${object.name} Taco</h1>
            <p>Price: ${object.price}</p>
            <p>About: ${object.about}</p>
          </div>`
          )
      })
  }
  return(`
      <div>
          <h1>Tacos</h1>
          ${renderObjects()}
      </div>` 
  )
}

// console.log(ReadArray(tacos))


// Update (update a taco) 
function updateTaco(inputArray, inputID, updatedName, updatedPrice, updatedAbout){
  const object = inputArray.find((i) => i.id == inputID)

  object.name = updatedName
  object.price = updatedPrice
  object.about = updatedAbout

  return 
}

// console.log(tacos)
// updateTaco(tacos, 2, "Pizza", 500, "pizza?")
// console.log(tacos)

// Remove (delete a taco) 
function deleteTaco(inputArray, inputID){
  var index = inputArray.findIndex(i => i.id == inputID)
  inputArray.splice(index, 1)

  return
}

// console.log(tacos)
// deleteTaco(tacos, 3)
// console.log(tacos)



// Create (add a taco) 
function newTaco(inputArray, inputID, newName, newPrice, newAbout){
  
  return inputArray.push({id: inputID, name: newName, price: newPrice, about: newAbout})

  return 
}

// console.log(tacos)
// newTaco(tacos, 70, "Broccoli", 50000, "disgusting")
// console.log(tacos)

// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own

Notes from FSO Part 1

props: passing data to components

EXAMPLE:
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}. you are {props.age} years old</p>
    </div>
  )
}

Now the function defining the component has a parameter of props. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines.

The props are defined as follows:

const App = () => {
  const name = 'Austin';
  const age = 32;
return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Dan' age={25+5} />
      <Hello name={name} age={age} /> 
      // this would result in name = Austin and age = 32;
      //these variables are being changed when we specify their props
      
    </div>
  )
}


There can be an arbitrary number of props and their values can be "hard-coded" strings or the results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.



The props sent by the component App are the values of the variables, the result of the evaluation of the sum expression and a regular string.






Node - a js runtime environment

we can run files in the command line by using "node name_of_file.js"

array methods

const t = [1, 2, 3]

Map Method 


const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

-map returns a new array 

-Map can also transform the array into something completely different:
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
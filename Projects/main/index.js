// document.getElementById("test").innerHTML = 'Updated Heading';

// // Set a custom attribute 'data-custom' to 'hello' using setAttribute
// document.getElementById("test").setAttribute('data-custom', 'hello');

// // Set the class attribute to 'highlight' using className property
// document.getElementById("test").className = 'highlight';

// // Set a custom data attribute using dataset
// document.getElementById("test").dataset.info = 'extra information';

// // Log the element to the console to see the changes
// console.log(document.getElementById("test"));

// 1--> element.attribute
// const change=document.getElementById("image")
// change.src="image2.jpg"

// function getInput()
// {
//     var userinput=document.getElementById("place")
// }
// var from = document.getElementById("place")

// from.placeholder=userinput

// function get()
// {
//     var change_name = document.getElementById("test");

// }

// function say_hello(){
//     var ok="I will say hello on click"
//     document.getElementById("test").innerHTML=ok
// }

// function change_value(){
//     var store_value= document.getElementById('change').value 
//     // alert(store_value)
//     var string="Ur name is " + store_value
//     document.getElementById('changed').innerHTML=string
// //     if (backgroundColor=black)
// //     document.body.style.backgroundColor = "white"
// // else
// // document.body.style.backgroundColor = "black"

// }

//lexical scoping
// function f1()
// {
//     const greet="hello"
//     function f2()
//     {
// console.log(greet)
//     }
//     f2()
// }
// f1()

//closers
function G()
{
    const msg="hiiiiiiii"
    console.log(msg)
    return function(){
        console.log(msg)
    }

}
G()
const hub=G()
hub()
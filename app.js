function display(){
    alert("Helo World")
}

// let element=document.getElementById('mydark');
// // element = element.className;
// element.style.color='blue';
// element.innerHTML='<b>Enable Light Mode</b>';
// console.log(element);
// console.log(element.innerHTML);


// document.getElementById("mydark").innerHTML="Enable Light Mode";

function darkmode(){
    document.body.style.backgroundColor=" black";
    document.body.style.color="white";

   let a= document.getElementById('home');
   a.style.color='white';
   a.style.backgroundColor="black";

   let b= document.getElementById('news');
   b.style.color='white';
   b.style.backgroundColor="black";

   let c= document.getElementById('contact');
   c.style.color='white';
   c.style.backgroundColor="black";
}

function lightmode(){
    document.body.style.backgroundColor="white";
    document.body.style.color="black";

    let d= document.getElementById('home');
    d.style.color='black';
    d.style.backgroundColor="white";

    let e= document.getElementById('news');
    e.style.color='black';
    e.style.backgroundColor="white";

    let f= document.getElementById('contact');
    f.style.color='black';
    f.style.backgroundColor="white";
}


// // page reload alert
// var MyFunction = function(){

//     var _ = {
//         Init: function(){
//             _.Config.foo = "hello world";
//         },
//         Config:{
//             foo:null
//         },
//         UI:{
//             Display:{
//                 ShowAlert:function(){
//                     alert(_.Config.foo);
//                 },
//             }
//         }
//     }

//     return {
//         Init: _.Init,
//         ShowAlert: _.UI.Display.ShowAlert
//     };
// }();

// MyFunction.Init();
// MyFunction.ShowAlert();


// tab open alert
 











// sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// //console.log("Hello, World!");
// //var a;
// // a=10;//global scope
// // console.log(a);
// // let b=20;//block scope
// // console.log(b);
// // const c=30;//block scope
// // console.log(c);
// // /* in js we cant redeclare values for let and const,in var we can redecalre values */
// // var a=10;
// // var str="Welcome to JavaScript";
// // var str="nandu"//''//''//string
// // var  bool=true;
// // var un;//undefined
// // var nu = null;
// // var big=123456789n;
// // var symbol=Symbol("li");
// // console.log(typeof a);
// // console.log(typeof str);
// // console.log(typeof bool);
// // console.log(typeof un);
// // console.log(typeof nu);
// // console.log(typeof big);
// // console.log(typeof symbol); 
// // let b=25; // This will throw an error
// // const c=35; // This will also throw an error
// //var is globalscope ,let and cont are blockscope
// var a=10;
// var b="20";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);   
// //numbers are alllowed in js inside quotes also
// //Relational Operators(>,<,>=,<=,==,===,!=,!==)
// var a=10;

// var b=20;
// console.log(a>b);//false//checks value
// console.log(a<b);//true//checks value
// console.log(a>=b);//false//checks value
// console.log(a<=b);//true//checks value
// console.log(a==b);//false//checks only value
// console.log(a!=b);//true//checks only value
// console.log(a===b);//false //checks value and datatype
// console.log(a!==b);//true//checks value and datatype
// //Logical Operators(&&,||,!)
// x=true;
// y=false;
// console.log(x&&y);
// console.log(x||y);
// console.log(!x);
// var arr=[10,20,30,40,50];//array
// console.log(arr);
// console.log(typeof(arr));
// var obj={//object
//     name:"nandu",
//     age:22
// };
// console.log(obj);
// console.log(typeof(obj));
// //looping statements
// //for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// //while loop
// //while condition
// //statement
// //}
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// //do while
//     i=1;
//     do{
//         console.log("do while");
//     }while(i===0);
//     //even number
//     for(let i=1;i<=10;i++){
//         if(i%2===0) console.log(i);
//     }
//     i=9;
//     if(i%2===0) console.log("odd");
//     let mark=70;
//     if(mark>=90) console.log("A grade");
//     else if(mark>=80) console.log("B grade");
//     else if(mark>=70) console.log("C grade");
//     else if(mark>=60) console.log("D grade");
//     else console.log("F grade");
//     //switch
//     let day=6;
//     switch(day){
//         case 1:{console.log("sunday");
//         break;
//     }
//         case 2:{console.log("monday");
//         break;
//     }
//         case 3:{console.log("tuesday");
//         break;
//     }
//         case 4:{console.log("wednesday");
//         break;
//     }
//         case 5:{console.log("thursday");
//         break;
//     }
//         case 6:{console.log("friday");
//         break;
//     }
//         case 7:{console.log("saturday");
//         break;
//     }
//         default:{console.log("invalid day");
//             break;
//         }
    //     mark=30;
    //     let result=(mark>=90)?"O grade":(mark>=80)?"A grade":(mark>=70)?"B grade":(mark>=60)?"C grade":"F grade";   
    //     console.log(result);
    //     function add(){
    //         console.log(10+20);
    //     }
    //     add();
    //    var add=()=>{
    //         console.log(30+40);
    //     }
    //     add();
    //     var add=()=>{
    //         console.log(89+90);
    //     }   
    //     add();
    //     function sum(a,b){
    //         console.log(a+b);
    //     }
    //     sum(50,60);
    //    function sum(a,b){
    //         console.log(a+b);
    //     }
    //     var sum=(a,b)=>{    
    //         console.log(a+b);
    //     }
    //     sum(70,80);
    //     console.log(z);
    //     var z;
    //     add(10,20);
    //     function add(a,b){
    //         c=10;
    //         console.log(a+b+c);
    //     }   
        // var add=(a,b,callback)=>{
        //     var result=a+b;
        //     callback(result);
        // }   
        // add(10,20,(res)=>{console.log(res);
        // });
        // var demo=()=>{
        //     console.log("im callback");
        // }   
        // var main=(nandu)=>{
        //     nandu()
        // }   
        // main(demo);
        // var promise= new Promise((resolve,reject)=>{
        //     var success=true;
        //     if(success){
        //         resolve("promise resolved");
        //     }
        //     else{
        //         reject("promise rejected");
        //     }   
        // })
        // promise.then((res)=>console.log(res))
        // .catch((err)=>console.log(err))
        // var promise= new Promise((resolve,reject)=>{
        //     var success=true;
        //     if(success){
        //         setTimeout(()=>{
        //         resolve("promise resolved")
        //     },5000)
        //   }

        //     else{
        //         reject("promise rejected");
        //     }   
        // })
        // promise.then((res)=>console.log(res))
        // .catch((err)=>console.log(err))
        // const getData()=>{
        //     return fetch('https://jsonplaceholder.typicode.com/posts')
        // }
        // getData().then((res)=>res.json())
        // .then((data)=>console.log(data))
        // .catch((err)=>console.log(err))
        /*Async Await async is used to convert synchronous to asynchronous synchronous cant wait for another line*/
        const getData=async()=>{
            try{
                var res=await fetch('https://jsonplaceholder.typicode.com/posts');
                var data=await res.json();
                console.log(data);
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
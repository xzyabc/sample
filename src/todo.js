
class StaticMethodCall {
    static staticMethod() {
        return 'Static method has been called?';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}

module.exports = StaticMethodCall

// var $ = require('jquery')
// import {TweenMax} from "gsap";
// import axios from 'axios';

// export default class ToDo{

//     constructor(target){
//        this.target = target;
//         this.list = [];
//         this.init();
//     }
    
//     init(){
//         document.getElementById("addBtn");
//         addEventListener('click', this.clickHandler.bind(this))

//         //var obj = document.getElementById("todoList");
//         //alert($('#todoList'))
//         // TweenMax.to($('#todoList'), 1, {margin:'300'});
//         // //https://abstract.jp/flyer/wp-json/posts/?page=1&filter%5Bposts_per_page%5D=14&r=88
//         axios.get('https://abstract.jp/flyer/wp-json/posts/?page=1&filter%5Bposts_per_page%5D=14&r=88')
        
//         .then(function (response) {
//             console.log(JSON.parse(response));
//         })
        

//     }

//     clickHandler(){
//         const input = document.getElementById("addValue");
//         if(!input.value){
//             return
//         }
//         this.addListItem(input.value)
//         input.value = ''

//         TweenMax.to($('#todoList'), 1, {margin:400*Math.random()});
//     }

//     addListItem(item) {
//         this.list.push(item)
//         this.render()
//     }

//     render(){
//         let html = ''
//         let len = this.list.length;

//         for(let i=0; i < len; i++){
//             html += `<li>${this.list[i]}</li>`;
//         }

//         //this.list.forEach(e=>html+= `<li>${e}</li>`)

//          var $t = this.target

//          console.log(this.target);

//          $('#todoList').html(html);

//          console.log( $('#todoList'));

//     }
// }
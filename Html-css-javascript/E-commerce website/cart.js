const product=[
    {
        id:1,
        image :'img/camera.jpg',
        name :'dslr camera 1080*720px',
        price :'$500'
    },
    {
        id:2,
        image:'img/phone.jpg',
        name:'iphone 13 pro',
        price:'$900'
    },
    {
        id:3,
        image:'img/earbuds.jpg',
        name:'ear buds',
        price:'$10'
    },
    {
        id:4,
        image:'img/laptop.jpg',
        name:'laptop hp intel 7',
        price:'$1000'
    },
    {
        id:5,
        image:'img/mouse.jpg',
        name:'mouse',
        price:'$10'
    },{
        id:6,
        image:'img/cpu.jpg',
        name:'cpu hp',
        price:'$75'
    },
    {
        id:7,
        image:'img/speaker.jpg',
        name:'speaker ',
        price:'$50'
    },
    {
        id:8,
        image:'img/watch.jpg',
        name:'watch',
        price:'$25'
    }
]
const categories=[...new Set(product.map((item)=>
    {return item}))]

let cart=document.getElementById('root');
cart.innerHTML=categories.map((item)=>
{
    var {image,name,price}=item;
    return(
        `<div class="box">
            <div class="img">
                <img src=${image}></img>
           </div>
            <div class="left">
                <p class="p">${name}</p>
                <h class="h">${price}</h>
                <button>Add to Cart</button>
            </div>
        </div>`
    )
}).join('')
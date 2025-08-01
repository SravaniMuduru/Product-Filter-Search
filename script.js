
let products = {
    data:[
        {
    productsName: "Regular white T-shirt",
    category: "Topwear",
    price: "30",
    image: "Assets/white-t-shirt.jpg",
    },
    {
        productsName: "Beige short skirt",
    category: "Bottomwear",
    price: "49",
    image: "Assets/short-skirt.jpg",
    },
    {
        productsName: "Sporty smartWatch",
    category: "watch",
    price: "99",
    image: "Assets/sporty-smartwatch.jpg",
    },
    {
        productsName: "Basic knitted Top",
    category: "Topwear",
    price: "29",
    image: "Assets/knitted-top.jpg",
    },
    {
        productsName: "Black Leather Jacket",
    category: "Jacket",
    price: "129",
    image: "Assets/Black-leather-jacket.jpg",
    },
    {
    productsName: "Stylish Pink Trousers",
    category: "Bottomwear",
    price: "89",
    image: "Assets/pink-trousers.jpg",
    },
    {
        productsName: "Brown Mens Jacket",
        category: "Jacket",
        price: "189",
        image: "Assets/brownjacket.jpg",
    },
    {
        productsName: "Comfy Gray Pants",
    category: "Bottomwear",
    price: "49",
    image: "Assets/Comfy-gray-pants.jpg",
    },
],
};
for(let i of products.data) {
    //create card
    let card = document.createElement("div");
    //card should have category and should hidden initially
    card.classList.add("card",i.category, "hide");
    //image div
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image=document.createElement("img")
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container=document.createElement("div");
    container.classList.add("container");
    //product name
    let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productsName.toUpperCase();
    container.appendChild(name);
    //price
    let price=document.createElement("h6");
    price.innerText= "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
//parameter passed from button
function filterProduct(value){
    //Button class code
    let buttons=document.querySelectorAll(".button-value");
    buttons.forEach(button =>{
        //check if values equals innerText
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add("active");
        } else {
            button.classList.remove("active");

        }
    });
//select all cards
let elements=document.querySelectorAll(".card");
//loop through all cards
elements.forEach((element) => {
    //display all cards on 'all' button click
    if(value == "all"){
        element.classList.remove("hide");
    }
    else{
        //check if elements contaiin category class
        if(element.classList.contains(value)){
            //display based on category
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
    }
});

}

document.getElementById("search").addEventListener("click", () => {
    let searchInput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");
    console.log(searchInput);
    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    })
    
})
//initially display all products
window.onload=()=>{
    filterProduct("all");
}


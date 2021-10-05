//Products array which stores possible search inputs
let products = ["watches", "footwear", "electronic", "beauty", "clothes"];

//variable which stores the floating point value of first cart product's total price 
let total1=parseFloat(document.getElementById("total1").innerHTML);

//variable which stores the floating point value of second cart product's total price
let total2=parseFloat(document.getElementById("total2").innerHTML);

//variable which stores the floating point value of third cart product's total price
let total3=parseFloat(document.getElementById("total3").innerHTML);

//variable which stores the floating point value of total amount
let total=parseFloat(document.getElementById("total").innerHTML);

//tax for products
let tax=25.00;

//function to calculate the first cart product's price as per quantity
function calc1(){

    //stores the price of the product
    var price= document.getElementById("product1_price").innerHTML;

    //stores the quantity of the product
    var quantity= document.getElementById("quantity1").value;

    //calculates the total amount for product as per quantity
    var total1= parseFloat(price) * quantity;

    //if statement which checks whether the total is number or not
    if(!isNaN(total1)){

        //overwrites the value of total amount in product's price
        document.getElementById("total1").innerHTML=total1;

        //overwrites the total amount with sum of 3 product's price and tax
        document.getElementById("total").innerHTML=total1 + total2 + total3 + tax;
    }
}

//function to calculate the second cart product's price as per quantity
function calc2(){

    //stores the price of the product
    var price= document.getElementById("product2_price").innerHTML;

    //stores the quantity of the product
    var quantity= document.getElementById("quantity2").value;

    //calculates the total amount for product as per quantity
    var total2= parseFloat(price) * quantity;

    //if statement which checks whether the total is number or not
    if(!isNaN(total2)){

        //overwrites the value of total amount in product's price
        document.getElementById("total2").innerHTML=total2;

        //overwrites the total amount with sum of 3 product's price and tax 
        document.getElementById("total").innerHTML=total1 + total2 + total3 + tax;
    }
}

//function to calculate the third cart product's price as per quantity
function calc3(){

    //stores the price of the product
    var price= document.getElementById("product3_price").innerHTML;

    //stores the quantity of the product
    var quantity= document.getElementById("quantity3").value;

    //calculates the total amount for product as per quantity
    var total3= parseFloat(price) * quantity;

    //if statement which checks whether the total is number or not
    if(!isNaN(total3)){

        //overwrites the value of total amount in product's price
        document.getElementById("total3").innerHTML=total3;

        //overwrites the total amount with sum of 3 product's price and tax
        document.getElementById("total").innerHTML=total1 + total2 + total3 + tax;
    }
}


//function to search products as per user input
function searchProduct(){

    //stores the value entered by user
    let query= document.getElementById("search-input").value;

    //looping through the array
    for(var i=0; i<products.length;i++){

        //checks if the entered product exists in array or not
        let presence= products[i].includes(query);
        
        //if product exists in the array...then
        if(presence==true){

            //if the input contains the string 'watch'
            if(query.includes("watch")){

                //then opens the webpage related to watches
                window.open("watches.html");
            }

            //if the input contains the string 'footwear'
            else if(query.includes("footwear")){

                //then opens the webpage related to footwears
                window.open("footwear.html");
            }

            //if the input contains the string 'electronic'
            else if(query.includes("electronic")){

                //then opens the webpage related to electronics
                window.open("electronic.html");
            }

            //if the input contains the string 'beauty'
            else if(query.includes("beauty")){

                //then opens the webpage related to beauty products
                window.open("beauty.html");
            }

            //if the input contains the string 'clothes'
            else if(query.includes("clothes")){

                //then opens the webpage related to clothes
                window.open("clothes.html");
            }
            
        }
    }
}
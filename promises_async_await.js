let stocks = {
    Fruits: ["strawberry", "grapes,", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};


let is_shop_open = true;


//let toppingsChoice = () => {
//    return new Promise((resolved, reject) => {
//        setTimeout(() => {

//            resolved(
//                console.log("which topping would you like?")
//            )
//        }, 3000);
//    });
//};

//async function kitchen() {
//    console.log("A")
//    console.log("B")
//    console.log("C")

//    await toppingsChoice()

//    console.log("D")
//    console.log("E")
//}

//kitchen()

//console.log("doing the dishes")
//console.log("cleaning the tables")
//console.log("taking others orders")

function time(ms) {
    return new Promise((resolved, reject) => {
        if (is_shop_open) {
            setTimeout(resolved, ms)
        } else {
            reject(console.log("shop is closed"));
        }
    });
}

async function createKitchen() {

    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(1000);
        console.log("start the production");

        await time(2000);
        console.log("cut the fruit");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000);
        console.log("start the machine");

        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[0]}`)

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000);
        console.log("servce ice cream");

    } catch (error) {
        console.log("customer left", error);
    } finally {
        console.log("dayn ended, shop is closed");
    }

}

createKitchen();



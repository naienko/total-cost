//sales tax for each state - we'd normally use an API or have this stored in another file
const salesTax = {
    Maryland: 0.05,
    Virginia: 0.04,
    Tennessee: 0.09,
    Pennsylvania: 0.03
};

//items a customer can order at any of the BESTRESAURANT franchises around the nation - we'd normally use an API or have this stored in another file
const bagel = {
    cost: 1.99,
    flavor: "Everything"
};

const donut = {
    cost: 0.99,
    flavor: "Chocolate frosted"
};

const coffee = {
    cost: 0.99,
    size: "Medium"
};

//functions we are going to need to be able to calculate the total cost for each order (orders can be placed at different franchises around the nation)
//this function has all of the parameters it will need to perform its calculation
const calculateSalesTax = (state, subTotal) => {
    //use bracket notation to access the tax rate for the state the order is placed in
    const stateTaxRate = salesTax[state];

    //use the tax rate to RETURN the calculated tax for the subtotal passed into the function
    const taxAmt = subTotal * stateTaxRate;
    return taxAmt;
    // OR 
    // return subTotal * stateTaxRate;
};

//this function is going to take two parameters
const getOrderCost = (orderNumber, state) => {
    //you will need to loop over the items in the order
    let subTotal = 0;
    orderNumber.forEach(element => {
        subTotal += element.cost;
    });
    const taxAmt = calculateSalesTax(state, subTotal);
    const totalCost = subTotal + taxAmt;
    return totalCost;
};

//ordered in Maryland store
const order1769 = [bagel, bagel, coffee, donut];
//ordered in Pennsylvania store
const order2618 = [bagel, coffee, coffee, donut, donut, coffee];

const order1769Cost = Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(getOrderCost(order1769, "Maryland"));
const order2618Cost = Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(getOrderCost(order2618, "Pennsylvania"));


//complete the functions above to console.log the total cost (including sales tax) for each of the orders
console.log(order1769Cost);
console.log(order2618Cost);
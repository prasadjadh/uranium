let printMonth = function(){

const month = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

const dates = new Date(  );

const date1 = dates.getDate();
console.log("the current date is " + date1 );



console.log('the current month is' +" "+ month[dates.getMonth( )] );

console.log("uranium, W3D3, the topic for today is Nodejs module system")


}





module.exports.printMonth = printMonth;








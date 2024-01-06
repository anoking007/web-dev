/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=[];
  let visited=[];
  for(let i=0;i<transactions.length;i++){
    visited.push(0);
  }

  for(let i=0;i<transactions.length;i++){
    let price=0;
    if(visited[i]==0){
      let find=transactions[i]["category"];
      for(let j=0;j<transactions.length;j++){
        if(transactions[j]["category"]==find){
          price+=transactions[j]["price"]
          visited[j]=1;
        }
      }
    
  
  let obj={
    category:transactions[i]["category"],
    totalSpent:price,
  }
  arr.push(obj)
  }
}
  return arr;
}

module.exports = calculateTotalSpentByCategory;

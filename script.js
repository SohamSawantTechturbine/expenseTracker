//let expenses=JSON.parse(localStorage.getItem("data"))||[];
let totalAmount=0;
let categorySelect=document.getElementById('category-select');
let amountinput=document.getElementById("amount-input");
let dateInput=document.getElementById("date-input");
let addBtn= document.getElementById("add-btn");
let expensesTableBody=document.getElementById("expnse-table-body");
let totalAmountCell=document.getElementById("total-amount");
let filter=document.getElementById("filter-input")
let filterBtn=document.getElementById("filter-btn")
let f;
let expenses=[];
addBtn.addEventListener("click",function(){
    const category=categorySelect.value;
    const amount=Number.parseInt(amountinput.value);
    const date=dateInput.value;
    if(category ===""){
        alert("please select a category")
        return;
    }
    if(isNaN(amount)|| amount<=0){
        alert("please enter a valid amount")
        return;
    }
    if(date===''){
        alert("please enter a date");
        return;
    }
    expenses.push({category,amount,date});
    
  
    totalAmount+= amount;
    totalAmountCell.textContent=totalAmount;
    const newRow =expensesTableBody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    deleteBtn.classList.add('delete-btn');
   
    deleteBtn.addEventListener("click",function(){
       expenses.splice(expenses.indexOf(expense),1);
       totalAmount=totalAmount-expense.amount;
       totalAmountCell.textContent=totalAmount;
       expensesTableBody.removeChild(newRow);
       savedata();
    });
  const expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

    savedata();



});
for(let expense of expenses){
    totalAmount+=expense.amount;
    totalAmountCell.textContent=totalAmount;
    const newRow =expensesTableBody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    deleteBtn.classList.add('delete-btn');
    savedata();
    deleteBtn.addEventListener("click",function(){
       expenses.splice(expenses.indexOf(expense),1);
       totalAmount-=expense.amount;
       totalAmountCell.textContent=totalAmount;
       expensesTableBody.removeChild(newRow);
       savedata();
    });
    const expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
    savedata();
   

}
let key;
let savedata=()=>{
   key= localStorage.setItem("data",JSON.stringify(expenses));
  
}
function showtask() {

 f = JSON.parse(localStorage.getItem("data"));

f.forEach((element) => {

    const row = document.createElement('tr');
    totalAmount+=element.amount;
    totalAmountCell.textContent=totalAmount;
    row.innerHTML = `
        <td>${element.category}</td>
        <td>${element.amount}</td>
        <td>${element.date}</td>
        <td><button class='delete-btn'>Delete</button></td>`;
        expensesTableBody.appendChild(row);
       
           

   
});
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
       const row = button.closest('tr'); 
        const index = row.rowIndex - 1; 
        const amount = parseFloat(row.cells[1].textContent); 
        totalAmount -= amount; 
        totalAmountCell.textContent = totalAmount; 

        f.splice(index, 1); 
        localStorage.setItem('data', JSON.stringify(f)); 

        row.remove(); 
        savedata(); 
    });
});

}
filterBtn.addEventListener("click",function(){
alert("helo")
f.forEach((i)=>{
 if(filter.value===i.date){
    expensesTableBody.innerHTML="";
    const row = document.createElement('tr');
    
    row.innerHTML = `
    <td>${i.category}</td>
    <td>${i.amount}</td>
    <td>${i.date}</td>
    <td><button class='delete-btn'>Delete</button></td>`;
    expensesTableBody.appendChild(row);
   
       


 }
})
})
showtask();


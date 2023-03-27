const tbodyEl = document.querySelector("tbody");
const btn = document.getElementById("submit");
const table = document.querySelector("table");


btn.addEventListener("click",function(e){
    e.preventDefault();
    const item = document.getElementById("item").value;// getting values from the DOM
    const amount = document.getElementById("amount").value;// getting values from the DOM
    const date = document.getElementById("date").value;// getting values from the DOM

// if the user leaves the input fields blank
    if(item === ""|| amount === "" || date === ""){ 
        alert("invalid input");
        return;
    }
// adds the input into a new row
    tbodyEl.innerHTML +=`  
    <tr>
    <td>${item}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td><button class="deleteBtn">delete</button></td>
    </tr>
    
    `;
})

//delete button of the entire row
table.addEventListener("click",function(e){
    if(!e.target.classList.contains("deleteBtn")){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
    })
    


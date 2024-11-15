document.getElementById("btn").addEventListener("click", elemnetCreate);
let table = document.getElementById("table");
let count = 0;

function elemnetCreate() {
  let input = document.getElementById('input') 
  console.log(input);
  
 if(input.value != ''){ 
  let tr = document.createElement("tr");
  let tdcount = document.createElement('td')
  let tdcountvalue = document.createTextNode(++count)
  let td = document.createElement("td");
  let tdvalues = document.createTextNode(input.value);
  tdcount.appendChild(tdcountvalue)
  tr.appendChild(tdcount)
  td.appendChild(tdvalues);
  tr.appendChild(td)
  table.appendChild(tr)
 }
  input.value = ''
}

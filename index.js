form.addEventListener("submit", function submitFunction(e) {
  e.preventDefault();
  var tableBody = document.getElementsByTagName("tbody")[0];
  const row = document.createElement("tr");
  var name = document.querySelectorAll("input")[0].value;
  var family = document.querySelectorAll("input")[1].value;
  var age = document.querySelectorAll("input")[2].value;
  tableBody.appendChild(row);
  row.classList.add("addedRows");
  row.innerHTML =
    "<td>" + name + "</td><td>" + family + "</td><td id=age>" + age + "</td>";
  for (i = 0; i < 3; i++) {
    document.getElementsByTagName("input")[i].value = "";
  }
  var cell = document.querySelectorAll("td");
  for (i = 0; i < cell.length; i++) {
    cell[i].classList.add("addedRows");
  }
});

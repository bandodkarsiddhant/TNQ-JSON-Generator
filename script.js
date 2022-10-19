import jsondata from "./data.json" assert { type: "json" };
let data = document.getElementById("filter");
let tbody = document.getElementById("tbody");
let loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", (e) => {
  tbody.innerHTML = "";
  filterData(data.value);
});

function filterData(status) {
  let output = jsondata.filter((option) => option.status === status);
  output.forEach(
    (obj) =>
      (tbody.innerHTML += `<tr>
          
            <td>${obj.capsule_id}</td>
            <td>${obj.missions.length}</td>
            <td>${obj.details}</td>
          
          
          
        </tr>`)
  );
}

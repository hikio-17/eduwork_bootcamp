function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const table = document.getElementById("data");
table.innerHTML = loading();
// fungsi loading
function loading() {
  return `<tr> 
  <td colspan='6' class='text-center'> Proses Loading .. </td>
  </tr>`;
}

const data = getData("https://jsonplaceholder.typicode.com/users", function (data) {
  // clear loading
  document.getElementById("data").innerHTML = "";
  data.forEach((data) => {
    // menampilkan data table
    document.getElementById("data").innerHTML += `<tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.username}</td>
    <td>${data.email}</td>
    <td>
    ${data.address.street}
    ${data.address.suite}
    ${data.address.city}
    </td>
    <td>${data.company.name}</td>
    </tr>`;
  });
});
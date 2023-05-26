var listHocvien = [];
let saveBtn = document.querySelector(".saveBtn");
let fullNameInput = document.querySelector(".fullNameInput");
let emailInput = document.querySelector(".emailInput");
let phoneNumInput = document.querySelector(".phoneNumInput");
let gioiTinhInput = document.querySelector(".genderInput");
let addressInput = document.querySelector(".addInput");
let form = document.querySelectorAll(".formHocvien");
let listHv = document.querySelectorAll(".listHocvien");
let hocvienTable = document.querySelector(".hocvienTable");
let sot = document.querySelector(".sot");
console.log(listHv);
let index = -1;

function hienthi(hocVien) {
  let html = `<tr data-index=${index} > 
    <td>${index}</td>
    <td>${hocVien.name}</td>
    <td>${hocVien.email}</td>
    <td>${hocVien.phone}</td>
    <td>${hocVien.address}</td>
    <td>${hocVien.gender}</td>
    <td>
      <button class="edit" >Sửa</button>
      <button class="delete">Xóa</button></td>
      </tr>`;

  hocvienTable.insertAdjacentHTML("beforeend", html);
}

saveBtn.addEventListener("click", function (e) {
  index = index + 1;
  e.preventDefault();
  let name = fullNameInput.value;
  let email = emailInput.value;
  let phone = phoneNumInput.value;
  let gender = document.querySelector(".genderInput:checked").value;
  let address = addressInput.value;
  let hocVien = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    gender: gender,
  };
  listHocvien.push(hocVien);
  fullNameInput.value = "";
  emailInput.value = "";
  phoneNumInput.value = "";
  addressInput.value = "";

  hienthi(hocVien);
});
hocvienTable.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.closest("tr").remove();
  } else if (event.target.classList.contains("edit")) {
    let indexElement = event.target.closest("tr").getAttribute("data-index");
    let element = listHocvien[indexElement];
    console.log(element);
    fullNameInput.value = element.name;
    emailInput.value = element.email;
    phoneNumInput.value = element.phone;
    addressInput.value = element.address;
    gioiTinhInput.value = element.gender;
  }
});
sot.addEventListener("click", () => {
  hocvienTable.innerHTML = `<tr>
    <td>#</td>
    <td>Họ tên</td>
    <td>Email</td>
    <td>Điện thoại</td>
    <td>Địa chỉ</td>
    <td>Gender</td>
    <td>Hành động</td>
    <td><button class="sot">sắp xếp (alpha b)</button></td>
</tr>`;
  sortStudent();
  listHocvien.forEach((student) => {
    hienthi(student);
  });
});
function sortStudent() {
  listHocvien.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

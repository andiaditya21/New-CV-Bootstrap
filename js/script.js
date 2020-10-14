let ids = document.querySelectorAll("*[id]");
// console.log(ids);
// function myFunc() {
//   for (let n = 1; n < 5; n++) {
//     //   console.log(ids[n]);
//     ids[n].scrollIntoView();
//   }
// }

// function myFunc(id) {
//   id.scrollIntoView();
// }
// SAYA INGIN MENCOBA MENGUMPULKAN ID'S DALAM 1 ARRAY DAN MEMANGGILNYA DENGAN FOREACH TAPI TIDAK BISA. MOHON PENJELASAN & BANTUANNYA PAK?
function about() {
  ids[1].scrollIntoView({ behavior: "smooth" });
}
function work() {
  ids[2].scrollIntoView({ behavior: "smooth" });
}
function educate() {
  ids[3].scrollIntoView({ behavior: "smooth" });
}
function skill() {
  ids[4].scrollIntoView({ behavior: "smooth" });
}

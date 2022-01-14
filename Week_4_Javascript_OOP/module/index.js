import { Table } from "./module1.js";

const table = new Table({
  columns: ["Nama", "Email" ,"No.HP"],
  data: [
    ["Fajri Muhammad Tio", "fajritio376@gmail.com", "(+62) 822 3788 8697"],
    ["Repal Wijaya Kusuma", "repalwijayak@gmail.com", "(+62) 822 8351 9351"],
   ]
});
const app = document.getElementById("app");
table.render(app);
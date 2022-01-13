import { data } from "./module1.js";

const person = new data("Fajri Muhammad Tio", "fajritio376@gmail.com", "(+62) 822 3788 8697");
const app = document.getElementById("app");
person.render(app);
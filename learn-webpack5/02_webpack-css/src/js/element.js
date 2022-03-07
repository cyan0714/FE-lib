// import 'css-loader!../css/style.css'
import '../css/style.css'
import '../css/cyan.scss'

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "hello,webpack!";

document.body.appendChild(divEl);

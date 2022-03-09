// import 'css-loader!../css/style.css'
import '../css/style.css'
import '../css/cyan.scss'
import "../css/image.css";
import "../font/iconfont.css";

import zzhnImage from '../img/zznh.png';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "hello,webpack!";


// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement('img');
imgEl.src = zzhnImage;

// iconfont 字体
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";


document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);


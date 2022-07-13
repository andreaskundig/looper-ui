
const simpleCSS = `
body {
    margin:0;
    position: fixed;
    width: 100%;
    height: 100%;
}
.hidden { display: none !important;}
.menu > div, #stroke-submenu > div, #timing-submenu > div {
    margin: 0;
    display: inline-block;
}
.menu > div:active, #stroke-submenu > div:active, #timing-submenu > div:active {
    background-color: #bbbbbb;
}

.nine-buttons > div {
    width: 11.1111%; /* 9 buttons */
}

.ten-buttons > div {
    width: 10%; 
}

#stroke-submenu > div, #timing-submenu > div.old {
    width: 16.66666%; /* 6 buttons */
}
.menu > div > img,
.menu > div > div,
#color-button > svg,
#stroke-submenu > div > img,
#timing-submenu > div > img {
    width: 100%;
    height: 39px;
    padding: 20px 0px;
    border-bottom: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
}
.active {
    background-color:#dddddd;
}
#overlay{
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    z-index: 99;
    background-color: rgba(255,255,255,0.7);
}
.submenu{
    position: absolute;
    width: 100%;
    top: 80px;
    z-index: 100;
    background-color: white;
}
#color-submenu {
    background-color: #eeeeee;
}
#color-submenu > div > div{
    display: inline-block;
    width:5.2632%;
    height: 40px;
}
#color-submenu > div > div.selected{
    margin:  3.15px 0.29%;
    width: 4.67%;
    height: 34px;
}

.info {
    font: 21px arial, sans-serif;
    text-align: center;
    line-height:130%;
    padding-top: 40px;
    bottom: 0;
}
.info p{
    margin: 6px;
}
.info div {
    margin-bottom: 40px;
}
.info-fr, .info-de {
    font-weight: bold;
}
.info-en {
    font-style: italic;
}
.link {
    color: rgb(77, 208, 225);
    text-decoration: none;
}

#export-submenu > div {
    margin-bottom: 40px;
    
}

.dialog-buttons > div{
    display: inline-block;
    margin: 0 50px;
}
.dialog-buttons > div:active{
    background-color: #bbbbbb;
}

#canvas-parent{
    position:absolute;
    width:100%;
    top:80px;
    bottom: 0;
    background-color:#dddddd;
}
#canvas-parent > canvas{
    cursor: crosshair;
    display:block;
    margin: auto;
}
#gif-progress-bar{
    width: 500px;
    background-color: darkGrey;
    margin: 0 auto;
}
#gif-progress-bar > div{
    height: 10px;
    background-color: darkCyan;
}
#gif {
  border: 1px solid #dddddd;
}
#export-3 > div{
    text-align: center; /* WTF */
}
`;

export default simpleCSS;

!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");!function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.addEventListener("click",(function(){t=setInterval(o,1e3),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,n.disabled=!0}))}()}();
//# sourceMappingURL=01-color-switcher.e43fbe0d.js.map

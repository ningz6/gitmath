function include_script(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.appendChild(script);
}

let config = chrome.runtime.getURL("mathjax_config.js");
let mathjax = chrome.runtime.getURL("node_modules/mathjax/es5/tex-svg.js");
let page = chrome.runtime.getURL("page.js");

console.log("MathJax for Github: " + "https://github.com/ningz6/gitmath");

include_script(config);
include_script(mathjax);
include_script(page);

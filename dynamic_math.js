function parse_math() {
  let pres = document.querySelectorAll("pre");
  for (let pre of pres) {
    if (
      pre.lang == "math" &&
      pre.childNodes.length == 1 &&
      pre.childNodes[0].tagName == "CODE"
    ) {
      let p = document.createElement("p");
      p.innerText =
        "\\begin{equation}" + pre.childNodes[0].innerText + "\\end{equation}";
      pre.replaceWith(p);
    }
  }
}

parse_math();

document.addEventListener("pjax:end", function () {
  parse_math();

  MathJax.typesetPromise()
    .then(() => {
      MathJax.texReset();
      MathJax.typesetPromise();
    })
    .catch((err) => console.log(err.message));
});

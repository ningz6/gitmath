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

function add_toc() {
  let h1 = document.querySelector("article h1");
  if (!h1) {
    return;
  }

  let article = document.querySelector("article");
  let headings = article.querySelectorAll("h2, h3, h4, h5, h6");

  if (headings.length == 0) {
    return;
  }

  let toc = document.createElement("ul");
  toc.id = "toc";
  toc.style.border = "5px #d0d7de solid";
  toc.style.borderRadius = "10px";
  toc.style.padding = "1em";
  toc.style.paddingLeft = "2em";

  h1.after(toc);

  let nodes = new Array();
  let parents = new Array();

  for (let i = 0; i < headings.length; ++i) {
    let heading = headings[i];
    let li = document.createElement("li");
    li.style.listStyleType = "disc";

    let a = document.createElement("a");
    a.setAttribute("href", "#toc" + i);
    a.textContent = heading.textContent;
    li.append(a);

    if (i < headings.length - 1 && heading.tagName < headings[i + 1].tagName) {
      let ul = document.createElement("ul");
      li.append(ul);
      parents.push(ul);
    } else {
      parents.push(li);
    }
    nodes.push(li);

    let anchor_before = document.createElement("a");
    anchor_before.id = "toc" + i;
    heading.parentNode.insertBefore(anchor_before, heading);

    let anchor_after = document.createElement("a");
    anchor_after.href = "#toc";
    anchor_after.textContent = "  \u25B2";
    anchor_after.className = "to-toc";
    anchor_after.title = "go to Table of Content";
    heading.append(anchor_after);
  }

  for (let i = 0; i < headings.length; ++i) {
    let parent = toc;
    for (let j = i - 1; j >= 0; --j) {
      if (headings[j].tagName < headings[i].tagName) {
        parent = parents[j];
        break;
      }
    }
    parent.append(nodes[i]);
  }
}

add_toc();
parse_math();

document.addEventListener("pjax:end", function () {
  add_toc();
  parse_math();

  MathJax.typesetPromise()
    .then(() => {
      MathJax.texReset();
      MathJax.typesetPromise();
    })
    .catch((err) => console.log(err.message));
});

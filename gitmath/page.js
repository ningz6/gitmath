function parse_math() {
  let pres = document.querySelectorAll("pre");
  for (let pre of pres) {
    if (
      pre.lang == "math" &&
      pre.childNodes.length == 1 &&
      pre.childNodes[0].tagName == "CODE"
    ) {
      let p = document.createElement("p");
      p.innerText = "$$\n" + pre.childNodes[0].innerText + "\n$$";
      pre.replaceWith(p);
    }
  }

  let codes = document.querySelectorAll("code");
  for (let code of codes) {
    let prevSibling = code.previousSibling;
    let nextSibling = code.nextSibling;
    if (
      prevSibling &&
      prevSibling.nodeType == 3 &&
      prevSibling.nodeValue.slice(-1) == "$" &&
      nextSibling &&
      nextSibling.nodeType == 3 &&
      nextSibling.nodeValue[0] == "$" &&
      code.childNodes.length == 1 &&
      code.firstChild.nodeType == 3
    ) {
      code.replaceWith(document.createTextNode(code.innerText));
    }
  }
}

function add_toc() {
  if (document.getElementById("toc")) {
    return;
  }

  let article = document.querySelector("article");
  if (!article) {
    return;
  }

  let headings = article.querySelectorAll(
    "h2:not([id='footnote-label']), h3, h4, h5, h6"
  );
  if (headings.length == 0) {
    return;
  }

  let toc = document.createElement("ul");
  toc.id = "toc";
  toc.style.backgroundColor = "#f6f8fa";
  toc.style.borderRadius = "10px";
  toc.style.padding = "1em";
  toc.style.paddingLeft = "3em";

  let h1 = document.querySelector("article h1");
  if (h1) {
    h1.after(toc);
  } else {
    article.firstChild.before(toc);
  }

  let nodes = new Array();
  let parents = new Array();

  for (let i = 0; i < headings.length; ++i) {
    let heading = headings[i];
    let li = document.createElement("li");
    li.style.listStyleType = "disc";

    let a = document.createElement("a");
    a.href = heading.firstChild.href;
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

    // let anchor = document.createElement("a");
    // anchor.href = "#readme";
    // anchor.textContent = "  \u25B2";
    // anchor.className = "to-toc";
    // anchor.title = "go to Table of Content";
    // heading.append(anchor);
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

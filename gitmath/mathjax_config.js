window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    tags: "all",
  },
  svg: {
    fontCache: "global",
  },
  elements: ["math"],
  loader: { load: ["ui/lazy"] },
  options: {
    ignoreHtmlClass: "blob-code-content|code-list",
  },
};
console.log("MathJax config loaded");

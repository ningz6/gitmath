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
};
console.log("MathJax config loaded");

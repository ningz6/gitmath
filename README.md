# gitmath

A Chrome extension for rendering Github math equations, based on [MathJax](https://www.mathjax.org/).

## Features

- Insert a table of contents
- Numbering headings
- Render math equations

## Math

Due to the [backslash escaping problem](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#ignoring-markdown-formatting), we used the [Gitlab formula delimiters](https://docs.gitlab.com/ee/user/markdown.html#math).

### Inline math

<pre>
$`$f(a)=\frac{1}{2\pi i}\oint_y \frac{f(z)}{z-a}dz$`$.
</pre>

### Display math

<pre>
```math
\begin{cases}
3x + 5y +  z \\
7x - 2y + 4z \\
-6x + 3y + 2z
\end{cases}
```
</pre>

### Formula delimiters conversion

You can use `repl.py` for formula delimiters conversion.

- Dollars to Gitlab

  ```console
  python repl.py in.md out.md
  ```

- Gitlab to Dollars

  ```console
  python repl.py --gitlab in.md out.md
  ```

## References

- <https://github.com/orsharir/github-mathjax>
- <https://github.com/goessner/markdown-it-texmath>

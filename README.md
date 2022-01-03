# gitmath

A chrome extension for rendering Github math equations, based on [MathJax](https://www.mathjax.org/).

## Inline math

- Input

  <pre>
  $f(a)=\frac{1}{2\pi i}\oint_y \frac{f(z)}{z-a}dz$
  </pre>

- Output

  $f(a)=\frac{1}{2\pi i}\oint_y \frac{f(z)}{z-a}dz$

## Multi-line math

- Input

  <pre>
  ```math
  \begin{cases}
  3x + 5y +  z \\
  7x - 2y + 4z \\
  -6x + 3y + 2z
  \end{cases}
  ```
  </pre>

- Output

  ```math
  \begin{cases}
  3x + 5y +  z \\
  7x - 2y + 4z \\
  -6x + 3y + 2z
  \end{cases}
  ```

## Examples

- Without gitmath

  ![Without gitmath](without-gitmath.png)

- With gitmath

  ![Without gitmath](with-gitmath.png)

## References

- <https://github.com/orsharir/github-mathjax>

# Math examples

$`E=mc^2`$

$`\displaystyle\frac{\partial\boldsymbol{y}}{\partial x}=\left[\matrix{\frac{\partial y_1}{\partial x}\\\vdots\\\frac{\partial y_m}{\partial x}}\right]`$

$`\displaystyle\frac{\partial\boldsymbol{Y}}{\partial x}=\left[\matrix{\frac{\partial y_{11}}{\partial x}&\cdots&\frac{\partial y_{1n}}{\partial x}\\\vdots&\ddots&\vdots\\\frac{\partial y_{m1}}{\partial x}&\cdots&\frac{\partial y_{mn}}{\partial x}}\right]`$

```math
\begin{align}
&\frac{\partial \exp(\boldsymbol{x})}{\partial \boldsymbol{x}}\\
&=\frac{\partial\left[\exp(x_1),\cdots,\exp(x_n)\right]^{\mathrm{T}}}{\partial\left[x_1,\cdots,x_n\right]^{\mathrm{T}}}\\
&=\left[\matrix{\frac{\partial\exp{x_1}}{\partial x_1}&\cdots&\frac{\partial\exp(x_n)}{\partial x_1}\\\vdots&\ddots&\vdots\\\frac{\partial\exp(x_1)}{x_n}&\cdots&\frac{\partial\exp{x_n}}{x_n}}\right]\\
&=\mathrm{diag}(\exp(\boldsymbol{x}))
\end{align}
```

```math
\begin{align}
&\frac{\partial\log(\boldsymbol{x})}{\partial \boldsymbol{x}}\\
&=\frac{\partial\left[\log(x_1),\cdots,\log(x_n)\right]^{\mathrm{T}}}{\partial\left[x_1,\cdots,x_n\right]^{\mathrm{T}}}\\
&=\left[\matrix{\frac{\partial\log{x_1}}{\partial x_1}&\cdots&\frac{\partial\log(x_n)}{\partial x_1}\\\vdots&\ddots&\vdots\\\frac{\partial\log(x_1)}{x_n}&\cdots&\frac{\partial\log{x_n}}{x_n}}\right]\\
&=\left[\matrix{\frac{1}{x_1}&\cdots&0\\\vdots&\ddots&\vdots\\0&\cdots&\frac{1}{x_n}}\right]\\
&=\mathrm{diag}(\boldsymbol{x})^{-1}
\end{align}
```

```math
\begin{align}
\label{aa}
&\mathrm{softmax}(\boldsymbol{x})=\frac{\exp(\boldsymbol{x})}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}\qquad(\boldsymbol{1}_{n}^{\mathrm{T}}是n维全1向量)\\
&\frac{\partial\mathrm{softmax}(\boldsymbol{x})}{\partial\boldsymbol{x}}\\
&=\frac{1}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}\frac{\partial\exp(\boldsymbol{x})}{\partial\boldsymbol{x}}+\frac{\partial\left(\frac{1}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}\right)}{\partial\boldsymbol{x}}(\exp(\boldsymbol{x}))^{\mathrm{T}}\\
&=\frac{\mathrm{diag}(\exp(\boldsymbol{x}))}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}+\left(-\frac{1}{(\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})
)^2}\right)\exp(\boldsymbol{x})(\exp(\boldsymbol{x}))^{\mathrm{T}}\\
&=\mathrm{diag}\left(\frac{\exp(\boldsymbol{x})}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}\right)-\frac{\exp(\boldsymbol{x})}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}\frac{(\exp(\boldsymbol{x}))^{\mathrm{T}}}{\boldsymbol{1}_{n}^{\mathrm{T}}\exp(\boldsymbol{x})}\\
&=\mathrm{diag}(\mathrm{softmax}(\boldsymbol{x}))-\mathrm{softmax}(\boldsymbol{x})\mathrm{softmax}(\boldsymbol{x})^{\mathrm{T}}
\end{align}
```

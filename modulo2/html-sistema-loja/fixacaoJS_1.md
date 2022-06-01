```
~~~javascript

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui

let salarioFinal
if(qtdeCarrosVendidos === 0){

  return 2000
  
}else{
let valorCarro = (valorTotalVendas / qtdeCarrosVendidos)
let comissao = (valorCarro*0.05) + 100
salarioFinal = 2000 + (comissao*qtdeCarrosVendidos)

return salarioFinal
}

}
~~~
```
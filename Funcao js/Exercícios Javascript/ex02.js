// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function triangulo (a, b, c) {
  if (a == b & c == b & a == c) {
      console.log("É triângulo equilátero todos lados iguais")
  }if (a == b & a != c || b == c & a != c || a == c & b != a) {
      console.log("É um triângulo isósceles dois lados iguais")
  }else{
      console.log("É um triâgulo escaleno todos lados são diferentes")
  }  
}

triangulo(4,4,4)
triangulo(2,3,4)
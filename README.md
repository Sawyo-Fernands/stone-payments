<!-- 
   CUIDADO 

   Quando editar esse readme, tome cuidado com as tags <br/> 
   elas são importantes para alinhar as imagens
-->


<div align="center">
   <img src=".github/brand.svg" height="90">
</div>

# Desafio web
O desafio é criar uma aplicação de conversão de valores de dólar para real. 

<img align="right" src=".github/currency.svg" width="370">

A aplicação terá duas etapas, uma para inserir o valor que se deseja converter e outra para mostrar os valores convertidos.

Para isso, você deve buscar a cotação na [API de moedas][QUOTATION_API].

A aplicação deve mostrar os seguintes dados:

1. Cotação do dólar
2. IOF
3. Total em dólar sem imposto
4. Total em dólar com imposto
5. Total em real sem imposto
6. Total em real com imposto

<br/>

## Cálculo dos valores 

<img align="left" src=".github/calculate.svg" width="250">

### Comprando com dinheiro 


`[(Valor em dólar) + (imposto do Estado)] x (valor do dólar + IOF da compra de dólar)`

### Comprando com cartão 

`[(Valor em dólar) + (imposto do Estado) + (IOF de transações internacionais)] x (valor do dólar)`

<br/>
<br/>

## Possíveis dúvidas:

- IOF é um imposto federal e tem como intuito ser um regulador da economia nacional. Em dinheiro, seu valor é 1,1%, e em cartão 6,4%
- Nos EUA, cada Estado tem sua própria cobrança de impostos. Por exemplo, o imposto de Nevada é de 8,19%, já o de Nova Iorque é de 8,87%

<br/>

## Layout
O layout está disponível no [figma][FIGMA_URL]

[![figma-layout][FIGMA-IMAGE]][FIGMA_URL]

## Requisitos
- Utilize a fonte do layout
- Utilize React
- Utilize TypeScript
- Crie um cliente HTTP com axios
- Utlizar tailwind css
- Publique sua aplicação em uma plataforma de deploy rápido ([vercel](https://zeit.co/)/[heroku](https://www.heroku.com)/[netlify](https://www.netlify.com)/outros)


<br/>


<br/>

<!-- ~VARS~ -->
<!-- API -->
[QUOTATION_API]: https://docs.awesomeapi.com.br/api-de-moedas

<!-- URLS -->
[FIGMA_URL]: https://www.figma.com/file/y8IcDbllfaFAzXrEXR05PE/Teste-Front-Web-Stone

<!-- ASSETS -->
[FIGMA-IMAGE]: .github/figma-desafio.png

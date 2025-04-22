//Função converter área
function converterArea() {
  const valor = parseFloat(document.getElementById("area-valor").value);
  const unidadeOrigem = document.getElementById("origem").value;
  const unidadeDestino = document.getElementById("destino").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || valor <= 0) {
    resultado.innerHTML = "<p>Por favor, insira um valor válido.</p>";
    return;
  }

  let areaEmMetrosQuadrados = 0;

  // Converter unidade de origem para metros quadrados
  switch (unidadeOrigem) {
    case "m2":
      areaEmMetrosQuadrados = valor;
      break;
    case "litro(s)":
      areaEmMetrosQuadrados = valor * 774.4;
      break;
    case "alqueire(s)":
      areaEmMetrosQuadrados = valor * 30976;
      break;
    case "quarta(s)":
      areaEmMetrosQuadrados = valor * 7744;
      break;
    case "hectare(s)":
      areaEmMetrosQuadrados = valor * 10000;
      break;
    default:
      resultado.innerHTML = "<p>Unidade de origem inválida.</p>";
      return;
  }

  let resultadoFinal = 0;

  // Converter metros quadrados para unidade de destino
  switch (unidadeDestino) {
    case "m2":
      resultadoFinal = areaEmMetrosQuadrados;
      resultado.innerHTML = `<p>${valor} ${unidadeOrigem} equivale a <strong>${resultadoFinal.toFixed(
        2
      )}</strong> ${unidadeDestino}.</p>`;
      break;
    case "hectare(s)":
      resultadoFinal = areaEmMetrosQuadrados / 10000;
      if (unidadeOrigem === "litro(s)") {
        resultado.innerHTML = `<p>${valor} ${unidadeOrigem} equivale a <strong>${resultadoFinal.toFixed(
          5
        )}</strong> ${unidadeDestino}.</p>`;
      } else {
        resultado.innerHTML = `<p>${valor} ${unidadeOrigem} equivale a <strong>${resultadoFinal.toFixed(
          4
        )}</strong> ${unidadeDestino}.</p>`;
      }
      break;
    case "alqueire(s)":
      resultadoFinal = areaEmMetrosQuadrados / 30976;
      resultado.innerHTML = `<p>${valor} ${unidadeOrigem} equivale a <strong>${resultadoFinal.toFixed(
        4
      )}</strong> ${unidadeDestino}.</p>`;
      break;
    default:
      resultado.innerHTML = "<p>Unidade de destino inválida.</p>";
      return;
  }
}

//Função regra de três
function calcularregra() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || b === 0) {
    document.getElementById("resultadoregra").innerText = "??????";
    return;
  }

  let x = (b * c) / a;
  document.getElementById("resultadoregra").innerText = x.toFixed(2);
}

//Função de cálculo de fração
function calcularFracao() {
  let areaTotal = parseFloat(document.getElementById("areaTotal").value);
  let numerador = parseFloat(document.getElementById("numerador").value);
  let denominador = parseFloat(document.getElementById("denominador").value);

  if (
    isNaN(areaTotal) ||
    isNaN(numerador) ||
    isNaN(denominador) ||
    areaTotal <= 0 ||
    numerador <= 0 ||
    denominador <= 0
  ) {
    document.getElementById("resultadofracao").innerText =
      "Por favor, insira valores válidos.";
    return;
  }

  let areaFracao = (numerador / denominador) * areaTotal;
  document.getElementById(
    "resultadofracao"
  ).innerText = `A fração da área é ${areaFracao} m²/ha`;
}

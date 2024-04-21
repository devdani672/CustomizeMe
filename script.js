
let inputTitulo = document.getElementById("valor-h1")

inputTitulo.addEventListener("keyup", aplicarEstiloTitulo)


function aplicarEstiloTitulo() {

	const titulo = document.getElementById("titulo");
	const propiedadTitulo  = document.getElementById("propiedad-h1").value;
	const valorTitulo = document.getElementById("valor-h1").value;
	const mensajeError = document.querySelector('.error');


	if(!isNaN(valorTitulo)) {

		const valorTituloPx = `${valorTitulo}px`;
		titulo.style[propiedadTitulo] = valorTituloPx;

	} else if (valorTitulo == "bold" && propiedadTitulo == "fontStyle"){
		titulo.style.fontWeight = "bold";

	} else if (propiedadTitulo === "textShadow"){
		let valorArray = valorTitulo.split(" ");

		let valor1 = `${valorArray[0]}px `;
		let valor2 = `${valorArray[1]}px `
		let valor3 = `${valorArray[2]}px `
		let valor4 = valorArray[3];

		titulo.style.textShadow = `${valor1} ${valor2} ${valor3} ${valor4}`

	} else {
		titulo.style[propiedadTitulo] = valorTitulo;
	}
}
























let inputParrafo = document.getElementById("valor-parrafo")

inputParrafo.addEventListener("keyup", aplicarEstiloParrafo)

function aplicarEstiloParrafo() {
	const parrafo = document.getElementById("parrafo");
	const propiedadParrafo  = document.getElementById("propiedad-parrafo").value;
	const valorParrafo = document.getElementById("valor-parrafo").value;

	if(!isNaN(valorParrafo)) {

		const valorParrafoPx = `${valorParrafo}px`;
		parrafo.style[propiedadParrafo] = valorParrafoPx;

	} else if (valorParrafo == "bold" && propiedadParrafo == "fontStyle"){
		parrafo.style.fontWeight = "bold";

	}  else if (propiedadParrafo === "textShadow"){
		let valorArray = valorParrafo.split(" ");

		let valor1 = `${valorArray[0]}px `;
		let valor2 = `${valorArray[1]}px `
		let valor3 = `${valorArray[2]}px `
		let valor4 = valorArray[3];

		parrafo.style.textShadow = `${valor1} ${valor2} ${valor3} ${valor4}`


	}else {
		parrafo.style[propiedadParrafo] = valorParrafo;
	}
}


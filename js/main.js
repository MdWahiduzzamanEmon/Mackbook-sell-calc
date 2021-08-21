// memoryButton
const memoryButton1 = document.getElementById("memoryButton-1");
const memoryButton2 = document.getElementById("memoryButton-2");

memoryButton1.addEventListener('click', function () {
	memoryCost(0)
})
memoryButton2.addEventListener('click', function () {
	memoryCost(180);
})

// storageButton
const storageButton1 = document.getElementById("storageButton-1");
const storageButton2 = document.getElementById("storageButton-2");
const storageButton3 = document.getElementById("storageButton-3");

storageButton1.addEventListener('click', function () {
	extraStorageCost(0);
})
storageButton2.addEventListener('click', function () {
	extraStorageCost(100);
})
storageButton3.addEventListener('click', function () {
	extraStorageCost(180);
})
// deliveryButton
const deliveryButton1 = document.getElementById("deliveryButton-1");
const deliveryButton2 = document.getElementById("deliveryButton-2");

deliveryButton1.addEventListener('click', function () {
	deliveryCost(0);
})
deliveryButton2.addEventListener('click', function () {
	deliveryCost(20);
})

function memoryCost(price) {
	// mainPrice 
	const mainPrice = document.getElementById("mainPrice");
	const mainPriceValue = Number(mainPrice.innerText);
	const totalPrice1 = document.getElementById("totalPrice-1");
	const extraMemoryCost = document.getElementById("extraMemoryCost");
	extraMemoryCost.innerText = price;

	// total price part
	totalPrice1.innerText = mainPriceValue + Number(extraMemoryCost.innerText);
	// footer total price 
	document.getElementById('totalPrice2').innerText = mainPriceValue + Number(extraMemoryCost.innerText);

	const extraStorageCost = document.getElementById("extraStorageCost");


	if (extraStorageCost.innerText == 100) {

		const extraStorageValue = extraStorageCost.innerText;

		totalPrice1.innerText = mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);
		// total 
		document.getElementById('totalPrice2').innerText = mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);
	} else if (extraStorageCost.innerText == 180) {
		const extraStorageValue = extraStorageCost.innerText;

		totalPrice1.innerText = mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);

		document.getElementById('totalPrice2').innerText = mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);
	}

}


function extraStorageCost(price) {
	// mainPrice 
	const mainPrice = document.getElementById("mainPrice");
	const mainPriceValue = Number(mainPrice.innerText);
	const totalPrice1 = document.getElementById("totalPrice-1");

	const extraStorageCost = document.getElementById("extraStorageCost");
	extraStorageCost.innerText = price;
	// total price part
	totalPrice1.innerText = mainPriceValue + Number(extraStorageCost.innerText);

	document.getElementById('totalPrice2').innerText = mainPriceValue + Number(extraStorageCost.innerText);

	const extraMemoryCost = document.getElementById("extraMemoryCost");

	//extra storage price add
	if (extraMemoryCost.innerText == 180) {
		const extraMemoreyValue = extraMemoryCost.innerText;

		totalPrice1.innerText = mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoreyValue);

		document.getElementById('totalPrice2').innerText = mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoreyValue);
	}

}

// delivery cost 

function deliveryCost(price) {
	const deliveryCost = document.getElementById('deliveryCost');
	deliveryCost.innerText = price;

	if (deliveryCost.innerText == price) {

		const mainPrice = document.getElementById("mainPrice");
		const mainPriceValue = Number(mainPrice.innerText);

		const totalPrice1 = document.getElementById("totalPrice-1");


		const extraStorageCost = document.getElementById("extraStorageCost");
		const extraMemoryCost = document.getElementById("extraMemoryCost");
		// main price with delivery cost 
		if (mainPrice.innerText == 1299) {
			totalPrice1.innerText = Number(mainPrice.innerText) + price;
		}
		// extra memory price with delivery cost
		if (extraMemoryCost.innerText == 180) {
			const extraMemoryValue = extraMemoryCost.innerText;

			const withExtraMemory = mainPriceValue + Number(extraMemoryValue);
			totalPrice1.innerText = withExtraMemory + price;

			document.getElementById('totalPrice2').innerText = withExtraMemory + price;
		}
		// extra storage price  delivery cost
		if (extraStorageCost.innerText == 100 || extraStorageCost.innerText == 180) {
			totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText)) + price;
			document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText)) + price;
		}
		if (mainPrice.innerText == 1299 && extraMemoryCost.innerText == 180 && extraStorageCost.innerText == 100) {
			totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText)) + price;

			document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText)) + price;
		}

		//main price,extra memory price and extra storage price

		if (extraStorageCost.innerText == 180 && extraMemoryCost.innerText == 180 && mainPrice.innerText == 1299) {
			totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText)) + price;

			document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText)) + price;
		}

	}

}
// promoCode 
document.getElementById("apply-button").addEventListener("click", function () {
	inputField();
})

function inputField() {
	const promoCode = document.getElementById('promoCode');
	if (promoCode.value == "stevekaku") {
		const total = document.getElementById('totalPrice-1');
		const total2 = document.getElementById('totalPrice2');
		const totalNumber = Number(total.innerText);
		total2.innerText = totalNumber-(totalNumber * .2);
		document.getElementById('cupon').classList.remove("cupon-error-show");
		promoCode.value = "";
	} else {
		document.getElementById('cupon').classList.add("cupon-error-show");
	}
}
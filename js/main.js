// memoryButton
const memoryButton1 = document.getElementById("memoryButton-1");
const memoryButton2 = document.getElementById("memoryButton-2");

memoryButton1.addEventListener('click', function () {
    console.log("clicked")
    memoryCost(0)
})
memoryButton2.addEventListener('click', function () {
    console.log("clicked")
    memoryCost(180);
    
})

// storageButton
const storageButton1 = document.getElementById("storageButton-1");
const storageButton2 = document.getElementById("storageButton-2");
const storageButton3 = document.getElementById("storageButton-3");

storageButton1.addEventListener('click', function () {
    console.log("clicked")
    extraStorageCost(0);
})
storageButton2.addEventListener('click', function () {
    console.log("clicked");
    extraStorageCost(100,20);
})
storageButton3.addEventListener('click', function () {
    console.log("clicked")
    extraStorageCost(180);
})
// deliveryButton
const deliveryButton1 = document.getElementById("deliveryButton-1");
const deliveryButton2 = document.getElementById("deliveryButton-2");

deliveryButton1.addEventListener('click', function () {
    console.log("clicked")
    deliveryCost(0);
})
deliveryButton2.addEventListener('click', function () {
    console.log("clicked")
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
         document.getElementById('totalPrice2').innerText =mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);
    } else if (extraStorageCost.innerText == 180) {
        const extraStorageValue = extraStorageCost.innerText;
        
        totalPrice1.innerText = mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);

       document.getElementById('totalPrice2').innerText =mainPriceValue + Number(extraStorageValue) + Number(extraMemoryCost.innerText);
    }

}


function extraStorageCost(price,prices) {
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
        
   
    if (extraMemoryCost.innerText == 180) {
        const extraMemoreyValue = extraMemoryCost.innerText;
        
        totalPrice1.innerText = mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoreyValue);

        document.getElementById('totalPrice2').innerText = mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoreyValue);
    }
    
}



function deliveryCost(price) {
    const deliveryCost = document.getElementById('deliveryCost');
    const deliveryCostText = deliveryCost.innerText;
    deliveryCost.innerText = price;

    if (deliveryCost.innerText != 0) {
        
        const mainPrice = document.getElementById("mainPrice");
        const mainPriceValue = Number(mainPrice.innerText);

        const totalPrice1 = document.getElementById("totalPrice-1");
   

        const extraStorageCost = document.getElementById("extraStorageCost");
        const extraMemoryCost = document.getElementById("extraMemoryCost");
        if (mainPrice.innerText == 1299) {
            totalPrice1.innerText = Number(mainPrice.innerText) * .2;
        }
        if (extraMemoryCost.innerText == 180) {
            const extraMemoryValue = extraMemoryCost.innerText;
        
            const withExtraMemory = mainPriceValue + Number(extraMemoryValue);
            totalPrice1.innerText = withExtraMemory * 0.2;

            document.getElementById('totalPrice2').innerText = withExtraMemory * 0.2;
        }
        if (extraStorageCost.innerText == 100 || extraStorageCost.innerText == 180) {
            totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText)) * .2;
            document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText)) * .2;
        }
        if (extraStorageCost.innerText == 100 || extraStorageCost.innerText == 180 && extraMemoryCost.innerText == 180 && mainPrice.innerText == 1299) {
            totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText)) * .2;

            document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText)) * .2;
        }
    
    } else {
        const mainPrice = document.getElementById("mainPrice");
        const mainPriceValue = Number(mainPrice.innerText);

        const totalPrice1 = document.getElementById("totalPrice-1");
   

        const extraStorageCost = document.getElementById("extraStorageCost");
        const extraMemoryCost = document.getElementById("extraMemoryCost");
        if (mainPrice.innerText == 1299) {
            totalPrice1.innerText = Number(mainPrice.innerText);
        }
        if (extraMemoryCost.innerText == 180) {
            const extraMemoryValue = extraMemoryCost.innerText;
        
            const withExtraMemory = mainPriceValue + Number(extraMemoryValue);
            totalPrice1.innerText = withExtraMemory;

            document.getElementById('totalPrice2').innerText = withExtraMemory;
        }
        if (extraStorageCost.innerText == 100 || extraStorageCost.innerText == 180) {
            totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText));
            document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText));
        }
        if (extraStorageCost.innerText == 100 || extraStorageCost.innerText == 180 && extraMemoryCost.innerText == 180 && mainPrice.innerText == 1299) {
            totalPrice1.innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText));
            document.getElementById('totalPrice2').innerText = (mainPriceValue + Number(extraStorageCost.innerText) + Number(extraMemoryCost.innerText));
        }
    }
     
}

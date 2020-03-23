let upgrades = {

    click: {
        pickaxes: {
            price: 100,
            quantity: 0,
            multiplier: 5,
        },

        bigPickaxes: {
            price: 250,
            quantity: 0,
            multiplier: 15,
        }
    },

    auto: {

        rovers: {
            price: 600,
            quantity: 0,
            multiplier: 20,
        },

        bigRovers: {
            price: 1300,
            quantity: 0,
            multiplier: 45,
        }
    },


};


let cheese = 10000
let harvest = 1


//NOTE this function adds one cheese when user clicks moon.

function mine() {
    cheese
    cheese += harvest


    update()
}

function update() {
    document.getElementById('cheeseCount').innerText = cheese.toString();

    document.getElementById('pickaxe').innerText = upgrades.click.pickaxes.quantity.toString()

    document.getElementById('rover').innerText = upgrades.auto.rovers.quantity.toString()

    document.getElementById('bigPickaxe').innerText = upgrades.click.bigPickaxes.quantity.toString()

    document.getElementById('bigRover').innerText = upgrades.auto.bigRovers.quantity.toString()

    // document.getElementById('pickaxePrice').innerText = buyItem()

}

// NOTE this method will be responsible for checking if the user has the resources, and if they do increasing the pickaxe purchased count, and decreasing the cheese resources by the appropriate amount.


function buyItem(type, item) {
    if (cheese >= upgrades[type][item].price) {
        upgrades[type][item].quantity++;
        cheese -= upgrades[type][item].price;
        upgrades[type][item].price *= 2

    }
    if (type == 'click') {
        harvest *= upgrades.click[item].multiplier
    }

    if (item == 'rovers') {
        startInterval()

    }
    update()
}

// NOTE  this will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource.

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function collectAutoUpgrades() {
    // let collectionInterval = upgrades.auto.rovers.multiplier *= harvest
    // return collectionInterval
    mine()
}


// NOTE this method will add the apropriate modifier and use it with the mine.
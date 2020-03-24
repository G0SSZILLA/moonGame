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
let cheeseMod = 0
    //NOTE this function adds one cheese when user clicks moon.

function mine() {
    let autoUpgradesRovers = upgrades.auto.rovers.quantity * upgrades.auto.rovers.multiplier
    let autoUpgradesBigRovers = upgrades.auto.bigRovers.quantity * upgrades.auto.bigRovers.multiplier
    cheese += 1 + autoUpgradesRovers + autoUpgradesBigRovers + cheeseMod + harvest

    update()
}

function update() {
    document.getElementById('cheeseCount').innerText = cheese.toString();

    document.getElementById('pickaxe').innerText = upgrades.click.pickaxes.quantity.toString()

    document.getElementById('rover').innerText = upgrades.auto.rovers.quantity.toString()

    document.getElementById('bigPickaxe').innerText = upgrades.click.bigPickaxes.quantity.toString()

    document.getElementById('bigRover').innerText = upgrades.auto.bigRovers.quantity.toString()

    document.getElementById('pickaxePrice').innerText = upgrades.click.pickaxes.price.toString()

    document.getElementById('bigPickaxePrice').innerText = upgrades.click.bigPickaxes.price.toString()

    document.getElementById('roverPrice').innerText = upgrades.auto.rovers.price.toString()

    document.getElementById('bigRoverPrice').innerText = upgrades.auto.bigRovers.toString()

}

// NOTE this method will be responsible for checking if the user has the resources, and if they do increasing the pickaxe purchased count, and decreasing the cheese resources by the appropriate amount.

function buyItem(type, item) {

    if (cheese >= upgrades[type][item].price) {
        upgrades[type][item].quantity++;
        cheese -= upgrades[type][item].price;
        harvest += upgrades[type][item].multiplier
        upgrades[type][item].price = (upgrades[type][item].price * 2)

    }
    if (item == 'rovers') {
        startInterval()

    }
    update()
    drawMultiplierStat()

}
// NOTE  this will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource.

function applyMods() {
    let cheeseMod = upgrades.click.pickaxes.quantity * upgrades.click.pickaxes.multiplier
    cheese += cheeseMod
    document.getElementById('cheeseCount').innerText = cheeseMod.toString()
}

function drawMultiplierStat() {
    let multiplier = 0
    for (let type in upgrades.click) {
        multiplier += upgrades.click[type].quantity * upgrades.click[type].multiplier
    }
    document.getElementById('cheeseMultiplier').innerText = multiplier.toString();
}

function startInterval() {
    setInterval(collectAutoUpgrades, 3000);
}

function collectAutoUpgrades() {
    let cps = 0
    for (let key in upgrades.auto) {
        cps += upgrades.auto[key].multiplier * upgrades.auto[key].quantity
        cheese += cps
    }
    document.getElementById('cheesePerSecond').innerText = cps.toString()
}

startInterval()
drawMultiplierStat()
applyMods()
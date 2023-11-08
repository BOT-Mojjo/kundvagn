let testement = document.createElement("h1");
testement.innerHTML = "Hello World";
document.body.prepend(testement);

const names = [
    "Apples",
    "Orages",
    "Theo",
    "Morgan",
    "Tagentbord",
    "Gensihn",
    "Treor",
    "SLs Hela tunnelabana nätverk",
    "MacOS v1.923.6",
    "Uwuntu,",
    "Windows 1999,",
    "Dagbok",
    "Penna",
    "Sudd",
    "Mus",
    "Monster",
    "Måns",
    "Den Bästa Stenen",
    "FOR ROCK AND STONE",
    "Sista",
    "na",
];

let pruductList = [];

let random = 0;
while (random < 4) {
    random = Math.random() * 10;
}
let nums = [-1];
for (let i = 0; i < random; i++) {
    let pruduct = {
        img: "null",
        namne: "null",
        pris: "null",
        color: "null",
        count: 1,
    }
    let num = -1;
    while (nums.includes(num)) {
        num = Math.floor(Math.random() * 21);
    }
    nums.push(num);
    pruduct.namne = names[Math.floor(num)];

    num = Math.floor(Math.random() * 10000);

    pruduct.pris = num + ",98";
    pruductList[i] = pruduct;
}

let store = document.querySelector(".store");

for (let index in pruductList) {
    let listing = document.createElement("div");
    let prislapp = document.createElement("h2");
    let namnlapp = document.createElement("h2");
    prislapp.innerText = pruductList[index].pris + "  kr";
    namnlapp.innerText = pruductList[index].namne;

    let button = document.createElement("button");
    button.innerHTML = "buy "
    button.addEventListener("click", (event) => {
        Buy(pruductList[index], index)
    });


    listing.append(namnlapp);
    listing.append(prislapp);
    listing.append(button);

    store.append(listing);
}
let countt = 0;
let vagn = [];
function Buy(product, index) {
    if (vagn.includes(product.namne)) {
        let prod = vagn.indexOf(product.namne)
        let list = document.querySelector(".listing" + prod)
        pruductList[index].count++;
        list.innerHTML = pruductList[index].count + " count";
        return;
    }
    vagn.push(product.namne);

    let kudngvang = document.querySelector(".kundvagn");

    let listing = document.createElement("div");
    let prislapp = document.createElement("p");
    let namnlapp = document.createElement("p");
    let count = document.createElement("p");

    count.innerHTML = 1 + " count";
    count.classList.add("listing" + countt);
    countt++;
    prislapp.innerText = product.pris + " kr";
    namnlapp.innerText = product.namne;

    listing.append(namnlapp);
    listing.append(prislapp);
    listing.append(count);


    kudngvang.append(listing);
    kudngvang.append();

}

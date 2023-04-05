const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function () {
        console.log("I am eating " + this.name)
    }
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
cookie["+Yummy"] = false;
// console.log(cookie);
cookie.eatCookie();

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("I am eating " + this.name);
    }
}
const myCookie = new Cookie("Iced Oatmeal", false);

// console.log(myCookie);
myCookie.eatCookie();
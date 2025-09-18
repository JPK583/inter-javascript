function make_greeter(season="Day") {
    //let season = "Halloween"
    return function() {
        console.log(`Happy ${season}!`)
    }
}

greeter = make_greeter("Leaf Erikson Day")

greeter()


class MathTools {
    static double(x) {
        return x+x
    }
    square(x) {
        return x*x
    }
}

mt = MathTools()
mt.square(4)

MathTools.double(4)

const x = 10;
const obj = { x };
console.log(obj);

const math = {
    add: function(a,b) { return a+b }
}
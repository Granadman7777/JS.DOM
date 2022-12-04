class Figure {
    constructor(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    getArea() {

    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    getArea() {
        return this.a * this.b * Math.sin(this.angle);
    }
}

class Square extends Figure {
    constructor(a) {
        super(4);
        this.a; 
    }
    getArea() {
        return this.a * this.a ;
    }
}
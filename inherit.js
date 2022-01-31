class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }

    getArea() {
        return this.length*this.width
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side)
        this.side = side
    }

    getPerimeter( ) {
        return 4*this.side
    }
}

const square = new Square(5) 
console.log(square.getArea())
console.log(square.getPerimeter())
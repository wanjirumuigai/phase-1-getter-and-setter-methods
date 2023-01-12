// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * 2 * this.radius
    }
    get area() {
        return Math.PI * this.radius * this.radius
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea/Math.PI)
    }
    set circumference(newCircumference) {
        this.radius = (newCircumference/Math.PI)/2
    }
    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }
}
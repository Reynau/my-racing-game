
class Player {
    constructor() { }

    setCoordinates (x, y) {
        this._x = x;
        this._y = y;
    }

    setAcceleration (acceleration) {
        this._acceleration = acceleration;
    }

    setBrake (brake) {
        this._brake = brake;
    }

    setAngle (angle) {
        this._angle = angle;
    }

    setSpeed (speed) {
        this._speed = speed > this._maxSpeed ? this._maxSpeed : speed;

        // 0 degree start at positive X
        // https://www.mathsisfun.com/algebra/trig-interactive-unit-circle.html

        this._xSpeed = getRoundedSin(this._angle) * this._speed;
        this._ySpeed = getRoundedCos(this._angle) * this._speed;
    }

    setMaxSpeed (maxSpeed) {
        this._maxSpeed = maxSpeed;
    }

    accelerate () {
        this.setSpeed(this._speed + this._acceleration);
    }

    brake() {
        this.setSpeed(this._speed - this._brake);
    }
    
}

module.exports = Player;

function getRoundedCos (angle) {
    return Math.round(Math.cos(angle*Math.PI/180) * 100) / 100;
}

function getRoundedSin (angle) {
    return Math.round(Math.sin(angle*Math.PI/180) * 100) / 100;
}
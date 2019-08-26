
class Player {
    constructor() { }

    setCoordinates (x, y) {
        this._x = x;
        this._y = y;
    }

    getCoordinates () {
        return {x: this._x, y: this._y};
    }

    setAcceleration (acceleration) {
        this._acceleration = acceleration;
    }

    getAcceleration () {
        return this._acceleration;
    }

    setBrake (brake) {
        this._brake = brake;
    }

    getBrake () {
        return this._brake;
    }

    setSteering (steering) {
        this._steering = steering;
    }

    getSteering () {
        return this._steering;
    }

    setAngle (angle) {
        this._angle = angle;
    }

    getAngle () {
        return this._angle;
    }

    setSpeed (speed) {
        let maxSpeed = this.getMaxSpeed();
        this._speed = speed > maxSpeed ? maxSpeed : speed;

        // 0 degree start at positive X
        // https://www.mathsisfun.com/algebra/trig-interactive-unit-circle.html

        let angle = this.getAngle();
        this._xSpeed = getRoundedSin(angle) * this._speed;
        this._ySpeed = getRoundedCos(angle) * this._speed;
    }

    getSpeed () {
        return this._speed;
    }

    getSpeedComponents () {
        return {x: this._xSpeed, y: this._ySpeed};
    }

    setMaxSpeed (maxSpeed) {
        this._maxSpeed = maxSpeed;
    }

    getMaxSpeed () {
        return this._maxSpeed;
    }

    accelerate () {
        this.setSpeed(this.getSpeed() + this.getAcceleration());
    }

    brake () {
        this.setSpeed(this.getSpeed() - this.getBrake());
    }

    turnRight () {
        if (this.getSpeed() === 0) return;
        let newAngle = this.getAngle() - this.getSteering();
        if (newAngle < 0) newAngle = 360 + newAngle;
        this.setAngle(newAngle);
    }

    turnLeft () {
        if (this.getSpeed() === 0) return;
        let newAngle = this.getAngle() + this.getSteering();
        if (newAngle > 360) newAngle = newAngle - 360;
        this.setAngle(newAngle);
    }
}

module.exports = Player;

function getRoundedCos (angle) {
    return Math.round(Math.cos(angle*Math.PI/180) * 100) / 100;
}

function getRoundedSin (angle) {
    return Math.round(Math.sin(angle*Math.PI/180) * 100) / 100;
}
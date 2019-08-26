const expect = require('chai').expect;

const Player = require('./../src/Player');

module.exports = function () {
    
describe('Player', function () {
    describe('Player movement', function () {
        describe('#get_set_coordinates', function () {
            let player = new Player();
            let x = 10, y = 5;

            it('should set the player coordinates without errors', function () {
                player.setCoordinates(x, y);
                expect(player._x).to.equal(x);
                expect(player._y).to.equal(y);
            })

            it('should get the player coordinates without errors', function () {
                let pos = player.getCoordinates();
                expect(pos.x).to.equal(x);
                expect(pos.y).to.equal(y);
            })
        })

        describe('#get_set_brake', function () {
            let player = new Player();
            let b = 2;

            it('should set the player brake without errors', function () {
                player.setBrake(b);
                expect(player._brake).to.equal(b);
            })

            it('should get the player brake without errors', function () {
                let brake = player.getBrake();
                expect(brake).to.equal(b);
            })
        })

        describe('#get_set_angle', function () {
            let player = new Player();
            let a = 25;

            it('should set the player angle without errors', function () {
                player.setAngle(a);
                expect(player._angle).to.equal(a);
            })
            it('should get the player angle without errors', function () {
                let angle = player.getAngle();
                expect(angle).to.equal(a);
            })
        })

        describe('#get_set_steering', function () {
            let player = new Player();
            let s = 25;

            it('should set the player steering without errors', function () {
                player.setSteering(s);
                expect(player._steering).to.equal(s);
            })
            it('should get the player steering without errors', function () {
                let steering = player.getSteering();
                expect(steering).to.equal(s);
            })
        })

        describe('#get_set_maxSpeed', function () {
            let player = new Player();
            let s = 25;

            it('should set the player maximum speed without errors', function () {
                player.setMaxSpeed(s);
                expect(player._maxSpeed).to.equal(s);
            })
            it('should get the player maximum speed without errors', function () {
                let maxSpeed = player.getMaxSpeed();
                expect(maxSpeed).to.equal(s);
            })
        })

        describe('#get_set_speed', function () {
            let player = new Player();
            let s = 100;

            player.setMaxSpeed(500);
            player.setAngle(90);

            it('should set the player speed without errors', function () {
                player.setSpeed(s);
                expect(player._speed).to.equal(s);
            })

            it('should update speed x and y components without errors', function () {
                expect(player._xSpeed).to.equal(s);
                expect(player._ySpeed).to.equal(0);
            })

            it('should not surpass maxSpeed value', function () {
                player.setMaxSpeed(50);
                player.setSpeed(s);
                expect(player._speed).to.be.at.most(player._maxSpeed);
            })

            it('should get the player speed without errors', function () {
                player.setMaxSpeed(s);
                player.setSpeed(s);
                let speed = player.getSpeed();
                expect(speed).to.equal(s);
            })
        })
        

        describe('#get_set_acceleration', function () {
            let player = new Player();
            let a = 2;

            it('should set the player acceleration without errors', function () {
                player.setAcceleration(a);
                expect(player._acceleration).to.equal(a);
            })
            it('should set the player acceleration without errors', function () {
                let acceleration = player.getAcceleration();
                expect(acceleration).to.equal(a);
            })
        })

        describe('#accelerate()', function () {
            it('should increase speed by acceleration without errors', function () {
                let player = new Player();
                let s = 10, a = 25;
                player.setSpeed(s);
                player.setAcceleration(a);
                player.accelerate();

                expect(player._speed).to.equal(s + a);
            })            
        })

        describe('#brake()', function () {
            it('should decrease speed by brake value without errors', function () {
                let player = new Player();
                let s = 25, b = 5;
                player.setSpeed(s);
                player.setBrake(b);
                player.brake();

                expect(player._speed).to.equal(s - b);
            })            
        })
    })
})

}
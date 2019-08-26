const expect = require('chai').expect;

const Player = require('./../src/Player');
const State = require('./../src/State');
const Map = require('./../src/Map');
const Game = require('./../src/Game');

describe('Player', function () {
    describe('Player movement', function () {
        describe('#setCoordinates(x,y)', function () {
            it('should set the player coordinates without errors', function () {
                let player = new Player();
                let x = 10, y = 5;
                player.setCoordinates(x, y);

                expect(player._x).to.equal(x);
                expect(player._y).to.equal(y);
            })
        })

        describe('#setBrake(brake)', function () {
            it('should set the player brake without errors', function () {
                let player = new Player();
                let b = 2;
                player.setBrake(b);

                expect(player._brake).to.equal(b);
            })
        })

        describe('#setAngle(angle)', function () {
            it('should set the player angle without errors', function () {
                let player = new Player();
                let a = 25;
                player.setAngle(a);

                expect(player._angle).to.equal(a);
            })
        })

        describe('#setMaxSpeed(maxSpeed)', function () {
            it('should set the player maximum speed without errors', function () {
                let player = new Player();
                let s = 25;
                player.setMaxSpeed(s);

                expect(player._maxSpeed).to.equal(s);
            })
        })

        describe('#setSpeed(speed)', function () {
            it('should set the player speed without errors', function () {
                let player = new Player();
                let s = 25;

                player.setMaxSpeed(500);

                player.setSpeed(s);

                expect(player._speed).to.equal(s);
            })

            it('should update speed x and y components without errors', function () {
                let player = new Player();
                let s = 100;

                player.setMaxSpeed(500);
                player.setAngle(90);

                player.setSpeed(s);

                expect(player._xSpeed).to.equal(s);
                expect(player._ySpeed).to.equal(0);
            })

            it('should not surpass maxSpeed value', function () {
                let player = new Player();
                let s = 100;

                player.setMaxSpeed(50);
                player.setAngle(0);
                
                player.setSpeed(s);

                expect(player._speed).to.be.at.most(player._maxSpeed);
            })
        })
        

        describe('#setAcceleration(acceleration)', function () {
            it('should set the player acceleration without errors', function () {
                let player = new Player();
                let a = 2;
                player.setAcceleration(a);

                expect(player._acceleration).to.equal(a);
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
/*
describe('State')
describe('Map')
describe('Game')
*/
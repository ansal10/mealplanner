process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const assert = require('chai').assert;
const truncate = require('../truncate');
const mealFactory = require('../factories/meal');
const mealHelper = require('../../../utilities/helpers/meal_helper');
const userFactory = require('../factories/user');
const moment = require('moment');


describe('Meal model', () => {
    let meal;
    let user;

    beforeEach(async () => {
        await truncate();
        meal = await mealFactory();
        user = await userFactory();
    });

    it('should do something', async () => {
        await expect(12).to.equal(12)
    });

    it('should create meal with string form of calories', async()=>{
        let h = await mealFactory({calories:'1212'});
        assert(h.calories === 1212);

    });
});
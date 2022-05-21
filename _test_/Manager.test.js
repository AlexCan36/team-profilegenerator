const Manager = require("../lib/Manager")

describe('Manager officeNumber', () => {
    it('can set id value thru constructor', () => {
        const officeNumber = '2';
        const e = new Manager("Alex" , "1" , "alexmanager@gmail" , officeNumber)

        expect(e.officeNumber).toEqual(officeNumber);
    });
});

describe('Manager getRole', () => {
    it('can set id value thru constructor', () => {
        const name = 'Manager';
        const e = new Manager(name)

        expect(e.getRole()).toEqual(name);
    });
});
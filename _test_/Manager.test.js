//const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")

describe('Manager officeNumber', () => {
    it('can set id value thru constructor', () => {
        const officeNumber = '2';
        const e = new Manager("Alex" , "1" , "alexmanager@gmail" , officeNumber)

        expect(e.officeNumber).toEqual(officeNumber);
    });
});
const Employee = require("../lib/Employee");

describe('Employee name', () => {
    it('can set name value thru constructor', () => {
        const str = 'Alex';
        const e = new Employee(str)

        expect(e.name).toEqual(str);
    });
});

describe('Employee id', () => {
    it('can set id value thru constructor', () => {
        const id = '1';
        const e = new Employee("Alex", id)

        expect(e.id).toEqual(id);
    });
});

describe('Employee email', () => {
    it('can set id value thru constructor', () => {
        const email = 'alex@gmail.com';
        const e = new Employee("Alex" , "1", email)

        expect(e.email).toEqual(email);
    });
});

describe('Employee getName', () => {
    it('can set id value thru constructor', () => {
        const name = 'Alex';
        const e = new Employee(name)

        expect(e.getName()).toEqual(name);
    });
});
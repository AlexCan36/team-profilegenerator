const Intern = require("../lib/Intern")

describe('Intern School', () => {
    it('can set id value thru constructor', () => {
        const school = 'uofu';
        const e = new Intern("Alex" , "1" , "alexmanager@gmail" , school)

        expect(e.school).toEqual(school);
    });
});

describe('Intern getSchool', () => {
    it('can set id value thru constructor', () => {
        const name = 'Intern';
        const e = new Intern("Alex" , "1" , "alexmanager@gmail" , name)

        expect(e.getSchool()).toEqual(name);
    });
});

describe('Intern getRole', () => {
    it('can set id value thru constructor', () => {
        const name = 'Intern';
        const e = new Intern(name)

        expect(e.getRole()).toEqual(name);
    });
});



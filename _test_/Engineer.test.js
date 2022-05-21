const Engineer = require("../lib/Engineer")

describe('Engineer github', () => {
    it('can set id value thru constructor', () => {
        const github = 'alecan';
        const e = new Engineer("Alex" , "1" , "alexmanager@gmail" , github)

        expect(e.github).toEqual(github);
    });
});

describe('Engineer getGithub', () => {
    it('can set id value thru constructor', () => {
        const name = 'Engineer';
        const e = new Engineer("Alex" , "1" , "alexmanager@gmail" , name)

        expect(e.getGithub()).toEqual(name);
    });
});

describe('Engineer getRole', () => {
    it('can set id value thru constructor', () => {
        const name = 'Engineer';
        const e = new Engineer(name)

        expect(e.getRole()).toEqual(name);
    });
});

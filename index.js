const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require("./src/page-template.js");


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const newStaffMemberData = []
// Answer questions
const teamData = []
// Manager answers
const roleQuestions = async function(answers){
    if (answers.role === "Manager") {
        const managerAnswer = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswer.officeNumber
        );
        newStaffMemberData.push(newManager);
    
    } else if (answers.role === "Engineer") {
        const githubAnswers = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "Whats your github username",
                    name: "github",
                }
            ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAnswers.github
        );
        newStaffMemberData.push(newEngineer);
    
    } else if (answers.role === "Intern") {
        const internAnswers = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What school did you attend?",
                    name: "school",
                },
            ])
    
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnswers.school
        );
        newStaffMemberData.push(newIntern);
    };
}
const baseQuestions = async function(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "Whats is your name?",
        },
        {
            type: "input",
            name: "id",
            message: "Whats your id number?",
        },
        {
            type: "input",
            name: "email",
            message: "Whats your email?",
        },
        {
            type: "list",
            name: "role",
            message: "Whats your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]
    const answers = await inquirer.prompt (questions)
    const role = await roleQuestions (answers)
}





async function promptQuestions() {
    await baseQuestions()

    const addMemberAnswers = await inquirer
        .prompt([
            {
                name: 'addMember',
                type: 'list',
                choices: ['Add a new member', 'Create team'],
                message: 'Whats next?',
            }
        ])

    if(addMemberAnswers.addMember === 'Add a new member'){
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam() {
    console.log('new guy', newStaffMemberData)
    fs.writeFileSync(
        "./style/index.html",
        generateTeam(newStaffMemberData),
        "utf-8"
    );
}





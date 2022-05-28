const generateManager = function (managerMarkup) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${managerMarkup.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${managerMarkup.id}</p>
                <p class="email">Email: <a href="mailto:${managerMarkup.email}">${managerMarkup.email}</a></p>
                <p class="office">Office Number: ${managerMarkup.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const generateEngineer = function (engineerMarkup) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineerMarkup.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineerMarkup.id}</p>
                <p class="email">Email: <a href="mailto:${engineerMarkup.email}">${engineerMarkup.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineerMarkup.github}">${engineerMarkup.github}</a></p>
            </div>
        </div>
    </div>
    `
};

const generateIntern = function (internMarkup) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${internMarkup.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${internMarkup.id}</p>
                <p class="email">Email:<a href="mailto:${internMarkup.email}">${internMarkup.email}</a></p>
                <p class="school">School: ${internMarkup.school}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }
    return pageArray
}


const generateTeam = function (newStaffMemberData) {
    var finishedHTML = generateHTML(newStaffMemberData);

    return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
        <header>
        <nav class='navbar' id='navbar'>
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
        </header>
        <main>
        <div class='container'>
        <div class="row justify-content-center" id="team-cards">
        ${finishedHTML.join('')}
        </div>
        </div>
        </main>
    </body>
    
    </html>`
};

module.exports = generateTeam


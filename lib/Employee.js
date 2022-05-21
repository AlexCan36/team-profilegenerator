class Employee {
    constructor(name, id, email) { 
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
      }
      getId() {
        return this.id
      }
      getEmail() {
        return this.email
      }
      getRole() {
        return 'Employee'
      }
  }

  module.exports = Employee
const Erik = new Employee("Erik", "123", "eh@gmail.com");
console.log(Erik.name)
console.log(Erik.id)
console.log(Erik.email)
console.log(Erik.getName())
const Alex = new Employee("Alex", "321", "Alex@gmail.com")
console.log(Alex.name)
console.log(Alex.id)
console.log(Alex.email)
Alex.getName = function(){
    return "Hello Erik!"
}
console.log(Alex.getName())

const Alex1 = {
    name: "Alex",
    id: "321",

}
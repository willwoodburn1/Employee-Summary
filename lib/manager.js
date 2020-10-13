// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name,id,email) {
        super(name,id,email);
        this.officenumber = this.officenumber;
    }

    getOfficeNumber() {
        return "OfficeNumber"
    }

    getRole() {
        return "Manager"
    }

}

module.exports = Manager;
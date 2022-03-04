var User = /** @class */ (function () {
    function User(firtsName, lastName, username, email, password, cpf, contact, isAdmin) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin;
    }
    User.prototype.getFirtsName = function () {
        return this.firtsName;
    };
    User.prototype.setFirtsName = function (firtsName) {
        this.firtsName = firtsName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getCpf = function () {
        return this.cpf;
    };
    User.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    User.prototype.getContact = function () {
        return this.contact;
    };
    User.prototype.setContact = function (contact) {
        this.contact = contact;
    };
    User.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    User.prototype.setIsAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
    };
    return User;
}());
var u = new User('Cecília', 'Guimarães', 'CecyGuima', 'cecy.araujo@gmail.com', '102030', 99750635272, '69999614484', true);
console.log(u);
console.log(u.getFirtsName());
console.log(u.getLastName());
console.log(u.getUsername());
console.log(u.getEmail());
console.log(u.getPassword());
console.log(u.getCpf());
console.log(u.getContact());
console.log(u.getIsAdmin());

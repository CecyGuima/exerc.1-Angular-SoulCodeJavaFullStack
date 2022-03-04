interface UserProps {
    firtsName: string
    lastName: string
    username: string
    email: string
    password: string
    cpf: number
    contact: string
    isAdmin: boolean
}

class User implements UserProps {
    firtsName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    cpf: number;
    contact: string;
    isAdmin: boolean;

    constructor(firtsName: string, lastName: string, username: string, email: string,
        password: string, cpf: number, contact: string, isAdmin: boolean) {
            this.firtsName = firtsName
            this.lastName = lastName
            this.username = username
            this.email = email
            this.password = password
            this.cpf = cpf
            this.contact = contact
            this.isAdmin = isAdmin
        }
        getFirtsName(): string {
            return this.firtsName
        }
        setFirtsName(firtsName: string): void {
            this.firtsName = firtsName
        }

        getLastName(): string {
            return this.lastName
        }
        setLastName(lastName: string): void {
            this.lastName = lastName
        }

        getUsername(): string {
            return this.username
        }
        setUsername(username: string): void {
            this.username = username
        }

        getEmail(): string {
            return this.email
        }
        setEmail(email: string): void {
            this.email = email
        }

        getPassword(): string {
            return this.password
        }
        setPassword(password: string): void {
            this.password = password
        }

        getCpf(): number {
            return this.cpf
        }
        setCpf(cpf: number): void {
            this.cpf = cpf
        }

        getContact(): string {
            return this.contact
        }
        setContact(contact: string): void {
            this.contact = contact
        }

        getIsAdmin(): boolean {
            return this.isAdmin
        }
        setIsAdmin(isAdmin: boolean): void {
            this.isAdmin = isAdmin
        }
}

let u: User = new User ('Cecília', 'Guimarães', 'CecyGuima', 'cecy.araujo@gmail.com', '102030', 99750635272, '69999614484', true)

console.log(u)
console.log(u.getFirtsName())
console.log(u.getLastName())
console.log(u.getUsername())
console.log(u.getEmail())
console.log(u.getPassword())
console.log(u.getCpf())
console.log(u.getContact())
console.log(u.getIsAdmin())
import { observable, action, makeObservable } from 'mobx'

export default class Client1 {
    id
    name
    surName
    email
    firstContact
    emailType
    sold
    owner
    country



    constructor(id, name, surName, email, firstContact, emailType, sold, owner, country) {
        this.id = id
        this.name = name
        this.surName = surName
        this.email = email
        this.firstContact = firstContact
        this.emailType = emailType
        this.sold = sold
        this.owner = owner
        this.country = country

        makeObservable(this, {
            name: observable,
            surName: observable,
            email: observable,
            firstContact: observable,
            emailType: observable,
            sold: observable,
            owner: observable,
            country: observable
        })



    }
}
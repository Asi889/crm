import { observable, action, computed, makeObservable } from 'mobx'
import Client1 from './Client1'


export default class ClientList {
    list = []
    constructor() {

        makeObservable(this, {
            list: observable,


            addperson: action,
            updatePerson: action
        })
    }



    addperson(data) {

        data.forEach(c => {
            // console.log(c.name);
            let fullName = c.name.split(" ")
            // console.log(fullName);
            let name = fullName[0]
            let surName = fullName[1]
            this.list.push(new Client1(c._id, name, surName, c.email, c.firstContact, c.emailType, c.sold, c.owner, c.country))
        });

    }
    updatePerson = (id, name, surName, country) => {
        let find = this.list.find(i => i.id === id)
        console.log(find);
        if (find) {
            find.name = name
            find.surName = surName
            find.country = country

        }
        


    }





}



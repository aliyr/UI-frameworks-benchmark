import { observable } from 'mobx';

class UsersStore {
    @observable users = [];
    @observable company = "";
    @observable draftedItem = "gholi";
    getUsers() {
        this.users = [
            { id: 1, name: 'aaa' },
            { id: 2, name: 'bbb' }
        ];

        return this.users;
    }

    updateUser(i) {
        this.users[i].name = this.draftedItem;

    }

    getCompany() {
        this.company = "company";
        return this.company;
    }

    addUser(name) {
        let rnd = Math.random(100);
        this.users.push({ id: rnd, name: name })
    }
}

const usersStore = new UsersStore();

export default usersStore;

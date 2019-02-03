import { computed, observable } from 'mobx';

class UsersStore {
    @observable users = [];
    @observable company = "";

    getUsers() {
        this.users = [
            { id: 1, name: 'aaa' },
            { id: 2, name: 'bbb' }
        ];

        return this.users;
    }

    updateUser(i) {
        this.users[i].name = 'ccc';

    }

    getCompany() {
        this.company = "company";
        return this.company;
    }

    addUser(name) {
        let rnd = Math.random(100);
        this.users.push({ id: rnd, name: name })
    }

    updateCompany(name) {
        this.company = name;
    }
}

const usersStore = new UsersStore();

export default usersStore;

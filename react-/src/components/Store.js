import { observable ,action } from 'mobx';
import { persist ,create} from 'mobx-persist';
// class UsersStore {

//      @observable users = [];
//     @observable company = "";
//     @observable draftedItem = "gholi";
//     getUsers() {
//         this.users = [
//             { id: 1, name: 'aaa' },
//             { id: 2, name: 'bbb' }
//         ];

//         return this.users;
//     }

//     updateUser(i) {
//         this.users[i].name = this.draftedItem;

//     }

//     getCompany() {
//         this.company = "company";
//         return this.company;
//     }

//     addUser(name) {
//         let rnd = Math.random(100);
//         this.users.push({ id: rnd, name: name })
//     }
// }
// class storePersist {

// }
// const persistStore = create({
//     storage: localStorage 
// })
// const usersStore = new UsersStore();

// export default usersStore;
// export  const someStore = persistStore('some', new storePersist);



class UsersStore {

    @persist('list')  @observable users = [];
       @persist  @observable company = "";
       @persist  @observable draftedItem = "gholi";
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
   
    const hydrate = create({
        storage: localStorage,
    })

    const someStore = new UsersStore()
    export default someStore;
    hydrate('some', someStore)
    .then(() => console.log('some hydrated'))

 const result = hydrate('some', someStore)
const rehydrate = result.rehydrate
result.then(() => console.log('some hydrated'))

setTimeout(() => {
    rehydrate().then(() => console.log('rehydrated'))
}, 3000)

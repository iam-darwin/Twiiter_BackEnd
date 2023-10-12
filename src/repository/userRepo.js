import CrudRepository from "./crudRepo.js";
import User from "../model/user.js"

class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
}

export default UserRepository
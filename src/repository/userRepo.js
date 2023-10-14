import CrudRepository from "./crudRepo.js";
import User from "../model/user.js"

class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }

    async getUserByEmail(userEmail){
        try {
            const user=await User.findOne({
                email:userEmail
            })
            return user;
        } catch (error) {
            throw {error}
        }
    }
}

export default UserRepository
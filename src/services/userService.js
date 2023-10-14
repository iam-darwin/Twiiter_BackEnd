import {UserRepository} from "../repository/index.js";

class UserService{
    constructor(){
        this.userRepo=new UserRepository;
    }

    async create(data){
       try {
        const response=await this.userRepo.create(data);
        return response;
       } catch (error) {
        throw {error}
       }
    }

    async login(data){
        try {
            // console.log(data);
            const {email,password}=data;
            const user=await this.userRepo.getUserByEmail(email);
            console.log(user);
            if(!user){
                throw new error("User is not registered")
            }
           const comparePwd=user.comparePassword(password);
           console.log(comparePwd);
           if(!comparePwd){
            throw new Error("Incorrect pwd")
           }
           const token=user.genJWT();
           console.log(token);
           return token;
        } catch (error) {
            throw {error}
        }
    }
}


export default UserService;
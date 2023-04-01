import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users/users.schemas";



 const getUserProfile = async (tokenId: string) => {
    const userRepository = AppDataSource.getRepository(User);
    
    const user = await userRepository.findOneBy({id: tokenId});

    
    const returnUser = userResponseSchema.parse(user!)


    return returnUser

}

export default getUserProfile





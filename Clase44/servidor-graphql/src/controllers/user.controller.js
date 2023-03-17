import { UserService } from "../services/user.service.js";


class UserController{

    static async getUsersDto(req,res){
        try {
            const users = await UserService.getUsersDTO();
            // res.render("html-onwire",{personas:users});
            res.status(200).json({
                status:"SUCCESS",
                data:users
            });
        } catch (error) {
            res.status(400).json({
                status:"ERROR",
                message:`Hubo un error ${error}`
            });
        }
    };

    static async getUsers(req,res){
        try {
            const users = await UserService.getUsers();
            // res.render("html-onwire",{personas:users});
            res.status(200).json({
                status:"SUCCESS",
                data:users
            });
        } catch (error) {
            res.status(400).json({
                status:"ERROR",
                message:`Hubo un error ${error}`
            });
        }
    };

    static async saveUser(req,res){
        try {
            const response = await UserService.saveUser(req.body);
            // res.redirect("/users");
            res.status(200).json({
                status:"SUCCESS",
                data: response
            });
        } catch (error) {
            res.status(400).json({
                status:"ERROR",
                message:`Hubo un error ${error}`
            });
        }
    };

    static async getUser(req,res){
        try {
            const response = await UserService.getUser(req.params.id);
            res.status(200).json({
                status:"SUCCESS",
                data:response
            });
        } catch (error) {
            res.status(400).json({
                status:"ERROR",
                message:`Hubo un error ${error}`
            });
        }
    };

    static async deleteUser(req,res){
        try {
            const response = await UserService.deleteUserById(req.params.id);
            res.status(200).json({
                status:"SUCCESS",
                message: response
            });
        } catch (error) {
            res.status(400).json({
                status:"ERROR",
                message:`Hubo un error ${error}`
            });
        }
    };

}

export {UserController}
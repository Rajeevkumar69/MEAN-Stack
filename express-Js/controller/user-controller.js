import {usersList} from '../models/user-model.js';

export function handleUsersController(req, res){
    const usersData = usersList();
    
    res.render('user', {users:usersData});
}
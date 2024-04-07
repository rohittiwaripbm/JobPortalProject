let admins = [];

let adminOne={
    adminId:1,
    adminName:'Admin One',
    emailAdress:'admin@gmail.com',
    password:'123'
}
admins.push(adminOne);
export default class AdminModel{

    static getAdmin(emailAdress, password)
    {
        let admin = admins.find(a=>a.emailAdress==emailAdress && a.password==password);
        if (admin) {
            return admin;
        }
        else{
            return null;
        }
    }
    static addAdmin(adminobj)
    {
        let newAdmin ={
            adminId : admins.length+1,
            adminName : adminobj.name,
            emailAdress:adminobj.email,
            password :adminobj.password
        }
        admins.push(newAdmin);
    }
}
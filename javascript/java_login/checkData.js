import { database } from "./database.js";
export function checkData(inputEmail, inputPassword) {
    for (let i in database) {
        if ((database[i].email === inputEmail) && (database[i].password === inputPassword)) {
            return true;
        }
    }
    return false
}
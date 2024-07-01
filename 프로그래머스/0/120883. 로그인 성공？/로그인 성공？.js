function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    const successMessage = "login";
    const failIdMessage = "fail";
    const failPwMessage = "wrong pw";
    
    for (let i = 0; i < db.length; i++) {    
        const [userId, password] = db[i];
        if (id === userId && pw === password) {
            return successMessage;
        } else if (id === userId && pw !== password) {
            return failPwMessage;
        }
    }
    
    return failIdMessage;
}
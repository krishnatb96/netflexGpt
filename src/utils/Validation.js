export const checkIsValidData =(email,password,fullName)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    const fullNames  = /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(fullName);
    if(!isEmailValid){
        return 'Email id is not valid'
    }
    if(!isPasswordValid){
        return 'Password is not valid'
    }
    // if(!fullName){
    // return 'Full Name is not valid'
    // }
    return null
}
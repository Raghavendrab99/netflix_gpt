export const checkValidData = (fullName, email, password) => {


    const isFullNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName);
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])/.test(password);


    if (!isFullNameValid) return "Please enter a correct  First Name";
    if (!isEmailValid) return "Email is not valid please enter correct one"
    if (!isPasswordValid) return "Entered password is not correct"


    return null;

}
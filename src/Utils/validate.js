export const checkValidData = (fullName, email, password) => {


    const isFullNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@"#%$&])[A-Za-z0-9!@"#%$&]{8,30}$/.test(password);


    if (!isFullNameValid) return "Please enter a correct  First Name";
    if (!isEmailValid) return "Email is not valid please enter correct one"
    if (!isPasswordValid) return "Entered password is not correct"


    return null;

}
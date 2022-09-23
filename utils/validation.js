export const validateName = (name) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
}

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validateRating = (rating) => {
    if (rating < 1 || rating > 10) return false;
    return true;
}

export const validateMessage = (message) => {
    const re = /^.{0,80}$/;
    return re.test(message);
}
export function regexEmail(input) {
    const regEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return regEmail.test(input.toLowerCase())
}
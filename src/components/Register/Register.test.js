import {validateEmail, validateZipCode} from "./Register";

test("validateEmail should return true when the email is valid", function (){
    const validEmail = "abou@abou.com"
    const resultEmail = validateEmail(validEmail);
    expect(resultEmail).toBe(true);
})

test("validateEmail should return a feedback message when the email is not valid", function (){
    const validEmail = "abou"
    const resultEmail = validateEmail(validEmail);
    expect(resultEmail).toBe('Uw email dient een "@" te bevatten.');
})

test ("validateZipCode should return true when the email is nog valid", function (){
    const validZipCode = "6515"
    const resultZipCode = validateZipCode(validZipCode);
    expect(resultZipCode).toBe(true);
})

test("validateZipcode should return a feedback message when the zipcode is not valid", function () {
    const validZipCode = "6616"
    const resultZipCode = validateZipCode(validZipCode);
    expect(resultZipCode).toBe( "Uw woont niet in de juiste postcode"
    );
})
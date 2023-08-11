const { checkForUrl } = require("../js/urlChecker");

describe('is it a url', () => {
    test('test if strings are actual urls', () =>{
        expect(checkForUrl("word")).toBeFalsy();
    })

    test('emails are not invalid urls', () => {
        expect(checkForUrl("mailto:someone@email.com"))
    })

    test('valid urls to be true', () => {
        expect(checkForUrl("https://www.youtube.com"))
    })

    test('empty strings are falsy', () => {
        expect(checkForUrl("")).toBeFalsy();
    })
})

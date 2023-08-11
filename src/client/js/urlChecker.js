//from https://www.makeuseof.com/regular-expressions-validate-url/
function checkForUrl(url) {
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)) {
         console.log('Valid');
     } else {
         console.log('invalid');
     }
 }
  




export { checkForUrl };
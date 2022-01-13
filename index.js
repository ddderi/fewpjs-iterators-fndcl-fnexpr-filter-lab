// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    return array.filter(n => n === string.toLowerCase() || n === string)
       
   }


   function fuzzyMatch(array, string) {
    return array.filter(n => n[0]+n[1] === string)
}
 
function matchName(array, string) {
    return array.filter(n => n.name === string)
}

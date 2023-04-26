const element = document.getElementById("heading");
// console.log({ element});
// element.textContent = 'xyz'

//! string
let str = "nanu subu rinki";
console.log({ str });

console.log(_.camelCase("Nanu  subu  ahan"))//small
console.log(_.camelCase("ahan  Subu Sup  "))
console.log(_.upperCase(str))//capital
console.log(_.lowerCase(str))
console.log(_.lowerCase('   NANU pilaaa  '))
console.log(_.capitalize('nanu'))//first letter capital
console.log(_.endsWith('nanu', 'u'))
console.log(_.endsWith('subu', 'u'))
console.log(_.endsWith('sup', 'u',2))
console.log(_.escape('friend,  subu ,  nanu&**$'))
console.log(_.kebabCase("Ahan is a gd boy"))//high pen --
console.log(_.kebabCase("SUbuahan"))
console.log(_.kebabCase("__nanu piluuuuuu___"))
console.log(_.lowerFirst('MOGLIIIII'))
console.log(_.pad('ye heee jungle book'))
console.log(_.padEnd('mogli', 'bagira3444'))
console.log(_.parseInt('4533','5','67'))
console.log(_.repeat('###',30))
console.log(_.repeat("ahan",30))
console.log(_.snakeCase('ninja hotodiiii'))//underscor _
console.log(_.snakeCase('NNanu  pilla ta Besi hauchi'))
console.log(_.split('me woh  CHAnd hoon jo kisine na dekha'))




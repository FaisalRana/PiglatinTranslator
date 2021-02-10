const vowels = "aeiou".split("")
const consonants = "yqwrtypsdfghjklzxcvbnm".split("")
const str = "closed"

const q = "q"
const u = "u"
const s = "s"

function PigLatinTranslator(str) {
  strArray = str.split("")
  for (i=0; i < strArray.length; i++) {
    if (vowels.includes(strArray[0])) {
      return str + "way";
    } else if(s.includes(strArray[0]) && q.includes(strArray[1]) && u.includes(strArray[2])) {
        return str.slice(3) + str.charAt(0) + str.charAt(1) + str.charAt(2) + "ay"
    } else if(q.includes(strArray[0]) && u.includes(strArray[1])) {
        return str.slice(2) + str.charAt(0) + str.charAt(1) + "ay"
    } else if(consonants.includes(strArray[0]) && consonants.includes(strArray[1])) {
        return str.slice(2) +str.charAt(0) + str.charAt(1) + "ay"
    } else if(consonants.includes(strArray[0])) {
        return str.slice(1) + str.charAt(0) + "ay"
    } else {
      alert("Error, you have beat the system.")
    }
  }
}

PigLatinTranslator(str)

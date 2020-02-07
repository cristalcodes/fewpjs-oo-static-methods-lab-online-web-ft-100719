class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let capitalizedString=[]
    let wordArray = string.split(' ')
    let prohibited = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

  for (let i = 0; i<wordArray.length; i++){
      if (prohibited.includes(wordArray[i]) && wordArray[i] != wordArray[0]) {
        capitalizedString.push(wordArray[i])
      }
      else {
        let word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        capitalizedString.push(word)
      }
  }

  return capitalizedString.join(' ');
}
}

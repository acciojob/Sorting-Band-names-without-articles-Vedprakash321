//your code here
function removeArticles(str) {
  words = str.split(' ');
  if(words.length <= 1) return str;
  if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' )
    return words.splice(1).join(' ');
  return str;
}

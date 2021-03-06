/*
const query = `query RollDice($dice, $sides) {
    rollDice(numsides: $dice, numSides: $sides)
}`
// the $dice is the variable being passed to the resolver function

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
      query: query, // query is specified above
      variables: {dice: 3, sides: 6}
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
*/

/*
var author = 'andy';
var content = 'hope is a good thing';
var query = `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}`;
 
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        author,
        content,
      }
    }
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
*/
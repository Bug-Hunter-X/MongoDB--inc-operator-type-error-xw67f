```javascript
// Correct use of $inc operator. Ensure the age field is a number.
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 1}});
```
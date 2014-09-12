// if exports is an array, it will be the same like loading multiple files...
module.exports = require('cqrs-eventdenormalizer').defineCollection({
  name: 'person' // optional, default is folder name
//  defaultPayload: 'payload'
},

// optionally, define some initialization data for new view models...
{
  emails: ['default@mycomp.org'],
  phoneNumbers: []
}).defaultEventExtension(function (evt) {
  evt.receiver = [evt.meta.userId];
  return evt;
// }).defaultEventExtension(function (evt, callback) {
//   evt.receiver = [evt.meta.userId];
//   // from somewhere...
//   calllback(null, evt);
// }).defaultEventExtension(function (evt, col, callback) {
//   evt.receiver = [evt.meta.userId];
//   // col.get()...
//   calllback(null, evt);
});

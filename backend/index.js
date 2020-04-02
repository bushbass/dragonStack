const Dragon = require('./dragon');

const fooey = new Dragon({ nickname: 'fooey', birthdate: new Date() });
const baloo = new Dragon({ birthdate: new Date(), nickname: 'baloo' });

const mimar = new Dragon();
setTimeout(() => {
  const gooby = new Dragon();
  console.log({ gooby });
}, 2000);

console.log({ fooey });
console.log({ baloo });
console.log({ mimar });

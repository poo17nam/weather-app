console.log('Starting app');

setTimeout(()=>{
  console.log('Inside of callback');
}, 2000);

setTimeout(function () {
  console.log('Inside second callback');
}, 0);

console.log('Finishing up');

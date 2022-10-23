// try {
//   undefinedFunction();
// } catch (err) {
//   console.log(err.message);
// }

var x = document.getElementById('mynum').value;
try {
  if (x == '') throw 'empty';
  if (isNaN(x)) throw 'not a number';
  x = Number(x);
  if (x > 10) throw 'too high';
} catch (err) {
  document.write('Input is ' + err);
  // console.log(err);
} finally {
  document.write('<br/> Done');
}

var str
for (var i = 0; i <= 100; i++) {
  str = '';
  if (i % 3 == 0) { str += 'media'; }
  if (i % 5 == 0) { str += 'college'; }
  if (str == '') { str = i; }
  console.log(str);
}

var button = document.getElementById('run');
button.addEventListener('click', function () {
  var text = document.getElementById('zetOm').value;
  var string = text.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var checkString = string.split('').reverse().join('');
  if (string == checkString) {
    document.getElementById('answer').innerHTML = 'Het is een palindroom';
  } else {
    document.getElementById('answer').innerHTML = 'Het is geen palindroom';
  }
});

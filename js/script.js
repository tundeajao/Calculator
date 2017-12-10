 var box = document.getElementById('display');

 function addtoScreen(x) {
     box.value += x;
     if (x === 'C') {
         box.value = '';
     }
 }

 function answer() {
     box.value = eval(box.value);
 }

 function power() {
     box.value = eval(box.value) * eval(box.value);
 }

 function backspace() {
     var str = box.value;
     var n = str.length;
     box.value = str.substring(0, n - 1);
 }
// merge two sorted array ifMergeSol (a = [1 , 7 , 9 , 11] , m = 4 , b=[2 , 6 , 10] , n = 3)

////// simple first try ////// o(n)
function ifMergeSol(a, b) {
  let c = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c[k] = a[i];
      i++;
    } else {
      c[k] = b[j];
      j++;
    }
    k++;
  }

  while (i < a.length) {
    c[k] = a[i];
    i++;
    k++;
  }

  while (j < b.length) {
    c[k] = b[j];
    j++;
    k++;
  }

  console.log(c);
  return c;
}

ifMergeSol((a = [1, 7, 9, 11]), (b = [2, 6, 10]));
ifMergeSol((a = [0]), (b = [1]));
ifMergeSol((b = [1, 7, 9, 11]), (a = [2, 6, 10]));
ifMergeSol((b = [1, 7, 9, 11]), (a = [0]));

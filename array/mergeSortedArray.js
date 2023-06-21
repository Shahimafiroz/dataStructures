// merge two sorted array ifMergeSol (a = [1 , 7 , 9 , 11] , m = 4 , b=[2 , 6 , 10] , n = 3)

////// simple first try ////// o(n)
// function ifMergeSol(a, b) {
//   let c = [];
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) {
//       c[k] = a[i];
//       i++;
//     } else {
//       c[k] = b[j];
//       j++;
//     }
//     k++;
//   }

//   while (i < a.length) {
//     c[k] = a[i];
//     i++;
//     k++;
//   }

//   while (j < b.length) {
//     c[k] = b[j];
//     j++;
//     k++;
//   }

//   console.log(c);
//   return c;
// }
///////////////////////////////////////  In place 3 pointer methood ///////////////////////////////////////////////////

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  for (let k = m + n - 1; k >= 0; k--) {
    console.log(nums1[i], nums2[j]);

    if (j < 0) {
      break;
    }
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
  console.log(nums1);
}

////////////////////////////// Calling all the possible test cases /////////////////////////////////////////////////////
// ifMergeSol((a = [1, 7, 9, 11]), (b = [2, 6, 10]));
// ifMergeSol((a = [0]), (b = [1]));
// ifMergeSol((b = [1, 7, 9, 11]), (a = [2, 6, 10]));
// ifMergeSol((b = [1, 7, 9, 11]), (a = [0]));
////////////////
merge((nums1 = [1, 7, 9, 11]), 4, (nums2 = [2, 6, 10]), 3);

/////////////////////////////////////// Important Notes ////////////////////////////////////////////////////////

//  1 ******  n the provided code, the while loop condition k < m + n does not work as expected because it only checks the total length of the two input arrays, m and n, which may not accurately reflect the actual lengths of arrays a and b during the merging process. Consider the scenario when one of the arrays, let's say b, has been completely merged into the result array c. At this point, the variable j would have reached the length of array b, but k would still be less than m + n. However, since the elements of array a are larger than the remaining elements in array b, the remaining elements of array a should be appended to the result array c.To correctly handle the merging process, it's necessary to compare the indices i and j with the lengths of arrays a and b respectively. Hence, the conditions i < m and j < n are used in the subsequent while loops to handle the remaining elements of arrays a and b when one of the arrays has been fully merged.

function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

simpleArraySum([1, 2, 3]);

/* 

sum ==> 0
i = 0
sum = sum + ar[0]
i = 1
sum = sum + ar[1]
i = 2
sum = sum + ar[2]

*/

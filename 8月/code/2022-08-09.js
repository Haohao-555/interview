var romanToInt = function(s) {
  let obj = {
      "M": 1000,
      "D": 500,
      "C": 100,
      "L": 50,
      "X": 10,
      "V": 5,
      "I": 1
  }
  let res = 0;
  for (let i = 0; i < s.length-1; i++) {
      if (obj[s.charAt(i)] >= obj[s.charAt(i+1)]) {
          res += obj[s.charAt(i)]
      } else {
          res -= obj[s.charAt(i)]
      }
  }
  return res + obj[s.charAt(s.length-1)];
}

var intToRoman = function(num) {
  let arr = [
      {
          value: 1000,
          char: "M"
      },{
          value: 900,
          char: "CM"
      },{
          value: 500,
          char: "D"
      },{
          value: 400,
          char: "CD"
      },{
          value: 100,
          char: "C"
      },{
          value: 90,
          char: "XC"
      },{
          value: 50,
          char: "L"
      },{
          value: 40,
          char: "XL"
      },{
          value: 10,
          char: "X"
      },{
          value: 9,
          char: "IX"
      },{
          value: 5,
          char: "V"
      },{
          value: 4,
          char: "IV"
      },{
          value: 1,
          char: "I"
      }
  ];
  let res = "";
  for (let i = 0; i < arr.length && num >= 0; ++i) {
      // 减去最大值
      while (num >= arr[i].value) {
          num -= arr[i].value;
          res += arr[i].char;
      }
  }
  return res;
};

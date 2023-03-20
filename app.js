let input = document.querySelector(".search").value;

const isPalindrom = function (str) {
  str1 = str.split("").reverse().join("");
  let uslov = str === str1 ? `${str} je palindrom` : `${str} nije palindrom`;
  alert(uslov);
};

function proba() {
  alert("asdad");
}

function bubbleSortForObjects(array, index) {
  let isSwapped = false;
  do {
    isSwapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i][index] > array[i + 1][index]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

let drinks = [
  { name: "cola", price: 25, tax: 0.5 },
  { name: "fanta", price: 30, tax: 0.2 },
  { name: "pepsi", price: 20, tax: 0.7 },
];

// bubbleSortForObjects(drinks, "price");
// console.log(drinks);
// bubbleSortForObjects(drinks, "tax");
// console.log(drinks);
// bubbleSortForObjects(drinks, "name");
// console.log(drinks);

// let numebrs = [5, 7, 6, 8, 1, 2, 3, 4, 9, 10, 100, 1000, 2000];

// let sortedArray = drinks.sort((a, b) => a.price - b.price);
// console.log(sortedArray);

// sortedArray = drinks.sort((a, b) => a.tax + b.tax);
// console.log(sortedArray);

// let sortedArray = numebrs.sort((a, b) => a - b);
// console.log(sortedArray)

// მასივების მეთოდები
// contact() - რამოდენიმე მასივის გაერთიანება
let myFirstArray = [1, 2, 3];
let mySecondArray = [4, 5, 6];
// console.log(myFirstArray.concat(mySecondArray));
// copyWithin() - მასივის დაკოპირება განსაზღვრული კოპირებით ისე რომ მასივის სიგრძე არ შეიცავლოს
// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.copyWithin(0,2,4));
// indexOf() - აბრუნებს ინდექს საცაც არის მოთავესბული ელემენტი მასივში
let frontEnd = [
  "HTML",
  "CSS",
  "JS",
  "Bootstrap",
  "JQuery",
  "JS",
  "TS",
  "SCSS",
  "Angular",
];
// console.log(frontEnd.indexOf("JS"));
// console.log(frontEnd.indexOf("React"));
// console.log(frontEnd.indexOf("JS", 3));
// lastIndexof() - იგივე ინდექსოფ ოღონდ აბრუნებს ბოლოს
// console.log(frontEnd.lastIndexOf("JS"));
// join() - მთლიანად გამოიტანოს მასივის ელემენეტები გადაცემული პარამეტრით და აბრუნებს სტრინგით
// console.log(frontEnd.join());
// console.log(frontEnd.join("-"));
// console.log(frontEnd.join(""));
// entries() - აბრუნებს იტერაციულ მასივს რომელსაც გააჩნია key მნიშნველობა
// for(let [key,value] of frontEnd.entries()){
//   console.log(key,value);
// }
// for (const iterator of frontEnd) {
//     console.log(iterator)
// }
// every() - აბრუნებს ლოგიკურ მნიშვენლობას თუ ყოველმა ელემენტმა გაიარა გადაცემული ლოგიკა წინააღმდეგ შემთხვევაში false
// console.log(frontEnd.every(element => element.length >= 2));
// some() - აბრუნებს ლოგიკურ მნიშნველობას თუ ერთმა ელემენტმა მაინც გაიარა გადაეცმული ლოგიკა წინააღმდეგ შემთხვევაში false
// console.log(frontEnd.some(element => element.length >= 2));
// fill() - ავსებს მასივს სტატიკური ელემენტებით
let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.fill(0,2,4));
// console.log(myArray.fill(4,1));
// console.log(myArray.fill(2));
// let value = 0;
// let start = 2;
// let last = 4;
// console.log(myArray.fill(value, start, last))
// filter() - გადაეცემა ლოგიკა და დააბრუნებს გაფილტრულს მასივს რომელმაც გაიარა ლოგიკა
// console.log(myArray.filter(element => element > 3));
// find() - დააბრუნებს პირველ ელემენტს რომელმაც გაიარა პირობა
// console.log(myArray.find(element => element > 3));
// forEach() - გადაივლის ყოველ ელემენეტზე
// myArray.forEach((element, index) => {
//   console.log(element, index);
// })
// from() - შექმნის მასივს მიღებული ელემენტებიდან
// console.log(Array.from('FE-51'));
// console.log(Array.from([1, 2, 3], element => element + element));
// findIndex() - ეძებს ინდექს გადაცემული ლოგიკის მიხედვით
// console.log(myArray.findIndex(element => element !== 3));
// pop , push , unshift , shift / ბოლოდან ამოღბა / ბოლოში დამატება / დასაწყისში დამატება / დასაწყისში ამოღება
// slice() - ჩამოაჭრის გადაცემული პარამტერების მიხედვით ელემენტს მასივს და დააბრუენბს ახალ მასივს
// console.log(frontEnd.slice(2,4));
// console.log(frontEnd.slice(2));
// split() - გადაიტანოს სტრინგის ელემენტები მასივში ისეთ ნაიარად რა პირობასაც გადავცემთ
// console.log("Ragaca random text".split());
// console.log("Ragaca random text".split(""));
// console.log("Ragaca random text".split(" "));
// reduce() - ღებულობს ლოგიკას და აბრუნებს ერთ ელემენტს
// console.log(myArray.reduce((previosValue, currentValue) => previosValue + currentValue));
// reduceRight() - reduce საპირისპიროდ
// console.log(myArray.reduceRight((previosValue, currentValue) => previosValue + currentValue));
// toString() - მასივს , რიცხვს , ობიექტსაც , ბულეანსაც გადაიყვანს ტექსტში
// console.log([1, 2, 3, 4, 5].toString());
// console.log(true.toString());
// console.log({}.toString());
// includes() - აბრუნებს true თუ შეიცავს false თუ არ შეიცავს
// console.log(frontEnd.includes("HTMLA"));

/*
  შევქმნათ ფუნქცია nextDay() რომელსაც პარამეტრებში გადაეცემა 3 მნიშვნელობა : დღე , თვე , წელი.
  თქვენი დავალებაა დააბრუნოთ მომდევნო დღე
  თუ გადაცემული მნიშვნელობა არასწორია დააბრუნეთ ტექსტის სახით.
  მაგალითი :
  * 17/10/2022 დააბრუნოს უნდა [18,10,2022]
  * 29/2/2020 დააბრუნოს უნდა [1,3,2020]
  * 28/2/2022 დააბრუნოს უნდა [1,3,2020]
  * 31/12/2022 დააბრუნოს უნდა [1,1,2023]
  ! 29/2/2022 დააბრუნოს უნდა არასწორია გადაცემული მნიშვნელობა
  ! 31/6/2022 დააბრუნოს უნდა არასწორია გადაცემული მნიშვნელობა
  ! 32/7/2022 დააბრუნოს უნდა არასწორია გადაცემული მნიშვნელობა
  ! 30/13/2022 დააბრუნოს უნდა არასწორია გადაცემული მნიშვნელობა

  ! ჩაშენებული მეთოდი არ გამოიყენოთ
*/

function nextDay(day, month, year) {
  if (
    (day == 29 && month == 2) ||
    (day == 31 && month == 6) ||
    month > 12 ||
    day == 0 ||
    day > 31 ||
    month == 0
  ) {
    console.log("არასწორია გადაცემული მნიშვნელობა");
  }
  if (day < 31) {
    console.log(day + 1, month, year);
  }
  if (day == 31) {
    console.log(day, month + 1);
    if (day == 31 && month == 12) {
      let day = 1;
      let month = 1;
      console.log(day, month, year + 1);
    } else if (day == 31 || month < 12) {
      let day = 1;
      console.log(day, month + 1, year);
    }
  }
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

nextDay(31, 01, 2022);

// do {
//   if (day == 31) {
//     return day;
//   }
//   return day + 1;
// } while (day < 30);
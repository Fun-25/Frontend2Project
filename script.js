
/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentwithMap() {
  arr.map(student => {
      if (student.marks > 50) {
          console.log(student);
      }
  });


}


function PrintStudentbyForEach() {
  arr.forEach(student => {
      if (student.marks > 50) {
          console.log(student);
      }
  });
}

function addData() {
  let newStudent = {id:4, name:"susan", age:"20", marks:45};
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  arr = arr.filter(student => student.marks < 50);
  console.log(arr);
}

function ConcatenateArray() {
  let newArr = [
      { id: 4, name: "ken", age: "18", marks: 70 },
      { id: 5, name: "toka", age: "20", marks: 65 },
      { id: 6, name: "hide", age: "19", marks: 55 }
  ];
  let combinedArr = arr.concat(newArr);
  console.log(combinedArr);
}

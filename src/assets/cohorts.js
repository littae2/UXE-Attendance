'@hmr:keep-all'
import { apiData } from './store.js'
import { get } from 'svelte/store'
import Cohorts from './timetable.json'

let today = new Date()
let month = today.getMonth()
var cohortArr

if (month < 6) {
  cohortArr = Cohorts.semester.one.cohort
} else {
  cohortArr = Cohorts.semester.two.cohort
}

var year1 = new Array()
var year2 = new Array()
var year3 = new Array()
for (const cohort of cohortArr) {
  if (cohort.id.charAt(2) == '5') {
    year1.push(cohort)
  } else if (cohort.id.charAt(2) == '6') {
    year2.push(cohort)
  } else {
    year3.push(cohort)
  }
}

await fetch('https://randomuser.me/api/?results=110')
  .then(response => response.json())
  .then(data => {
    var students = new Array()
    for (var student of data.results) {
      var y = Math.floor(Math.random() * 3)
      var e = new Array()
      students.push({ student, year: y + 1, papers: e })
    }
    apiData.set(setCohorts(students))
  })
  .catch(error => {
    console.log(error)
  })

function checkPapers(student,cohort){
  var results = false

  for(const paper of student.papers){
    var p = paper[0].name.slice(0, -1);
    var c= cohort[0].name.slice(0, -1);
    if(c == p){
      results = true
    }
  }
  return results
}

function fillCohort (max, year, students, cohort) {
  var c = new Array()
  if(cohort[0].name.slice(0, -2)=="Special Topic"){
    max = 3
  }
  for (const student of students) {
    if (c.length < max) {
      if (student.year == year) {
        if (student.papers.length < 4) {
          if(checkPapers(student, cohort)==false){
            student.papers.push(cohort)
            c.push(student)
          }         
        }
      }
    }
  }
 
  var paper =[{cohort, students:c}]
  var result = [paper, students]
  return result
}
function setCohorts (s) {
  var students = s
  var cohorts = new Array()
  for (const cohort of cohortArr) {
    for (const s of cohort.stream) {
      var c = [
        {
          name: cohort.name,
          id: cohort.id,
          stream: s,
          lecturer: cohort.lecturer
        },
      ]
      if (year1.includes(cohort)) {
        var max = 30
        var year = 1;
        var results = fillCohort(max, year, students, c)
        students = results[1]
        cohorts.push(results[0])
      } else if (year2.includes(cohort)) {
        var max = 20
        var year = 2;
        var results = fillCohort(max, year, students, c)
        students = results[1]
        cohorts.push(results[0])
      } else {
        var year = 3;
        var max = 15
        var results = fillCohort(max, year, students, c)
        students = results[1]
        cohorts.push(results[0])
      }
    }
  }
  return cohorts
}

export const cohorts = get(apiData)

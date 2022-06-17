// Your code here
let createEmployeeRecord = function(details){
    return{
      firstName:details[0],
      familyName:details[1],
      title:details[2],
      payPerHour:details[3],
      timeInEvents:[],
      timeOutEvents:[]
    }
  }
  let createEmployeeRecords = function(rawData){
    return rawData.map(function(details){
      return createEmployeeRecord(details)
    })
  }
  let createTimeInEvent =function(employee, dateStamp){
    let[date, hour] =dateStamp.split('')
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour,10),
      date,
    })
    return employee
  }
  let createTimeOutEvent =function(employee, dateStamp){
    let[date, hour] =dateStamp.split('')
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour,10),
      date,
    })
    return employee
   }
   let hoursWorkedOnDate = function(employee, dateSort){
    let inEvent =employee.timeInEvents.find(function(e){
      return e.date === dateSort
    })
  
    let outEvent =employee.timeOutEvents.find(function(e){
      return e.date === dateSort
    })
    return(outEvent.hours - inEvent.hours)/100
  }
  
  let wagesEarnedOnDate = function(employee, dateSort){
    let rawWage = hoursWorkedOnDate(employee,dateSort)
    * employee.payPerHour
    return parseFloat(rawWage.toString)
  }
  let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
      return e.date
    })
    let payable = eligibleDates.reduce(function(memo,d){
      return memo + wagesEarnedOnDate(employee, d)
    }, 0)
    return payable
  }
  let findEmployeeByFirstName = function(scrArray, first){
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }
  let calculatePayroll =function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo,rec){
      return memo + allWagesFor(rec)
    },0)
  }
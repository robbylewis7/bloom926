////////////////////
//Sleep Total Chart
////////////////////


function sleepTotal(){
let logDates = [];
let sleepLogged = [];
    
    
    
function displayDates() {    
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
           let dates = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`)
};
    }
        })
    }


displayDates();


function displaySleep() {
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
        let sleep = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < sleep.length; i++){
            sleepLogged.push(sleep[i].sleepTotal);
    }
        

                    
}});
}

displaySleep();
    



var ctx = $("#myChart");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: sleepLogged,
        label: "Sleep Total",
        borderColor: '#FE9985',
        backgroundColor: '#fff',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Total Sleep per Day',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

sleepTotal();


////////////////////
//Clean Eating Total Chart
////////////////////




function cleanEating(){
let logDates = [];
let cleanLogged = [];
    
    
    
function displayDates() {    
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
           let dates = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        

        }
    })
}

displayDates();


function displayClean() {
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
        let cleanEating = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < cleanEating.length; i++){
            cleanLogged.push(cleanEating[i].cleanEating);
    }
        

                    
}});
}

displayClean();


var ctx = $("#cleanEating");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: cleanLogged,
        label: "Clean Eating Total",
        borderColor: '#FE9985',
        backgroundColor: '#fff',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Clean Eating Rating per Day',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

cleanEating();



////////////////////
//Energy Total Chart
////////////////////




function energy(){
let logDates = [];
let energyLogged = [];
    
    
    
function displayDates() {    
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
           let dates = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        

        }
    })
}

displayDates();


function displayEnergy() {
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
        let energy = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < energy.length; i++){
            energyLogged.push(energy[i].energy);
    }
        

                    
}});
}

displayEnergy();


var ctx = $("#energy");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: energyLogged,
        label: "Energy Total",
        borderColor: '#FE9985',
        backgroundColor: '#fff',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Energy Rating per Day',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

energy();




////////////////////
//Exercise Total Chart
////////////////////




function exercise(){
let logDates = [];
let exerciseLogged = [];
    
    
    
function displayDates() {    
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
           let dates = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        

        }
    })
}

displayDates();


function displayExercise() {
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
        let exercise = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < exercise.length; i++){
            exerciseLogged.push(exercise[i].exercise);
    }
        

                    
}});
}

displayExercise();


var ctx = $("#exercise");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: exerciseLogged,
        label: "Exercise Total",
        borderColor: '#FE9985',
        backgroundColor: '#fff',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Exercise Rating per Day',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

exercise();



////////////////////
//Stress Total Chart
////////////////////




function stress(){
let logDates = [];
let stressLogged = [];
    
    
    
function displayDates() {    
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
           let dates = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        

        }
    })
}

displayDates();


function displayStress() {
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
        let stress = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < stress.length; i++){
            stressLogged.push(stress[i].stress);
    }
        

                    
}});
}

displayStress();


var ctx = $("#stress");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: stressLogged,
        label: "Stress Total",
        borderColor: '#FE9985',
        backgroundColor: '#fff',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Stress Rating per Day',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

stress();




////////////////////
//Water Intake Total Chart
////////////////////




function waterIntake(){
let logDates = [];
let waterLogged = [];
    
    
    
function displayDates() {    
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
           let dates = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        

        }
    })
}

displayDates();


function waterIntake() {
    $.ajax({
        url: '/logs/user/'+localStorage.getItem('username'),
        method: 'GET',
        dataType: 'json',
        headers: {
            authorization: 'Bearer '+localStorage.getItem('authToken')
        },
        success: function(data) {
        let waterIntake = data.logs.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)})
            for (var i = 0; i < waterIntake.length; i++){
            waterLogged.push(waterIntake[i].waterIntake);
    }
        

                    
}});
}

waterIntake();


var ctx = $("#waterIntake");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: waterLogged,
        label: "Water Intake Total",
        borderColor: '#FE9985',
        backgroundColor: '#fff',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Water Intake per Day',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

waterIntake();
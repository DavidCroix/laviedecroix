var users = [
    {
        username : 'David',
        password : '123',
        employee : {
            id : 1001,
            name : 'David Cruz',
            photo: 'users/1001.jpg'
        },
        role : {
            id: 'SA',
            description : 'System Administrator'
        }
        
    },
    {
        username : 'Pablo',
        password : '123',
        employee : {
            id : 1002,
            name : 'Mijares Pablo',
            photo: 'users/1001.jpg'
        },
        role : {
            id: 'SA',
            description : 'System Administrator'
        }
        
    },
    {
        username : 'Oscar',
        password : '123',
        employee : {
            id : 1002,
            name : 'Mendez Oscar',
            photo: 'users/1001.jpg'
        },
        role : {
            id: 'SA',
            description : 'System Administrator'
        }
    }
];
//global variables 
var employee;


function init(){
    console.log('Initializing page...');
    hideErrorLabel();
    hideWelcomeLabel();
}

var found = false;
var name;
var employees;

function login(){
    console.log('login...');
    found=false;
    hideErrorLabel();
    hideWelcomeLabel();
    
    
    //get values from
    var userName = document.getElementById('inputusername').value;
    var password = document.getElementById('inputpassword').value;

    users.forEach(user => {
        
        if(userName == user.username && password == user.password){
            found = true;
            employees = user;
            sessionStorage.isLoggedIn = true;
            sessionStorage.userInfo = JSON.stringify(user);
            if(typeof sessionStorage.previousPage !== 'undefined'){
                //display user info
                window.location = sessionStorage.previousPage;
            }
            else{
                
                window.location = 'index.html'
            }
          
        }
        
        
            
    });

    if(found){
        name = employees.employee.name;
        
        showWelcomeLabel('Welcome ' + name);
        

    }
    else        
        showErrorLabel('User or Password is incorrect');
        
    
}

function clearValues(){
    console.log('Clear...');
    document.getElementById('inputusername').value = '';
   
    document.getElementById('inputpassword').value = '';
    hideErrorLabel();
    hideWelcomeLabel();
}
function hideErrorLabel(){
    document.getElementById('errorlabel').style.display = 'none';
    
}

function hideWelcomeLabel(){
    document.getElementById('welcomelabel').style.display = 'none';
    
}

function showErrorLabel(message){
    document.getElementById('errorlabel').style.display = 'block';
    document.getElementById('errorlabel').innerHTML = message;
}

function showWelcomeLabel(message){
    document.getElementById('welcomelabel').style.display = 'block';
    document.getElementById('welcomelabel').innerHTML = message;
}





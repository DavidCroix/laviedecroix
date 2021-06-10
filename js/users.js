var users= [
    {
    userName: 'Pablo',
    password : 'abc123',
    employee: {
        id : 1001 ,
        name : 'Pablo Mijares',
        photo: 'images/1002.png',
        contact:{
            emailAddress: '03211568778@utt.com',
            phoneNumber : 6646668190
        }
    },
    role: {
        id : '5A',
        description : 'System Administrator'
    }
    },
    {
    userName: 'David',
    password : '1010',
    employee: {
        id : 1002 ,
        name : 'David Sepeda',
        photo: 'images/1002.png',
        contact:{
            emailAddress: '0316546855@utt.com',
            phoneNumber : 6644157702
        }
    },
    role: {
        id : '4G',
        description : 'Tester'
    }
    },
    {
        userName: 'Oscar',
        password : 'pass',
        employee: {
            id : 1002 ,
            name : 'Oscar Mendez',
            photo: 'images/1002.png',
            contact:{
                emailAddress: '0321554778@utt.com',
                phoneNumber : 6642315467
            }
        },
        role: {
            id : '3D',
            description : 'Youtuber'
        }
     },


]

function init(){
    console.log('initialize page...')
    //create grid
    var gridUsers = new Grid('userdiv',{
        dataSource : users,
        columns:[
            {
                header:'Photo',
                fieldName : 'employee.photo',
                type:'image'
            },
            {
                header: 'User Name',
                fieldName : 'userName',
                type: 'text'
            },
            {
                header: 'User Role',
                fieldName : 'role.description',
                type: 'text'
            },
            {
                header: 'Name',
                fieldName : 'employee.name',
                type: 'text'
            },
            {
                header: 'Email Address',
                fieldName : 'employee.contact.emailAddress',
                type: 'text'
            }


        ],
        allowSearch : true,
        buttons:{
            add:{
                visible : true,
                onClick : 'addUser',
            },
            edit:{
                visible: true,
                onClick:'editUser',
                inLine: true
            },
            delete:{
                visible: true,
                onClick:'deleteUser',
                inLine: true
            }
        }
    });
}

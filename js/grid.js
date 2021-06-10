//Grid class
function Grid(parentDivID,settings){
    //attributes
    if(typeof parentDivID !== 'undefined'){
        this.parentDivID = parentDivID;
    }
    else
    console.error('Missing parent div id');
    if(typeof settings !=='undefined'){
        this.settings = settings;
    }
    else
    console.error('Missing settings');
    //parent div 
    this.parentDiv = document.getElementById(this.parentDivID);

    if(this.parentDiv != null){
        //search Fuction 
        var divGridSearch = document.createElement('div');
        divGridSearch.className = 'gridsearch'
        if(typeof this.settings.allowSearch !== 'undefined'){
            if(this.settings.allowSearch){

                //input Search 
                var inputSearch = document.createElement('input');
                inputSearch.type='text';
                inputSearch.placeholder = 'Search...';
                inputSearch.id='inputSearch';

                divGridSearch.appendChild(inputSearch);
                

                //add button
                var addButton = document.createElement('button');
                var imgAddButton = document.createElement('img');
                
                imgAddButton.src = 'images/add.png'
                addButton.appendChild(imgAddButton);
                divGridSearch.appendChild(addButton);
                
                
                //search button
                var searchButton = document.createElement('button');
                var imgButtonSearch= document.createElement('img');
                imgButtonSearch.src = 'images/search.png'
                searchButton.id = 'searchButton';
                searchButton.onclick = function(){
                    var input, filter, table,tbody, tr, i,txtValue;
                    input = document.getElementById('inputSearch');
                    filter = input.value;
                    table = document.getElementById('griduserdiv');
                    
                    tr=table.getElementsByTagName('tr');
                
                    for(var i=0;i<tr.length;i++){
                            txtValue = tr[i].textContent || tr[i].innerText;
                            if(txtValue.indexOf(filter) > -1){
                                tr[i].style.display = "";
                            }
                            else
                            {
                                tr[i].style.display = "none";
                            }
                            console.log(txtValue.indexOf(filter))
                    }
                }
                searchButton.appendChild(imgButtonSearch);
                divGridSearch.appendChild(searchButton);
                
            }
        }

        //create table
        this.table = document.createElement('table');
        this.table.id = 'grid' + this.parentDivID;
        this.table.className = 'gridtable';

        //columns
        if(typeof this.settings.columns !== 'undefined'){
            //column header
            var thead = document.createElement('thead');//create table header
            var row = document.createElement('tr');//create table row
            this.settings.columns.forEach(column => {
                var cell = document.createElement('th');//create header cell
                if(typeof column.header !== 'undefined'){
                    cell.innerHTML = column.header;
                 row.appendChild(cell);//add header cell to row
                }
                else
                console.error('Missing column header')
                
            });
            thead.appendChild(row);//add row to table header
            this.table.appendChild(thead);//add table header to table
            //data
            if(typeof this.settings.dataSource !== 'undefined'){
               var tbody = document.createElement('tbody');
               var idRow = 0;
               var cellID = 1;


               this.settings.dataSource.forEach(dataRow => {
                   cellID = 1;
                   var row = document.createElement('tr');
                    idRow++
                   row.id =  idRow
                    this.settings.columns.forEach(column => {
                        if(typeof column.fieldName !== 'undefined'){
                            var fieldNameParts = column.fieldName.split('.');
                                var fieldValue = dataRow
                                fieldNameParts.forEach(part => {
                                fieldValue = fieldValue[part];
                            });
                            //cell 
                            var cell = document.createElement('td');
                            if(typeof column.type !== 'undefined'){
                                if(column.type == 'text'){
                                    cell.innerHTML = fieldValue;
                                    cell.id = 'r'+ idRow + 'c'+cellID
                                    cellID++;
                                }
                                if(column.type == 'image'){
                                    var img = document.createElement('img');
                                    img.src = fieldValue;
                                    img.className = 'gridtableimg'
                                    cell.appendChild(img);
                                }
                                
                            }
                            row.appendChild(cell);
                        }
                    });

                    if(this.settings.buttons !== 'undefined'){
                        //buttons edit and delete
                        var divButtons = document.createElement('div');
                        divButtons.className = 'gridDivButtons'
                        var buttons = this.settings.buttons
            
                        if(buttons.edit.visible == true){
                            var editButton = document.createElement('button');
                            var imgEditButton = document.createElement('img');
                           
                            editButton.appendChild(imgEditButton);
                            editButton.id=  idRow;
                            var toggleEditButton = true;

                            //Edit button fuction
                            editButton.onclick = function(){
                                if(toggleEditButton == true){
                                    for(var i=1;i<=4;i++){
                                        var td = document.getElementById('r'+ editButton.id +'c'+ i);
                                        var input = document.createElement('input');
                                        input.id = 'input' + td.id;
                                        input.className = 'gridtable'
                                        td.appendChild(input);
                                   }
                                   
                                   toggleEditButton = false;
                                }
                                else{
                                    if(toggleEditButton == false){
                                        for(var i=1;i<=4;i++){
                                            var input = document.getElementById('input'+'r'+ editButton.id + 'c'+ i );
                                            var td = document.getElementById('r'+ editButton.id +'c'+ i);
                                            if(input.value !== ''){
                                                td.innerHTML = input.value;
                                            }
                                            else{
                                                td.removeChild(input);
                                            }
                                       }
                                       imgEditButton.src = 'images/edit.png'
                                       toggleEditButton = true;
                                    }
                                }
                            }

                            divButtons.appendChild(editButton);
                        }
                        if(buttons.delete.visible == true){
                            var deleteButton = document.createElement('button');
                            var imgDeleteButton = document.createElement('img');
                          
                            deleteButton.appendChild(imgDeleteButton);
                            deleteButton.id =  idRow;
                            //Delete button fuction
                            deleteButton.onclick = function(){
                                console.log('Deleting..' + idRow);
                                tbody.removeChild(row)

                            }
                            divButtons.appendChild(deleteButton);
            
                        } 
                        row.appendChild(divButtons);
                    }
                   
                    tbody.appendChild(row);

                });
                this.table.appendChild(tbody);
            }
            //main grid div (table)
            var divGridMain = document.createElement('div');
            divGridMain.className = 'gridmain';
            divGridMain.appendChild(this.table);
            //grid div 
            var divGrid = document.createElement('div');
            divGrid.className = 'grid';
            divGrid.appendChild(divGridSearch);
            divGrid.appendChild(divGridMain);
            //add to parent div
            this.parentDiv.appendChild(divGrid);//add table to div
             
        }
        else
        console.error('Missing columns info');
        

    }
    else
    console.error('Could not find a parent div'+ this.parentDivID);
}

 

function searchUser(){
    var input, filter, table,tbody, tr, i,txtValue;
    input = document.getElementById('inputtextsearch');
    filter = input.value;
    table=document.getElementById('gridusers');
    
    tr=table.getElementsByTagName('tr');

    for(var i=0;i<tr.length;i++){
            txtValue = tr[i].textContent || tr[i].innerText;
            if(txtValue.indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
            console.log(txtValue.indexOf(filter))
    }
}
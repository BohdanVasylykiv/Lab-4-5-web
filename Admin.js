
function saveNews(){
    localStorage.setItem('newss', JSON.stringify(newss));

function loadNewss(){
    if (localStorage.getItem('newss')) newss = JSON.parse(localStorage.getItem('newss'));
    showNewss();

function showNewss (){
    let commentField = document.getElementById('news-field');
    let out = '';
    newss.forEach(function(item){
    
        out += `<div class="col-md-3"><div class="col-xs" style="border: 1px solid"><img src="img/empty.jpg" width="100%"><div class="panel"><div class="panel-heading" style="background: #EAEAEA">`;          
        out += `<p style="height: 75px;overflow: auto;">${item.Title}</p>`;
        out += `</div><div class="panel-body">`;
       
        out += `<p style="height: 200px;overflow: auto;">${item.Text}</p>`;
        out += `</div></div></div></div>`;
            
    });
    commentField.innerHTML = out;
 
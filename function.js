function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}
function saveNews(){
    localStorage.setItem('newss', JSON.stringify(newss));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}
function loadNewss(){
    if (localStorage.getItem('newss')) newss = JSON.parse(localStorage.getItem('newss'));
    showNewss();
}

function showComments (){
    if (navigator.onLine) {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
    
		out += `<blockquote class="blockquote">${item.body}
         <footer><p class=pull-left>${timeConverter(item.time)}</p>
         <p class=pull-right style="font-size: 16px;">HelgX</p></footer></blockquote> <hr>`;			
    });
    commentField.innerHTML = out;

}
}
function showNewss (){
     if (navigator.onLine) {
    let commentField = document.getElementById('news-field');
    let out = '';
    newss.forEach(function(item){
    
        out += `<div class="col-md-3"><div class="col-xs" style="border: 1px solid"><img src="empty_news.jpg" width="100%"><div class="panel"><div class="panel-heading" style="background: #EAEAEA">`;          
        out += `<p style="height: 75px;overflow: auto;">${item.Title}</p>`;
        out += `</div><div class="panel-body">`;
       
        out += `<p style="height: 200px;overflow: auto;">${item.Text}</p>`;
        out += `</div></div></div></div>`;
            
    });
    commentField.innerHTML = out;

}
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
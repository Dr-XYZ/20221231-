let thing =document.getElementById('thing')
let date = document.getElementById('date')
let time = document.getElementById('time')
let add = document.getElementById('add')
let del = document.getElementById('del')
let list = document.getElementById('list')

const listContent=[]


function post () {
    let htmlStr=''
    listContent.forEach(function(item){
    
        htmlStr= htmlStr+ `
        <div class="list" id="list">
           <div>     
                <p>內容：${item.thing}</p>
            <p>時間：${item.date} ${item.time}</p>
                <hr>
            </div>
        </div>
        `
       
    })
    list.innerHTML = htmlStr
}




add.addEventListener('click',function(){
    listContent.unshift({
        thing: thing.value,
        date: date.value,
        time: time.value
      })
      post()
    })

del.addEventListener('click',function(){
    listContent.shift({
        thing: thing.value,
        date: date.value,
        time: time.value
      })
    post()
   
})


try {
    //這範例使用 Google 廣告的 js，當然也可以替換成其他廣告商的 js
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
        method: "HEAD"
    })).then(function (response) {
        if (!response.ok) {
            //偵測到廣告阻擋執行
            alert("偵測到廣告阻擋！！！");
        } else {
            alert("沒有偵測到廣告阻擋。");
        }
    }).catch(function (e) {
        //偵測到廣告阻擋執行
        alert("偵測到廣告阻擋！！！");
    });
} catch (e) {
    //偵測到廣告阻擋執行
    alert("偵測到廣告阻擋！！！");
}
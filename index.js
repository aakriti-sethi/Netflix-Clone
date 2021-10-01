// fetch("jumbo.json")
// .then(response => response.json())
// .then(data => {
//     for(var i=0; i<data.length; i++){
//         document.getElementById("1").innerHTML = data[0].title + "<br/>" + data[0].subTitle + "<br/>";
//     }
//     for(var i=0; i<data.length; i++){
//         document.getElementById("2").innerHTML = data[1].title + "<br/>" + data[1].subTitle + "<br/>";
//     }
//     for(var i=0; i<data.length; i++){
//         document.getElementById("3").innerHTML = data[2].title + "<br/>" + data[2].subTitle + "<br/>";
//     }
//     // console.log(data.title);
    
//     // document.getElementById("1").innerHTML = data.title;
// })

fetch("jumbo.json")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].title + '<br/><br/>' + data[i].subTitle + '<br/><br/>' ;
        mainContainer.appendChild(div);
    }
}


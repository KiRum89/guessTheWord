document.body.style.border = "5px solid red";
var h=document.createTextNode('Hello World');
document.body.appendChild(h);



for (i=0;i<document.body.childNodes.length;++i){
	alert(document.body.childNodes[i].textContent);
}

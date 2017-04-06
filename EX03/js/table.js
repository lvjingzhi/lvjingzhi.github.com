/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 13:44:52
 * @version $Id$
 */

function changecolor()
{
	var obj = document.getElementById("tbl");
    obj.style.backgroundColor= "red";
}
function changetime()
{
	var d= new Date()
	document.getElementById("p1").innerHTML=d;
}
function addpara()
{
	var para=document.createElement("p");
    var node=document.createTextNode("new para!");
    para.appendChild(node);
    var element=document.getElementById("tbl");
    element.appendChild(para);
}
function delpara()
{
	var x=document.getElementById("t");
    x.parentNode.removeChild(x)
}
function show_coords(event)
{
var x=event.clientX
var y=event.clientY
alert("X : " + x + ", Y : " + y)
}
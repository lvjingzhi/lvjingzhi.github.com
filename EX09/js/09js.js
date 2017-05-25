/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-05 08:19:16
 * @version $Id$
 */

var map = new BMap.Map("myMap");
var point = new BMap.Point(120.154, 30.250);
map.enableScrollWheelZoom();
map.centerAndZoom(point, 15);
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州市");
var local = new BMap.LocalSearch(map, {
renderOptions: {
map: map,
autoViewport: true
}
});
local.searchNearby('宾馆',point,3000);
var index = 0;
	var myGeo = new BMap.Geocoder();
	var adds = [
		"浙江省杭州市余杭区塘南路附近"
		
	];
	function bdGEO(){
		var add = adds[index];
		geocodeSearch(add);
		index++;
	}
	function geocodeSearch(add){
		if(index < adds.length){
			setTimeout(window.bdGEO,400);
		} 
		myGeo.getPoint(add, function(point){
			if (point) {
				document.getElementById("result").innerHTML +=  index + "、" + add + ":" + point.lng + "," + point.lat + "</br>";
				var address = new BMap.Point(point.lng, point.lat);
				addMarker(address,new BMap.Label(index+":"+add,{offset:new BMap.Size(20,-10)}));
			}
		}, "杭州市");
	}
	function addMarker(point,label){
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		marker.setLabel(label);
	}


var start = "杭州师范大学-东南门";
var end = "下城区环城西路2号望湖宾馆1楼(近庆春路)";
var routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME,BMAP_TRANSIT_POLICY_LEAST_TRANSFER,BMAP_TRANSIT_POLICY_LEAST_WALKING,BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
var transit = new BMap.TransitRoute(map, {
renderOptions: {map: map},
policy: 0
});
$("#result").click(function(){
map.clearOverlays();
var i = $("#driving_way select").val();
search(start,end,routePolicy[i]);
function search(start,end,route){
	transit.setPolicy(route);
	transit.search(start,end);
}
});
var canteencontent="<div style=' width: 300px;height: 200px;  padding: 10px;'> <img src='' alt='食堂' style='width: inherit;height: 120px;'> <div style=' font-weight: bold; font-size: 20px;'>食堂</div> <div>食堂</div> <div style='  display: flex;justify-content: center;align-items: center;    border-radius: 5px;    opacity: 0.8;    background-color: #00b3ee;    font-weight: bold;    color: white;margin-left: 200px;height: 30px;'>查看详情 </div> </div>"
var secbuildingcontent="<div style=' width: 300px;height: 200px;  padding: 10px;'> <img src='' alt='恕园2号楼' style='width: inherit;height: 120px;'> <div style=' font-weight: bold; font-size: 20px;'>恕园二号楼</div> <div>魔方？</div> <div style='  display: flex;justify-content: center;align-items: center;    border-radius: 5px;    opacity: 0.8;    background-color: #00b3ee;    font-weight: bold;    color: white;margin-left: 200px;height: 30px;'>查看详情 </div> </div>"
var playgroundcontent="<div style=' width: 300px;height: 200px;  padding: 10px;'> <img src='' alt='操场' style='width: inherit;height: 120px;'> <div style=' font-weight: bold; font-size: 20px;'>操场</div> <div>我不要跑2200</div> <div style='  display: flex;justify-content: center;align-items: center;    border-radius: 5px;    opacity: 0.8;    background-color: #00b3ee;    font-weight: bold;    color: white;margin-left: 200px;height: 30px;'>查看详情 </div> </div>"
var dormcontent="<div style=' width: 300px;height: 200px;  padding: 10px;'> <img src='' alt='博文苑八号楼' style='width: inherit;height: 120px;'> <div style=' font-weight: bold; font-size: 20px;'>博文苑八号楼</div> <div>基地</div> <div style='  display: flex;justify-content: center;align-items: center;    border-radius: 5px;    opacity: 0.8;    background-color: #00b3ee;    font-weight: bold;    color: white;margin-left: 200px;height: 30px;'>查看详情 </div> </div>"

var pointlist=new Array("");
var canteen=new BMap.Point(120.015801,30.29367);
var canteenM=new BMap.Marker(canteen);
var secondbuilding=new BMap.Point(120.020418,30.295728);
var secondbuildingM=new BMap.Marker(secondbuilding);
var playground=new BMap.Point(120.014305,30.295132);
var playgroundM=new BMap.Marker(playground);
var dorm=new BMap.Point(120.015186,30.296387);
var dormM=new BMap.Marker(dorm);
canteenM.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(canteencontent));
})
secondbuildingM.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(secbuildingcontent));

})
playgroundM.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(playgroundcontent));

})
dormM.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(dormcontent));

})
map.addOverlay(canteenM);
map.addOverlay(secondbuildingM);
map.addOverlay(playgroundM);
map.addOverlay(dormM);
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
	// 编写自定义函数,创建标注
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
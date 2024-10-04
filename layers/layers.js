var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_route_leght_1 = new ol.format.GeoJSON();
var features_route_leght_1 = format_route_leght_1.readFeatures(json_route_leght_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_leght_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_leght_1.addFeatures(features_route_leght_1);
var lyr_route_leght_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_leght_1, 
                style: style_route_leght_1,
                popuplayertitle: "route_leght",
                interactive: true,
                title: '<img src="styles/legend/route_leght_1.png" /> route_leght'
            });

lyr_OSMStandard_0.setVisible(true);lyr_route_leght_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_route_leght_1];
lyr_route_leght_1.set('fieldAliases', {'length': 'length', });
lyr_route_leght_1.set('fieldImages', {'length': 'TextEdit', });
lyr_route_leght_1.set('fieldLabels', {'length': 'header label - always visible', });
lyr_route_leght_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
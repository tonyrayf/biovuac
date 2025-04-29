var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriWorldImagery_1 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Население',
                interactive: false,
    title: 'Население<br />\
    <img src="styles/legend/_3_0.png" /> 0<br />\
    <img src="styles/legend/_3_1.png" /> 2867<br />\
    <img src="styles/legend/_3_2.png" /> 3050<br />\
    <img src="styles/legend/_3_3.png" /> 3501<br />\
    <img src="styles/legend/_3_4.png" /> 4127<br />\
    <img src="styles/legend/_3_5.png" /> 4296<br />\
    <img src="styles/legend/_3_6.png" /> 4425<br />\
    <img src="styles/legend/_3_7.png" /> 4452<br />\
    <img src="styles/legend/_3_8.png" /> 4664<br />\
    <img src="styles/legend/_3_9.png" /> 4719<br />\
    <img src="styles/legend/_3_10.png" /> 7896<br />\
    <img src="styles/legend/_3_11.png" /> 8056<br />\
    <img src="styles/legend/_3_12.png" /> 8615<br />\
    <img src="styles/legend/_3_13.png" /> 9046<br />\
    <img src="styles/legend/_3_14.png" /> 10102<br />\
    <img src="styles/legend/_3_15.png" /> 11703<br />\
    <img src="styles/legend/_3_16.png" /> 12814<br />\
    <img src="styles/legend/_3_17.png" /> 13680<br />\
    <img src="styles/legend/_3_18.png" /> 14098<br />\
    <img src="styles/legend/_3_19.png" /> 17181<br />\
    <img src="styles/legend/_3_20.png" /> 17240<br />\
    <img src="styles/legend/_3_21.png" /> 20387<br />\
    <img src="styles/legend/_3_22.png" /> 21660<br />\
    <img src="styles/legend/_3_23.png" /> 23195<br />\
    <img src="styles/legend/_3_24.png" /> 25133<br />\
    <img src="styles/legend/_3_25.png" /> 25219<br />\
    <img src="styles/legend/_3_26.png" /> 25257<br />\
    <img src="styles/legend/_3_27.png" /> 26771<br />\
    <img src="styles/legend/_3_28.png" /> 31268<br />\
    <img src="styles/legend/_3_29.png" /> 34052<br />\
    <img src="styles/legend/_3_30.png" /> 39755<br />\
    <img src="styles/legend/_3_31.png" /> 42624<br />\
    <img src="styles/legend/_3_32.png" /> 75972<br />\
    <img src="styles/legend/_3_33.png" /> 82766<br />\
    <img src="styles/legend/_3_34.png" /> 295546<br />\
    <img src="styles/legend/_3_35.png" /> <br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Границы Районов',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Границы Районов'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
cluster__5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__5
});
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:cluster__5, 
                style: style__5,
                popuplayertitle: 'Гостиницы',
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Гостиницы'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Название районов',
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> Название районов'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_EsriWorldImagery_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_EsriWorldImagery_1,lyr_OpenStreetMap_2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__3.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'CLCODE': 'CLCODE', 'CLNAME': 'CLNAME', 'OBJECTNUMB': 'OBJECTNUMB', 'ANGLE': 'ANGLE', 'TEXT': 'TEXT', 'SC_9': 'SC_9', 'SC_38': 'SC_38', 'SC_232': 'SC_232', 'SC_234': 'SC_234', 'SC_32809': 'SC_32809', 'layer': 'layer', 'path': 'path', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'CLCODE': 'CLCODE', 'CLNAME': 'CLNAME', 'OBJECTNUMB': 'OBJECTNUMB', 'ANGLE': 'ANGLE', 'TEXT': 'TEXT', 'SC_9': 'SC_9', 'SC_38': 'SC_38', 'SC_232': 'SC_232', 'SC_234': 'SC_234', 'SC_32809': 'SC_32809', 'layer': 'layer', 'path': 'path', });
lyr__5.set('fieldAliases', {'id': 'id', 'Назва': 'Назва', 'Район': 'Район', 'Рейти': 'Рейти', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'CLCODE': 'CLCODE', 'CLNAME': 'CLNAME', 'OBJECTNUMB': 'OBJECTNUMB', 'ANGLE': 'ANGLE', 'TEXT': 'TEXT', 'SC_9': 'SC_9', 'SC_38': 'SC_38', 'SC_232': 'SC_232', 'SC_234': 'SC_234', 'SC_32809': 'SC_32809', 'layer': 'layer', 'path': 'path', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'CLCODE': 'Range', 'CLNAME': 'TextEdit', 'OBJECTNUMB': 'Range', 'ANGLE': 'TextEdit', 'TEXT': 'TextEdit', 'SC_9': 'TextEdit', 'SC_38': 'TextEdit', 'SC_232': 'TextEdit', 'SC_234': 'TextEdit', 'SC_32809': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'CLCODE': 'Range', 'CLNAME': 'TextEdit', 'OBJECTNUMB': 'Range', 'ANGLE': 'TextEdit', 'TEXT': 'TextEdit', 'SC_9': 'TextEdit', 'SC_38': 'TextEdit', 'SC_232': 'TextEdit', 'SC_234': 'TextEdit', 'SC_32809': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'Назва': '', 'Район': 'TextEdit', 'Рейти': '', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'CLCODE': 'Range', 'CLNAME': 'TextEdit', 'OBJECTNUMB': 'Range', 'ANGLE': 'TextEdit', 'TEXT': 'TextEdit', 'SC_9': 'TextEdit', 'SC_38': 'TextEdit', 'SC_232': 'TextEdit', 'SC_234': 'TextEdit', 'SC_32809': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'CLCODE': 'no label', 'CLNAME': 'no label', 'OBJECTNUMB': 'no label', 'ANGLE': 'no label', 'TEXT': 'no label', 'SC_9': 'no label', 'SC_38': 'no label', 'SC_232': 'no label', 'SC_234': 'no label', 'SC_32809': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'CLCODE': 'no label', 'CLNAME': 'no label', 'OBJECTNUMB': 'no label', 'ANGLE': 'no label', 'TEXT': 'no label', 'SC_9': 'no label', 'SC_38': 'no label', 'SC_232': 'no label', 'SC_234': 'no label', 'SC_32809': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__5.set('fieldLabels', {'id': 'no label', 'Назва': 'no label', 'Район': 'no label', 'Рейти': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'CLCODE': 'no label', 'CLNAME': 'no label', 'OBJECTNUMB': 'no label', 'ANGLE': 'no label', 'TEXT': 'no label', 'SC_9': 'no label', 'SC_38': 'no label', 'SC_232': 'no label', 'SC_234': 'no label', 'SC_32809': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
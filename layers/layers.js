ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.226672, -7.918076, 110.255669, -7.902155]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dusun_Sidorejo2_1 = new ol.format.GeoJSON();
var features_Dusun_Sidorejo2_1 = format_Dusun_Sidorejo2_1.readFeatures(json_Dusun_Sidorejo2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dusun_Sidorejo2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun_Sidorejo2_1.addFeatures(features_Dusun_Sidorejo2_1);
var lyr_Dusun_Sidorejo2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dusun_Sidorejo2_1, 
                style: style_Dusun_Sidorejo2_1,
                popuplayertitle: "Dusun_Sidorejo2",
                interactive: true,
                title: '<img src="styles/legend/Dusun_Sidorejo2_1.png" /> Dusun_Sidorejo2'
            });
var format_RT_Tubin_2 = new ol.format.GeoJSON();
var features_RT_Tubin_2 = format_RT_Tubin_2.readFeatures(json_RT_Tubin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_Tubin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_Tubin_2.addFeatures(features_RT_Tubin_2);
var lyr_RT_Tubin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_Tubin_2, 
                style: style_RT_Tubin_2,
                popuplayertitle: "RT_Tubin",
                interactive: true,
    title: 'RT_Tubin<br />\
    <img src="styles/legend/RT_Tubin_2_0.png" /> 33<br />\
    <img src="styles/legend/RT_Tubin_2_1.png" /> 34<br />\
    <img src="styles/legend/RT_Tubin_2_2.png" /> 35<br />\
    <img src="styles/legend/RT_Tubin_2_3.png" /> 36<br />\
    <img src="styles/legend/RT_Tubin_2_4.png" /> 37<br />\
    <img src="styles/legend/RT_Tubin_2_5.png" /> 38<br />\
    <img src="styles/legend/RT_Tubin_2_6.png" /> <br />'
        });
var format_jalan_tubin2_3 = new ol.format.GeoJSON();
var features_jalan_tubin2_3 = format_jalan_tubin2_3.readFeatures(json_jalan_tubin2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalan_tubin2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_tubin2_3.addFeatures(features_jalan_tubin2_3);
var lyr_jalan_tubin2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_tubin2_3, 
                style: style_jalan_tubin2_3,
                popuplayertitle: "jalan_tubin2",
                interactive: true,
                title: '<img src="styles/legend/jalan_tubin2_3.png" /> jalan_tubin2'
            });
var format_tambahan_rumah_tubin_basis_gmap_4 = new ol.format.GeoJSON();
var features_tambahan_rumah_tubin_basis_gmap_4 = format_tambahan_rumah_tubin_basis_gmap_4.readFeatures(json_tambahan_rumah_tubin_basis_gmap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tambahan_rumah_tubin_basis_gmap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambahan_rumah_tubin_basis_gmap_4.addFeatures(features_tambahan_rumah_tubin_basis_gmap_4);
var lyr_tambahan_rumah_tubin_basis_gmap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambahan_rumah_tubin_basis_gmap_4, 
                style: style_tambahan_rumah_tubin_basis_gmap_4,
                popuplayertitle: "tambahan_rumah_tubin_basis_gmap",
                interactive: true,
                title: '<img src="styles/legend/tambahan_rumah_tubin_basis_gmap_4.png" /> tambahan_rumah_tubin_basis_gmap'
            });
var format_Clipped_5 = new ol.format.GeoJSON();
var features_Clipped_5 = format_Clipped_5.readFeatures(json_Clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_5.addFeatures(features_Clipped_5);
var lyr_Clipped_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_5, 
                style: style_Clipped_5,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_5.png" /> Clipped'
            });
var format_CakrukPosRonda_6 = new ol.format.GeoJSON();
var features_CakrukPosRonda_6 = format_CakrukPosRonda_6.readFeatures(json_CakrukPosRonda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CakrukPosRonda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CakrukPosRonda_6.addFeatures(features_CakrukPosRonda_6);
var lyr_CakrukPosRonda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CakrukPosRonda_6, 
                style: style_CakrukPosRonda_6,
                popuplayertitle: "Cakruk Pos Ronda",
                interactive: true,
                title: '<img src="styles/legend/CakrukPosRonda_6.png" /> Cakruk Pos Ronda'
            });
var format_tempatIbadahTubin_7 = new ol.format.GeoJSON();
var features_tempatIbadahTubin_7 = format_tempatIbadahTubin_7.readFeatures(json_tempatIbadahTubin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tempatIbadahTubin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatIbadahTubin_7.addFeatures(features_tempatIbadahTubin_7);
var lyr_tempatIbadahTubin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatIbadahTubin_7, 
                style: style_tempatIbadahTubin_7,
                popuplayertitle: "tempatIbadahTubin",
                interactive: true,
                title: '<img src="styles/legend/tempatIbadahTubin_7.png" /> tempatIbadahTubin'
            });
var format_makamTubin_8 = new ol.format.GeoJSON();
var features_makamTubin_8 = format_makamTubin_8.readFeatures(json_makamTubin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_makamTubin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makamTubin_8.addFeatures(features_makamTubin_8);
var lyr_makamTubin_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_makamTubin_8, 
                style: style_makamTubin_8,
                popuplayertitle: "makamTubin",
                interactive: true,
                title: '<img src="styles/legend/makamTubin_8.png" /> makamTubin'
            });
var format_dukuhTubin_9 = new ol.format.GeoJSON();
var features_dukuhTubin_9 = format_dukuhTubin_9.readFeatures(json_dukuhTubin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_dukuhTubin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dukuhTubin_9.addFeatures(features_dukuhTubin_9);
var lyr_dukuhTubin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dukuhTubin_9, 
                style: style_dukuhTubin_9,
                popuplayertitle: "dukuhTubin",
                interactive: true,
                title: '<img src="styles/legend/dukuhTubin_9.png" /> dukuhTubin'
            });
var format_pendidikanTubin_10 = new ol.format.GeoJSON();
var features_pendidikanTubin_10 = format_pendidikanTubin_10.readFeatures(json_pendidikanTubin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pendidikanTubin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikanTubin_10.addFeatures(features_pendidikanTubin_10);
var lyr_pendidikanTubin_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikanTubin_10, 
                style: style_pendidikanTubin_10,
                popuplayertitle: "pendidikanTubin",
                interactive: true,
                title: '<img src="styles/legend/pendidikanTubin_10.png" /> pendidikanTubin'
            });
var format_lapanganTubin_11 = new ol.format.GeoJSON();
var features_lapanganTubin_11 = format_lapanganTubin_11.readFeatures(json_lapanganTubin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lapanganTubin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapanganTubin_11.addFeatures(features_lapanganTubin_11);
var lyr_lapanganTubin_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapanganTubin_11, 
                style: style_lapanganTubin_11,
                popuplayertitle: "lapanganTubin",
                interactive: true,
                title: '<img src="styles/legend/lapanganTubin_11.png" /> lapanganTubin'
            });
var format_gedungSeniTubin_12 = new ol.format.GeoJSON();
var features_gedungSeniTubin_12 = format_gedungSeniTubin_12.readFeatures(json_gedungSeniTubin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gedungSeniTubin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedungSeniTubin_12.addFeatures(features_gedungSeniTubin_12);
var lyr_gedungSeniTubin_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gedungSeniTubin_12, 
                style: style_gedungSeniTubin_12,
                popuplayertitle: "gedungSeniTubin",
                interactive: true,
                title: '<img src="styles/legend/gedungSeniTubin_12.png" /> gedungSeniTubin'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dusun_Sidorejo2_1.setVisible(true);lyr_RT_Tubin_2.setVisible(true);lyr_jalan_tubin2_3.setVisible(true);lyr_tambahan_rumah_tubin_basis_gmap_4.setVisible(true);lyr_Clipped_5.setVisible(true);lyr_CakrukPosRonda_6.setVisible(true);lyr_tempatIbadahTubin_7.setVisible(true);lyr_makamTubin_8.setVisible(true);lyr_dukuhTubin_9.setVisible(true);lyr_pendidikanTubin_10.setVisible(true);lyr_lapanganTubin_11.setVisible(true);lyr_gedungSeniTubin_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dusun_Sidorejo2_1,lyr_RT_Tubin_2,lyr_jalan_tubin2_3,lyr_tambahan_rumah_tubin_basis_gmap_4,lyr_Clipped_5,lyr_CakrukPosRonda_6,lyr_tempatIbadahTubin_7,lyr_makamTubin_8,lyr_dukuhTubin_9,lyr_pendidikanTubin_10,lyr_lapanganTubin_11,lyr_gedungSeniTubin_12];
lyr_Dusun_Sidorejo2_1.set('fieldAliases', {'KAL_KEL': 'KAL_KEL', 'KEC_KAPN': 'KEC_KAPN', 'KAB_KOTA': 'KAB_KOTA', 'DUSUN': 'DUSUN', });
lyr_RT_Tubin_2.set('fieldAliases', {'id': 'id', });
lyr_jalan_tubin2_3.set('fieldAliases', {'id': 'id', });
lyr_tambahan_rumah_tubin_basis_gmap_4.set('fieldAliases', {'id': 'id', });
lyr_Clipped_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'building': 'building', 'addr_house': 'addr_house', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'access_roo': 'access_roo', 'name': 'name', });
lyr_CakrukPosRonda_6.set('fieldAliases', {'nama': 'nama', });
lyr_tempatIbadahTubin_7.set('fieldAliases', {'nama': 'nama', });
lyr_makamTubin_8.set('fieldAliases', {'nama': 'nama', });
lyr_dukuhTubin_9.set('fieldAliases', {'nama': 'nama', });
lyr_pendidikanTubin_10.set('fieldAliases', {'nama': 'nama', });
lyr_lapanganTubin_11.set('fieldAliases', {'nama': 'nama', });
lyr_gedungSeniTubin_12.set('fieldAliases', {'nama': 'nama', });
lyr_Dusun_Sidorejo2_1.set('fieldImages', {'KAL_KEL': 'TextEdit', 'KEC_KAPN': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'DUSUN': 'TextEdit', });
lyr_RT_Tubin_2.set('fieldImages', {'id': 'TextEdit', });
lyr_jalan_tubin2_3.set('fieldImages', {'id': 'TextEdit', });
lyr_tambahan_rumah_tubin_basis_gmap_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Clipped_5.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'roof_mater': 'TextEdit', 'building_m': 'TextEdit', 'access_roo': 'TextEdit', 'name': 'TextEdit', });
lyr_CakrukPosRonda_6.set('fieldImages', {'nama': 'TextEdit', });
lyr_tempatIbadahTubin_7.set('fieldImages', {'nama': 'TextEdit', });
lyr_makamTubin_8.set('fieldImages', {'nama': 'TextEdit', });
lyr_dukuhTubin_9.set('fieldImages', {'nama': 'TextEdit', });
lyr_pendidikanTubin_10.set('fieldImages', {'nama': 'TextEdit', });
lyr_lapanganTubin_11.set('fieldImages', {'nama': 'TextEdit', });
lyr_gedungSeniTubin_12.set('fieldImages', {'nama': 'TextEdit', });
lyr_Dusun_Sidorejo2_1.set('fieldLabels', {'KAL_KEL': 'no label', 'KEC_KAPN': 'no label', 'KAB_KOTA': 'no label', 'DUSUN': 'no label', });
lyr_RT_Tubin_2.set('fieldLabels', {'id': 'no label', });
lyr_jalan_tubin2_3.set('fieldLabels', {'id': 'no label', });
lyr_tambahan_rumah_tubin_basis_gmap_4.set('fieldLabels', {'id': 'no label', });
lyr_Clipped_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'addr_house': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'access_roo': 'no label', 'name': 'no label', });
lyr_CakrukPosRonda_6.set('fieldLabels', {'nama': 'no label', });
lyr_tempatIbadahTubin_7.set('fieldLabels', {'nama': 'no label', });
lyr_makamTubin_8.set('fieldLabels', {'nama': 'no label', });
lyr_dukuhTubin_9.set('fieldLabels', {'nama': 'no label', });
lyr_pendidikanTubin_10.set('fieldLabels', {'nama': 'no label', });
lyr_lapanganTubin_11.set('fieldLabels', {'nama': 'no label', });
lyr_gedungSeniTubin_12.set('fieldLabels', {'nama': 'no label', });
lyr_gedungSeniTubin_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
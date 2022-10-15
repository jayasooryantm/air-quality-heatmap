mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1LXN1c3RhaW5hYmxlLWZ1dHVyZSIsImEiOiJjbDRwcHBhczMwMWU2M2NuNXphaHB5OGQ3In0.RnWzelAzigZITX1UWWZiPQ';
const map = new mapboxgl.Map({
    container: 'pm25',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0.15236444437576863, 52.19242761257672],
    zoom: 8
});

map.on('load', () => {
    map.addSource('datas', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1523644443757686,
                            52.19242761257672
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 36,
                        "PM25_cs1": 5,
                        "PM10_cs1": 12,
                        "PM10(ppm)_am2": 29,
                        "PM2.5(ppm)_am2": 3,
                        "NO2_cno2": 59.67673
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1474896396651195,
                            52.19281479713661
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 35,
                        "PM25_cs1": 6,
                        "PM10_cs1": 10,
                        "PM10(ppm)_am2": 26,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": 44.99416
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1434327891163849,
                            52.193350253630456
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 10,
                        "PM25_cs1": 6,
                        "PM10_cs1": 9,
                        "PM10(ppm)_am2": 21,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": 66.42213
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1419376497452332,
                            52.195003254932
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 0,
                        "PM25_cs1": 12,
                        "PM10_cs1": 12,
                        "PM10(ppm)_am2": 51,
                        "PM2.5(ppm)_am2": 3,
                        "NO2_cno2": 59.93981
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1393888821300019,
                            52.19583675750498
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 13,
                        "PM25_cs1": 5,
                        "PM10_cs1": 8,
                        "PM10(ppm)_am2": 19,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": 43.89928
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1382740915813671,
                            52.19672406577185
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 20,
                        "PM25_cs1": 3,
                        "PM10_cs1": 5,
                        "PM10(ppm)_am2": 53,
                        "PM2.5(ppm)_am2": 3,
                        "NO2_cno2": 74.67951
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1553315880656212,
                            52.196244018597234
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 34,
                        "PM25_cs1": 13,
                        "PM10_cs1": 15,
                        "PM10(ppm)_am2": 21,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1480697733707373,
                            52.19719591925233
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 19,
                        "PM25_cs1": 20,
                        "PM10_cs1": 24,
                        "PM10(ppm)_am2": 29,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": 0
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.143806588358946,
                            52.197875944479335
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 17,
                        "PM25_cs1": 8,
                        "PM10_cs1": 9,
                        "PM10(ppm)_am2": 8,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.1409648810690652,
                            52.1986352826782
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 14,
                        "PM25_cs1": 7,
                        "PM10_cs1": 7,
                        "PM10(ppm)_am2": 21,
                        "PM2.5(ppm)_am2": 3,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.9036173476990964,
                            51.88571883328934
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 26,
                        "PM25_cs1": 9,
                        "PM10_cs1": 11,
                        "PM10(ppm)_am2": 14,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.9064709298931068,
                            51.87876818568202
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 29,
                        "PM25_cs1": 11,
                        "PM10_cs1": 15,
                        "PM10(ppm)_am2": 27,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.908374138825488,
                            51.87727033198446
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 42,
                        "PM25_cs1": 33,
                        "PM10_cs1": 33,
                        "PM10(ppm)_am2": 19,
                        "PM2.5(ppm)_am2": 2,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.9086372140361166,
                            51.86565745154013
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 24,
                        "PM25_cs1": 5,
                        "PM10_cs1": 11,
                        "PM10(ppm)_am2": 13,
                        "PM2.5(ppm)_am2": 3,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.899728067649093,
                            51.88577753745178
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 28,
                        "PM25_cs1": 5,
                        "PM10_cs1": 9,
                        "PM10(ppm)_am2": 21,
                        "PM2.5(ppm)_am2": 4,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.9009114826776904,
                            51.87809070348288
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 21,
                        "PM25_cs1": 4,
                        "PM10_cs1": 7,
                        "PM10(ppm)_am2": 89,
                        "PM2.5(ppm)_am2": 6,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.8982922843095533,
                            51.87317318618642
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 14,
                        "PM25_cs1": 3,
                        "PM10_cs1": 5,
                        "PM10(ppm)_am2": 211,
                        "PM2.5(ppm)_am2": 10,
                        "NO2_cno2": null
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            0.9016432469422004,
                            51.86652604687782
                        ]
                    },
                    "properties": {
                        "NO2(ppm)_am2": 24,
                        "PM25_cs1": 3,
                        "PM10_cs1": 7,
                        "PM10(ppm)_am2": 46,
                        "PM2.5(ppm)_am2": 4,
                        "NO2_cno2": null
                    }
                }
            ]
        }
    });


    // add heatmap layer here
    map.addLayer(
        {
            id: 'datas-heat',
            type: 'heatmap',
            source: 'datas',
            maxzoom: 24,
            paint: {
                // increase weight as diameter breast height increases
                'heatmap-weight': [
                    "interpolate",
                    ["linear"],
                    ["get", "PM2.5(ppm)_am2"],
                    0.0,
                    1.0,
                    2.0,
                    3.0
                ],
                // increase intensity as zoom level increases
                'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 22, 0.8],
                // assign color values be applied to points depending on their density
                'heatmap-color': [
                    "interpolate",
                    ["linear"],
                    ["heatmap-density"],
                    0,
                    "rgba(0, 0, 255, 0.0)",
                    0.1,
                    "skyblue",
                    0.3,
                    "lime",
                    0.4,
                    "yellow",
                    0.6,
                    "orange",
                    10.0,
                    "red",
                    20.0,
                    "crimson"
                ],
                // increase radius as zoom increases
                'heatmap-radius': [
                    "interpolate",
                    ["linear"],
                    ["get", "PM2.5(ppm)_am2"],
                    0.0,
                    10,
                    1.0,
                    20,
                    2.0,
                    30,
                    3.0,
                    40,
                    4.0,
                    50
                ],
                // decrease opacity to transition into the circle layer
                'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0.5, 9, 0.6],
            }
        },
        'waterway-label'
    );
    // add circle layer here
    map.addLayer(
        {
            id: 'pm10-point',
            type: 'circle',
            source: 'datas',
            minzoom: 14,
            paint: {
                // increase the radius of the circle as the zoom level and dbh value increases
                'circle-radius': {
                    property: 'PM2.5(ppm)_am2',
                    type: 'exponential',
                    stops: [
                        [{ zoom: 15, value: 0 }, 5],
                        [{ zoom: 15, value: 62 }, 10],
                        [{ zoom: 22, value: 1 }, 20],
                        [{ zoom: 22, value: 62 }, 50]
                    ]
                },
                'circle-color': {
                    property: 'PM2.5(ppm)_am2',
                    type: 'exponential',
                    stops: [
                        [0, 'rgba(236,222,239,0)'],
                        [10, 'rgb(236,222,239)'],
                        [20, 'rgb(208,209,230)'],
                        [30, 'rgb(166,189,219)'],
                        [40, 'rgb(103,169,207)'],
                        [50, 'rgb(28,144,153)'],
                        [60, 'rgb(1,108,89)']
                    ]
                },
                'circle-stroke-color': 'white',
                'circle-stroke-width': 1,
                'circle-opacity': {
                    stops: [
                        [14, 0],
                        [15, 1]
                    ]
                }
            }
        },
        'waterway-label'
    );


});
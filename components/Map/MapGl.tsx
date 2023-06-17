import React, { useState, useEffect } from 'react';
import Map, { Source, Layer }  from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// @ts-ignore
// import { GeoJsonLayer } from 'deck.gl';


const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ';

const MapGl = () => {

    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        // Fetch the GeoJSON data from the API and set it in the state
        fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson')
            .then((response) => response.json())
            .then((data) => setGeojsonData(data));
    }, []);
console.log(geojsonData)
    return (
        <div style={{ width: 'auto', height: '600px', border: '1px solid black', margin: '10px 5px 10px 5px', padding: '10px' }}>
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 14
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {geojsonData && (
                    <Source type="geojson" data={geojsonData}>
                    <Layer
                      id="line-layer"
                      type="line"
                      paint={{
                        'line-color': 'red',
                        'line-width': 3
                      }}
                    />
                  </Source>
                )}
            </Map>
        </div>
    );
};

export default MapGl;
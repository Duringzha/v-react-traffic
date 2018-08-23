import React, { Component } from 'react';
import MapGL from 'react-map-gl';
export default class vMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                longitude: 113.264994,
                latitude: 23.123126,
                zoom: 14,
                minZoom: 5,
                maxZoom: 22,
                pitch: 0.00,
                bearing: 0.00,
                width: 500,
                height: 500
            },
            data: null
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this._resize.bind(this));
        this._resize();
    }

    _resize() {
        this._onChangeViewport({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    _onChangeViewport(viewport) {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    }
    render() {
        const { viewport, data } = this.state;
        const MAPBOX_TOKEN = "pk.eyJ1IjoiYWt1bGFtYXRhdGEiLCJhIjoiY2psNXdmMzJvMG0zZTNwbjVweGh3MmNoMiJ9.GONZl-UHxRYCR8cY4yDdxg";
        return (
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/akulamatata/cjl69lctp0kk72snfw3hort0f"
                perspectiveEnabled={true}
                onChangeViewport={this._onChangeViewport.bind(this)}
                mapboxApiAccessToken={MAPBOX_TOKEN}>
            </MapGL>
        );
    }
}
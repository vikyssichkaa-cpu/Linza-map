export const MAP_CONFIG = {
  geoJsonPath: "data/Data.geojson",
  initialCenter: [49.41542035, 26.9841635],
  initialZoom: 13,
  minZoom: 11,
  maxZoom: 20,
  maxBoundsPad: 0.08,
  tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  tileAttribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const FEATURE_STYLE = {
  color: "#ff0000",
  weight: 0,
  opacity: 0,
  fillColor: "#ff0000",
  fillOpacity: 0.6,
};

export const FEATURE_HOVER_STYLE = {
  color: "#ff0000",
  weight: 0,
  opacity: 0,
  fillColor: "#ff0000",
  fillOpacity: 0.75,
};

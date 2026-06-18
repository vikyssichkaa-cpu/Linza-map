export const MAP_CONFIG = {
  geoJsonPath: "data/Data.geojson",
  initialCenter: [48.0159, 37.8029],
  initialZoom: 8,
  minZoom: 4,
  maxZoom: 20,
  maxBoundsPad: 0.08,
  tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  tileAttribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const FEATURE_STYLE = {
  color: "#004aad",
  weight: 2,
  opacity: 1,
  fillColor: "#4f72d1",
  fillOpacity: 0.75,
};

export const FEATURE_STYLE_WITH_LINK = {
  color: "#002f86",
  weight: 3,
  opacity: 1,
  fillColor: "#2e5cd3",
  fillOpacity: 0.9,
};

export const FEATURE_HOVER_STYLE = {
  color: "#002f86",
  weight: 3,
  opacity: 1,
  fillColor: "#2e5cd3",
  fillOpacity: 0.95,
};

export const FEATURE_HOVER_STYLE_WITH_LINK = {
  color: "#001f5c",
  weight: 4,
  opacity: 1,
  fillColor: "#1b3bbd",
  fillOpacity: 1,
};

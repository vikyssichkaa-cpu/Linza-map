export const MAP_CONFIG = {
  geoJsonPath: "data/Data.geojson",
  initialCenter: [49.41542035, 26.9841635],
  initialZoom: 13,
  minZoom: 12,
  maxZoom: 20,
  maxBoundsPad: 0.08,
  tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  tileAttribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const FEATURE_STYLE = {
  color: "#666666",
  weight: 1.5,
  opacity: 0.7,
  fillColor: "#707070",
  fillOpacity: 0.75,
};

export const FEATURE_STYLE_WITH_LINK = {
  color: "#004aad",
  weight: 2,
  opacity: 1,
  fillColor: "#004aad",
  fillOpacity: 0.9,
};

export const FEATURE_HOVER_STYLE = {
  color: "#555555",
  weight: 2,
  opacity: 0.9,
  fillColor: "#707070",
  fillOpacity: 0.95,
};

export const FEATURE_HOVER_STYLE_WITH_LINK = {
  color: "#004aad",
  weight: 3,
  opacity: 1,
  fillColor: "#004aad",
  fillOpacity: 0.98,
};

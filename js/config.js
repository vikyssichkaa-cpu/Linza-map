export const MAP_CONFIG = {
  geoJsonPath: "data/Data.geojson",
  initialCenter: [49.41542035, 26.9841635],
  initialZoom: 15,
  minZoom: 13,
  maxZoom: 20,
  maxBoundsPad: 0.08,
  tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  tileAttribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const FEATURE_STYLE = {
  color: "#004aad",
  weight: 0,
  opacity: 0,
  fillColor: "#004aad",
  fillOpacity: 0.6,
};

export const FEATURE_STYLE_WITH_LINK = {
  color: "#003399",
  weight: 0,
  opacity: 0,
  fillColor: "#003399",
  fillOpacity: 0.6,
};

export const FEATURE_HOVER_STYLE = {
  color: "#004aad",
  weight: 0,
  opacity: 0,
  fillColor: "#004aad",
  fillOpacity: 0.75,
};

export const FEATURE_HOVER_STYLE_WITH_LINK = {
  color: "#003399",
  weight: 0,
  opacity: 0,
  fillColor: "#003399",
  fillOpacity: 0.75,
};

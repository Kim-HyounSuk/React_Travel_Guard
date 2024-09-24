/** GeoJSON */
export interface IGeoJson {
	type: 'FeatureCollection';
	features: IGeoJsonFeature[];
}

/** Feature */
export interface IGeoJsonFeature {
	type: 'Feature';
	properties: IGeoJsonProperties;
	geometry: IGeoJsonGeometry;
	bbox?: [number, number, number, number]; // Optional bounding box
}

/** Properties */
export interface IGeoJsonProperties {
	LEVEL: number;
	TYPE: string; // "Sovereign country" 등
	ADMIN: string; // 국가명
	ISO_A2: string; // ISO 2-letter country code
	ISO_A3: string; // ISO 3-letter country code
	CONTINENT: string;
}

/** Geometry */
export interface IGeoJsonGeometry {
	type: 'Polygon' | 'MultiPolygon';
	coordinates: number[][][] | number[][][][]; // Polygon은 3차원, MultiPolygon은 4차원 배열
}

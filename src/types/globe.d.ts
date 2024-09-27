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
	TYPE: string;
	/** 국가 명 */
	ADMIN: string;
	/** ISO 2-letter country code */
	ISO_A2: string;
	/** ISO 3-letter country code */
	ISO_A3: string;
	/** 대륙 명 */
	CONTINENT: string;
}

/** Geometry */
export interface IGeoJsonGeometry {
	type: 'Polygon' | 'MultiPolygon';
	coordinates: number[][][] | number[][][][]; // Polygon은 3차원, MultiPolygon은 4차원 배열
}

/** Country Info */
export interface ICountryInfo {
	/** 국가 이름 */
	name: string;
	/** 대륙 이름 */
	continent: string;
	/** 경보 범위 */
	region_ty: string;
	/** 경보 단계 */
	alam_lvl: number;
	/** 경보 내용 */
	title: string;
	/** ISO_2 */
	id: string;
}

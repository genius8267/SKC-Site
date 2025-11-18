export type ProductId = 'battery' | 'semiconductor' | 'eco';

export interface ProductMetric {
  id: string;
  value: string;
  unit?: string;
}

export interface ProductTechnology {
  id: string;
  icon: string;
}

export interface ProductSpec {
  id: string;
  value: string;
}

export interface ProductApplication {
  id: string;
  icon: string;
}

export const productMetrics: Record<ProductId, ProductMetric[]> = {
  battery: [
    { id: 'energyDensity', value: '420', unit: 'Wh/kg' },
    { id: 'cycleLife', value: '3,000+', unit: 'cycles' },
    { id: 'thickness', value: '2.5-8µm' },
  ],
  semiconductor: [
    { id: 'substrateFlatness', value: '±0.5µm' },
    { id: 'thermalStability', value: '400°C' },
    { id: 'yield', value: '99.3%', unit: 'pilot lines' },
  ],
  eco: [
    { id: 'co2Reduction', value: '-65%', unit: 'vs PET' },
    { id: 'biobasedContent', value: '85%' },
    { id: 'recyclability', value: '100%' },
  ],
};

export const productTechnologies: Record<ProductId, ProductTechnology[]> = {
  battery: [
    { id: 'copperFoil', icon: '🧲' },
    { id: 'siliconAnode', icon: '🧪' },
    { id: 'thermalControl', icon: '❄️' },
  ],
  semiconductor: [
    { id: 'glassSubstrate', icon: '🪟' },
    { id: 'cmpSlurry', icon: '💧' },
    { id: 'advancedPackaging', icon: '📦' },
  ],
  eco: [
    { id: 'pbat', icon: '🌱' },
    { id: 'limex', icon: '🪨' },
    { id: 'chemRecycling', icon: '♻️' },
  ],
};

export const technicalSpecs: Record<ProductId, ProductSpec[]> = {
  battery: [
    { id: 'conductivity', value: '58 MS/m' },
    { id: 'tensileStrength', value: '> 45 kgf/mm²' },
    { id: 'surfaceRoughness', value: '≤ 0.2 µm' },
    { id: 'capacityRetention', value: '92% @ 500 cycles' },
  ],
  semiconductor: [
    { id: 'dielectricConstant', value: '3.2 ± 0.1' },
    { id: 'glassCTE', value: '3 ppm/°C' },
    { id: 'waferSize', value: '300 mm' },
    { id: 'flatness', value: '< 0.5 µm' },
  ],
  eco: [
    { id: 'biodegradation', value: '90 days' },
    { id: 'strength', value: '40 MPa' },
    { id: 'temperatureRange', value: '-20°C to 80°C' },
    { id: 'barrierPerformance', value: 'OTR < 1 cc/m²·day' },
  ],
};

export const applicationAreas: Record<ProductId, ProductApplication[]> = {
  battery: [
    { id: 'ev', icon: '🚗' },
    { id: 'grid', icon: '⚡️' },
    { id: 'aviation', icon: '✈️' },
  ],
  semiconductor: [
    { id: 'hpc', icon: '🖥️' },
    { id: 'mobile', icon: '📱' },
    { id: 'ai', icon: '🧠' },
  ],
  eco: [
    { id: 'packaging', icon: '📦' },
    { id: 'textiles', icon: '👕' },
    { id: 'mobility', icon: '🛴' },
  ],
};

// Mock data generators for volcano monitoring system

export interface SeismicReading {
  timestamp: string;
  magnitude: number;
  depth: number;
}

export interface GasEmissionReading {
  timestamp: string;
  so2: number;
  co2: number;
  h2s: number;
}

export interface ThermalReading {
  timestamp: string;
  temperature: number;
  thermalAnomaly: number;
}

export interface VolcanoStatus {
  name: string;
  location: { lat: number; lng: number };
  alertLevel: 1 | 2 | 3 | 4 | 5;
  lastEruption: string;
  status: string;
}

export function generateSeismicData(hours: number = 24): SeismicReading[] {
  const data: SeismicReading[] = [];
  const now = new Date();
  
  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      timestamp: timestamp.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      magnitude: Math.random() * 4 + 1,
      depth: Math.random() * 20 + 5
    });
  }
  
  return data;
}

export function generateGasData(hours: number = 24): GasEmissionReading[] {
  const data: GasEmissionReading[] = [];
  const now = new Date();
  
  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      timestamp: timestamp.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      so2: Math.random() * 100 + 20,
      co2: Math.random() * 500 + 100,
      h2s: Math.random() * 50 + 10
    });
  }
  
  return data;
}

export function generateThermalData(hours: number = 24): ThermalReading[] {
  const data: ThermalReading[] = [];
  const now = new Date();
  
  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      timestamp: timestamp.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      temperature: Math.random() * 800 + 200,
      thermalAnomaly: Math.random() * 10 + 1
    });
  }
  
  return data;
}

export function getCurrentReadings() {
  return {
    seismic: {
      magnitude: (Math.random() * 3 + 1).toFixed(1),
      events: Math.floor(Math.random() * 50 + 10),
      depth: (Math.random() * 20 + 5).toFixed(1)
    },
    thermal: {
      temperature: Math.floor(Math.random() * 800 + 200),
      anomaly: (Math.random() * 10 + 1).toFixed(1),
      hotSpots: Math.floor(Math.random() * 5 + 1)
    },
    gas: {
      so2: Math.floor(Math.random() * 100 + 20),
      co2: Math.floor(Math.random() * 500 + 100),
      pressure: (Math.random() * 2 + 0.5).toFixed(2)
    }
  };
}

export function getVolcanoes(): VolcanoStatus[] {
  return [
    {
      name: "Mount Vesuvius",
      location: { lat: 40.8218, lng: 14.4281 },
      alertLevel: 2,
      lastEruption: "1944",
      status: "Elevated Activity"
    },
    {
      name: "Mount Etna",
      location: { lat: 37.7510, lng: 14.9934 },
      alertLevel: 3,
      lastEruption: "2024",
      status: "Active Eruption"
    },
    {
      name: "Yellowstone",
      location: { lat: 44.4280, lng: -110.5885 },
      alertLevel: 1,
      lastEruption: "70,000 BCE",
      status: "Normal Activity"
    },
    {
      name: "Mount St. Helens",
      location: { lat: 46.1912, lng: -122.1944 },
      alertLevel: 2,
      lastEruption: "2008",
      status: "Monitoring"
    }
  ];
}
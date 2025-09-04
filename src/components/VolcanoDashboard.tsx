import { useEffect, useState } from "react";
import { DataCard } from "@/components/DataCard";
import { SeismicChart } from "@/components/SeismicChart";
import { AlertLevel } from "@/components/AlertLevel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Thermometer, 
  Zap, 
  AlertTriangle,
  TrendingUp,
  Eye,
  Mountain
} from "lucide-react";
import { 
  generateSeismicData, 
  generateGasData, 
  generateThermalData, 
  getCurrentReadings,
  getVolcanoes
} from "@/lib/mockData";

export function VolcanoDashboard() {
  const [seismicData, setSeismicData] = useState(generateSeismicData(12));
  const [gasData, setGasData] = useState(generateGasData(12));
  const [thermalData, setThermalData] = useState(generateThermalData(12));
  const [currentData, setCurrentData] = useState(getCurrentReadings());
  const [volcanoes] = useState(getVolcanoes());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData(getCurrentReadings());
      
      // Add new data points
      setSeismicData(prev => {
        const newData = [...prev.slice(1)];
        const now = new Date();
        newData.push({
          timestamp: now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          }),
          magnitude: Math.random() * 4 + 1,
          depth: Math.random() * 20 + 5
        });
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Current Alert Status */}
      <Card className="bg-primary/20 border-primary/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <AlertTriangle className="w-5 h-5" />
            Global Alert Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AlertLevel level={3} className="text-foreground" />
        </CardContent>
      </Card>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DataCard
          title="Seismic Activity"
          value={`${currentData.seismic.magnitude} M`}
          description={`${currentData.seismic.events} events detected`}
          icon={<Activity className="w-4 h-4" />}
          variant="seismic"
          trend="up"
        />
        <DataCard
          title="Thermal Reading"
          value={`${currentData.thermal.temperature}°C`}
          description={`${currentData.thermal.hotSpots} thermal anomalies`}
          icon={<Thermometer className="w-4 h-4" />}
          variant="thermal"
          trend="up"
        />
        <DataCard
          title="Gas Emissions"
          value={`${currentData.gas.so2} ppm`}
          description="SO₂ concentration"
          icon={<Zap className="w-4 h-4" />}
          variant="volcanic"
          trend="stable"
        />
        <DataCard
          title="Prediction Model"
          value="78%"
          description="Eruption probability (7 days)"
          icon={<TrendingUp className="w-4 h-4" />}
          variant="default"
          trend="up"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SeismicChart data={seismicData} />
        
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Monitored Volcanoes</CardTitle>
            <CardDescription>Current status of active volcanic systems</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {volcanoes.map((volcano, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-3">
                  <Mountain className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{volcano.name}</div>
                    <div className="text-sm text-muted-foreground">{volcano.status}</div>
                  </div>
                </div>
                <AlertLevel level={volcano.alertLevel} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ML Predictions */}
      <Card className="bg-card/60 border-border/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            AI Prediction Analysis
          </CardTitle>
          <CardDescription>
            Machine learning models analyzing volcanic patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-2xl font-bold text-primary">94.2%</div>
              <div className="text-sm text-muted-foreground">Pattern Recognition</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-2xl font-bold text-accent">7.3 days</div>
              <div className="text-sm text-muted-foreground">Predicted Timeline</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/40 border border-border/30">
              <div className="text-2xl font-bold text-success">0.85</div>
              <div className="text-sm text-muted-foreground">Model Confidence</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
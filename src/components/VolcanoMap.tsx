import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

// Real volcano data with coordinates and current status
const volcanoes = [
  {
    id: 1,
    name: "Mount Vesuvius",
    country: "Italy",
    lat: 40.821,
    lng: 14.426,
    alertLevel: "Green",
    lastActivity: "1944",
    riskLevel: "Moderate"
  },
  {
    id: 2,
    name: "Mount Fuji",
    country: "Japan", 
    lat: 35.361,
    lng: 138.729,
    alertLevel: "Green",
    lastActivity: "1708",
    riskLevel: "Low"
  },
  {
    id: 3,
    name: "Kilauea",
    country: "Hawaii, USA",
    lat: 19.421,
    lng: -155.287,
    alertLevel: "Orange", 
    lastActivity: "Active",
    riskLevel: "High"
  },
  {
    id: 4,
    name: "Mount Etna",
    country: "Italy",
    lat: 37.751,
    lng: 14.993,
    alertLevel: "Yellow",
    lastActivity: "Active",
    riskLevel: "Moderate"
  },
  {
    id: 5,
    name: "Yellowstone",
    country: "USA",
    lat: 44.428,
    lng: -110.588,
    alertLevel: "Green",
    lastActivity: "640,000 years ago",
    riskLevel: "Low"
  },
  {
    id: 6,
    name: "Mount Krakatoa",
    country: "Indonesia",
    lat: -6.102,
    lng: 105.423,
    alertLevel: "Yellow",
    lastActivity: "2020",
    riskLevel: "High"
  },
  {
    id: 7,
    name: "Popocatépetl",
    country: "Mexico",
    lat: 19.023,
    lng: -98.628,
    alertLevel: "Orange",
    lastActivity: "Active",
    riskLevel: "High"
  },
  {
    id: 8,
    name: "Mount St. Helens",
    country: "USA",
    lat: 46.191,
    lng: -122.194,
    alertLevel: "Green",
    lastActivity: "2008",
    riskLevel: "Moderate"
  }
];

const getAlertColor = (level: string) => {
  switch (level) {
    case 'Red': return 'bg-destructive text-destructive-foreground';
    case 'Orange': return 'bg-warning text-warning-foreground';
    case 'Yellow': return 'bg-accent text-accent-foreground';
    case 'Green': return 'bg-success text-success-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getAlertIcon = (level: string) => {
  switch (level) {
    case 'Red':
    case 'Orange': return <AlertTriangle className="w-4 h-4" />;
    case 'Yellow': return <TrendingUp className="w-4 h-4" />;
    case 'Green': return <CheckCircle className="w-4 h-4" />;
    default: return <MapPin className="w-4 h-4" />;
  }
};

export const VolcanoMap = () => {
  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          Global Volcano Monitoring Network
        </CardTitle>
        <p className="text-muted-foreground">
          Real-time monitoring of major volcanic systems worldwide
        </p>
      </CardHeader>
      <CardContent>
        {/* World Map Representation */}
        <div className="relative w-full h-96 bg-gradient-to-br from-card via-background to-card rounded-lg border border-border/30 mb-6 overflow-hidden">
          {/* Simplified world map background */}
          <div className="absolute inset-0 bg-gradient-seismic opacity-20"></div>
          
          {/* Volcano markers positioned on the "map" */}
          {volcanoes.map((volcano) => (
            <div
              key={volcano.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${((volcano.lng + 180) / 360) * 100}%`,
                top: `${((90 - volcano.lat) / 180) * 100}%`
              }}
            >
              <div className={`w-3 h-3 rounded-full ${getAlertColor(volcano.alertLevel)} animate-pulse shadow-lg group-hover:scale-150 transition-all duration-300`}>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-48">
                  <h4 className="font-semibold text-sm">{volcano.name}</h4>
                  <p className="text-xs text-muted-foreground">{volcano.country}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge 
                      className={`text-xs ${getAlertColor(volcano.alertLevel)}`}
                    >
                      {getAlertIcon(volcano.alertLevel)}
                      {volcano.alertLevel}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last Activity: {volcano.lastActivity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-gradient-safe/20 border border-border/30">
            <div className="text-2xl font-bold text-success">
              {volcanoes.filter(v => v.alertLevel === 'Green').length}
            </div>
            <div className="text-sm text-muted-foreground">Safe Status</div>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-gradient-thermal/20 border border-border/30">
            <div className="text-2xl font-bold text-warning">
              {volcanoes.filter(v => v.alertLevel === 'Yellow').length}
            </div>
            <div className="text-sm text-muted-foreground">Watch Status</div>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-gradient-volcanic/20 border border-border/30">
            <div className="text-2xl font-bold text-primary">
              {volcanoes.filter(v => v.alertLevel === 'Orange').length}
            </div>
            <div className="text-sm text-muted-foreground">Advisory Status</div>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-gradient-seismic/20 border border-border/30">
            <div className="text-2xl font-bold text-foreground">
              {volcanoes.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Monitored</div>
          </div>
        </div>

        {/* Volcano List */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Monitored Volcanoes</h3>
          <div className="space-y-2">
            {volcanoes.map((volcano) => (
              <div
                key={volcano.id}
                className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{volcano.name}</div>
                    <div className="text-sm text-muted-foreground">{volcano.country}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge 
                    className={`text-xs ${getAlertColor(volcano.alertLevel)}`}
                  >
                    {getAlertIcon(volcano.alertLevel)}
                    {volcano.alertLevel}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
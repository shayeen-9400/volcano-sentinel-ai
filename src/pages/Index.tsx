import { VolcanoDashboard } from "@/components/VolcanoDashboard";
import { VolcanoMap } from "@/components/VolcanoMap";
import { VolcanoAnimation } from "@/components/VolcanoAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { 
  Satellite, 
  Brain, 
  Activity, 
  Shield,
  Play,
  BarChart3
} from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Single Window Layout */}
      <section className="h-screen flex flex-col overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-volcanic opacity-20"></div>
        <VolcanoAnimation />
        
        {/* Header */}
        <div className="relative z-10 text-center px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Volcano Sentinel AI
          </h1>
          <div className="flex flex-row gap-4 justify-center">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Play className="w-4 h-4 mr-2" />
              Live Dashboard
            </Button>
            <Button variant="outline" size="sm" className="border-border hover:bg-accent/50">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 flex-1 px-6 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
          
          {/* Left Column - Features */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-8 h-8 mb-2 rounded bg-gradient-seismic flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Seismic Analysis</h3>
              <p className="text-xs text-muted-foreground">Real-time earthquake monitoring</p>
            </div>

            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-8 h-8 mb-2 rounded bg-gradient-thermal flex items-center justify-center">
                <Satellite className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Thermal Imaging</h3>
              <p className="text-xs text-muted-foreground">Satellite thermal analysis</p>
            </div>

            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-8 h-8 mb-2 rounded bg-gradient-volcanic flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold mb-1">AI Prediction</h3>
              <p className="text-xs text-muted-foreground">Machine learning models</p>
            </div>

            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-8 h-8 mb-2 rounded bg-gradient-safe flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Early Warning</h3>
              <p className="text-xs text-muted-foreground">Automated alert system</p>
            </div>
          </div>

          {/* Center Column - Map */}
          <div className="lg:col-span-2 min-h-0">
            <div className="h-full rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden">
              <VolcanoMap />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;
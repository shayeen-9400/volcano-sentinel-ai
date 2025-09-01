import { VolcanoDashboard } from "@/components/VolcanoDashboard";
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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-card to-background">
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Badge variant="destructive" className="mb-4 text-sm">
            AI-Powered Early Warning System
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Volcano Sentinel AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced machine learning system for real-time volcanic eruption detection, 
            prediction, and automated alert generation using seismic, thermal, and gas emission data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Play className="w-5 h-5 mr-2" />
              View Live Dashboard
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              ML Analysis Report
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Real-Time Monitoring & AI Prediction
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining seismic sensors, thermal imaging, and gas emission analysis 
              with advanced machine learning algorithms for accurate eruption forecasting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-seismic flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seismic Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Real-time earthquake monitoring and magnitude detection using advanced seismograph networks.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-thermal flex items-center justify-center">
                <Satellite className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Thermal Imaging</h3>
              <p className="text-sm text-muted-foreground">
                Satellite thermal analysis to detect temperature anomalies and lava dome formation.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-volcanic flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Prediction</h3>
              <p className="text-sm text-muted-foreground">
                Machine learning models trained on historical data to predict eruption probability.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-safe flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Early Warning</h3>
              <p className="text-sm text-muted-foreground">
                Automated alert system providing early warnings to authorities and communities.
              </p>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="mt-16">
            <VolcanoDashboard />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;
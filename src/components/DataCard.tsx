import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DataCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "stable";
  variant?: "default" | "volcanic" | "thermal" | "seismic";
  className?: string;
}

export function DataCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  variant = "default",
  className 
}: DataCardProps) {
  const variants = {
    default: "bg-card/60 border-border backdrop-blur-sm",
    volcanic: "bg-card/80 border-primary/30 backdrop-blur-sm",
    thermal: "bg-card/80 border-accent/30 backdrop-blur-sm", 
    seismic: "bg-card/80 border-secondary/30 backdrop-blur-sm"
  };

  const trendColors = {
    up: "text-danger",
    down: "text-success", 
    stable: "text-muted-foreground"
  };

  return (
    <Card className={cn(variants[variant], "transition-colors duration-200", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="opacity-80">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <CardDescription className={cn(
            "text-xs",
            trend && trendColors[trend]
          )}>
            {description}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
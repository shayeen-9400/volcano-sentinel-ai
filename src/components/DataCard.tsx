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
    default: "bg-card border-border",
    volcanic: "bg-gradient-volcanic shadow-volcanic border-primary/20",
    thermal: "bg-gradient-thermal shadow-thermal border-accent/20", 
    seismic: "bg-gradient-seismic shadow-seismic border-secondary"
  };

  const trendColors = {
    up: "text-danger",
    down: "text-success", 
    stable: "text-muted-foreground"
  };

  return (
    <Card className={cn(variants[variant], "transition-all duration-300 hover:scale-105", className)}>
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
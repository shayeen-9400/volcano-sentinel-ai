import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AlertLevelProps {
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const alertLevels = {
  1: { label: "Normal", color: "success", description: "Background volcanic activity" },
  2: { label: "Advisory", color: "warning", description: "Elevated volcanic unrest" },
  3: { label: "Watch", color: "accent", description: "Heightened volcanic activity" },
  4: { label: "Warning", color: "danger", description: "Volcanic eruption imminent" },
  5: { label: "Critical", color: "destructive", description: "Major eruption in progress" }
};

export function AlertLevel({ level, className }: AlertLevelProps) {
  const alert = alertLevels[level];
  
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Badge 
        variant={alert.color as any}
        className="text-sm font-bold px-4 py-2 min-w-[80px] text-center"
      >
        Level {level}
      </Badge>
      <div className="flex-1">
        <div className="font-semibold text-foreground">{alert.label}</div>
        <div className="text-sm text-muted-foreground">{alert.description}</div>
      </div>
    </div>
  );
}
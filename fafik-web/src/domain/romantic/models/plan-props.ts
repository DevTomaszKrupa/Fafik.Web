export interface RomanticPlanEvent {
  tooltip: string;
  time: string;
  name: string;
}

export interface RomanticPlanProps {
  events: RomanticPlanEvent[];
}

export type TSkillType = "Current" | "Old" | "New/Exploring" | "Heard of" | "Old";

export type SkillCardProp = {
  imageUrl: string;
  label: string;
  learning: Boolean;
  background: string;
  type: TSkillType;
};

export type TSelectedFilter = {
  value: String[],
  onSelectedChanged: (event: any) => void
}
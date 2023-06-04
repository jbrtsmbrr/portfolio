export type TSkillType = {
  label: "Current" | "Old" | "New/Exploring" | "Heard of" | "Old";
  description: string;
};

export type SkillCardProp = {
  imageUrl: string;
  label: string;
  learning: Boolean;
  background: string;
  type: TSkillType["label"];
};

export type TSelectedFilter = {
  value: String[],
  onSelectedChanged: (event: any) => void
}
/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  tagline?: string;
  heroHeading?: string;
  heroSubheading?: string;
  chatWelcomeMessage?: string;
  uploadPlaceholderText?: string;
  chatInputPlaceholder?: string;
  safetyDisclaimerText?: string;
  dangerColor?: string;
  showSafetyDisclaimer?: boolean;
  footerText?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "MushroomAI",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#047857",
    secondary: "#0f172a",
    accent: "#d97706",
  },
  tagline: "Know before you eat.",
  heroHeading: "Identify Any Mushroom Instantly",
  heroSubheading:
    "Upload a photo or describe what you see. Get instant species ID, safety rating, and look-alike warnings — powered by AI.",
  chatWelcomeMessage:
    "Hello! I'm MushroomAI. Upload a photo of a mushroom or describe what you found, and I'll help identify it with a safety rating and species profile.",
  uploadPlaceholderText: "Drop a photo here, or tap to upload",
  chatInputPlaceholder: "Describe the mushroom, ask a follow-up, or upload a photo…",
  safetyDisclaimerText:
    "AI identification is not a substitute for expert verification. When in doubt, do not eat. Always confirm with a local mycologist before consuming wild mushrooms.",
  dangerColor: "#e11d48",
  showSafetyDisclaimer: true,
  footerText: "MushroomAI — AI identification only. Always verify with an expert before foraging.",
};

export type SafetyRating = "Safe" | "Caution" | "Toxic" | "Unknown";

export interface LookalikWarning {
  species: string;
  keyDifferences: string;
}

export interface MushroomIdentification {
  identified: boolean;
  commonName: string;
  scientificName: string;
  confidence: number; // 0–100
  safetyRating: SafetyRating;
  safetyExplanation: string;
  habitat: string;
  season: string;
  distinguishingFeatures: string[];
  lookalikes: LookalikWarning[];
  additionalNotes: string;
}

export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  imageUrl?: string; // user-attached photo URL
  identification?: MushroomIdentification; // set when AI returns structured result
  timestamp: Date;
  loading?: boolean;
}

// Tipagem de pilotos

export interface Pilot {
  id: number;
  name: string;
  category: 'F1' | 'WEC' | 'WRC';
  team: string;
  country: string;
  bio?: string;
  imageUrl?: string;
  createdAt: Date;
}
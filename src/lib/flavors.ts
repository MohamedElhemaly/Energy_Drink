export type Flavor = {
  id: string;
  nameKey: string; // Used for translation key 'hero.flavors.[nameKey]'
  baseColor: string; // Tailwind class base for glow/UI
  gradientFrom: string; // Hex color for Can base material
  gradientTo: string; // Hex color for Can secondary material
  textColor: string; // Hex color for Decal/Text
  accentColor: string; // Hex color for lightning and small details
};

export const FLAVORS: Flavor[] = [
  {
    id: 'original',
    nameKey: 'original',
    baseColor: 'blue-500',
    gradientFrom: '#1e3a8a', // blue-900
    gradientTo: '#3b82f6', // blue-500
    textColor: '#ffffff',
    accentColor: '#f97316', // orange-500
  },
  {
    id: 'citrus',
    nameKey: 'citrus',
    baseColor: 'yellow-500',
    gradientFrom: '#4d7c0f', // lime-700
    gradientTo: '#eab308', // yellow-500
    textColor: '#ffffff',
    accentColor: '#10b981', // emerald-500
  },
  {
    id: 'berry',
    nameKey: 'berry',
    baseColor: 'purple-500',
    gradientFrom: '#4c1d95', // violet-900
    gradientTo: '#ec4899', // pink-500
    textColor: '#ffffff',
    accentColor: '#fbbf24', // amber-400
  }
];

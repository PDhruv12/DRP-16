import { Pin } from '../types'; // Assumes types folder is at the same level as constants

export const mockPins: Pin[] = [
  {
    id: '1',
    coordinate: { latitude: 37.78825, longitude: -122.4324 },
    title: 'Golden Gate Bridge',
    description: 'A famous suspension bridge.',
  },
  {
    id: '2',
    coordinate: { latitude: 34.0522, longitude: -118.2437 },
    title: 'Los Angeles City Hall',
    description: 'The center of the city of Los Angeles government.',
  },
  {
    id: '3',
    coordinate: { latitude: 40.7128, longitude: -74.0060 },
    title: 'New York City',
    description: 'The city that never sleeps.',
  },
  {
    id: '4',
    coordinate: { latitude: 41.8781, longitude: -87.6298 },
    title: 'Chicago Bean',
    description: 'Cloud Gate sculpture in Millennium Park.',
  },
];

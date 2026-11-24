export interface JourneyStep {
  id: 'selected' | 'checked' | 'packed' | 'table'
  title: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
    /* CSS object-position used to frame the subject inside the arch. */
    position: string
    /* Extra zoom for photos supplied with their own border and margin, so
       only the photograph shows inside the arch. */
    zoom?: number
  }
}

export const journeySteps: readonly JourneyStep[] = [
  {
    id: 'selected',
    title: 'Carefully Selected',
    description: 'Rice chosen from fertile fields with care and attention.',
    image: {
      src: '/images/home/carefully-selected.jpeg',
      alt: 'A farmer’s hand holding ripe Basmati rice panicles in a sunlit field',
      width: 1536,
      height: 1024,
      position: '50% 50%',
      zoom: 1.1,
    },
  },
  {
    id: 'checked',
    title: 'Quality Checked',
    description: 'Grains checked for length, purity and consistency.',
    image: {
      src: '/images/home/quality-checked.jpeg',
      alt: 'Hands inspecting long Basmati rice grains above a basket of rice',
      width: 1536,
      height: 1024,
      position: '54% 50%',
      zoom: 1.1,
    },
  },
  {
    id: 'packed',
    title: 'Packed with Care',
    description: 'Sealed to preserve freshness, aroma and flavour.',
    image: {
      src: '/images/products/classic-26kg.jpeg',
      alt: 'A sealed bag of Shri Shri Classic Basmati Rice beside sacks of rice',
      width: 1161,
      height: 1355,
      position: '50% 40%',
    },
  },
  {
    id: 'table',
    title: 'Made for Your Table',
    description: 'So every meal becomes a special moment.',
    image: {
      src: '/images/home/shri-quality-rice.jpeg',
      alt: 'Cooked long-grain Basmati rice served in a brass bowl',
      width: 1536,
      height: 1024,
      position: '10% 50%',
    },
  },
]

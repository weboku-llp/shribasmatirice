interface CountrysideLineArtProps {
  className?: string
}

const RIDGES = [
  'M0 112C110 86 190 62 290 72S430 40 520 58 680 28 790 52 960 42 1060 66 1160 76 1200 72',
  'M150 108C260 90 340 94 420 86S600 70 700 88',
  'M760 100C840 84 920 82 1000 90S1120 96 1200 92',
]

const FIELD_LINES = [
  'M0 130C300 120 900 120 1200 128',
  'M0 144C320 136 880 136 1200 142',
  'M0 156C340 152 860 152 1200 156',
]

/* Palm trunks lean slightly; each frond fans out from the crown. */
const PALMS = [96, 128, 452, 486, 1030, 1066, 1104]

function palmPaths(x: number) {
  const top = `${x + 1} 82`
  return [
    `M${x} 122C${x + 2} 106 ${x + 3} 94 ${top}`,
    `M${top}c-8-2-14 2-18 7`,
    `M${top}c8-2 14 2 18 7`,
    `M${top}c-4-6-11-8-16-6`,
    `M${top}c4-6 11-8 16-6`,
    `M${top}c0-6-2-10-5-12`,
  ]
}

function CountrysideLineArt({ className }: CountrysideLineArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 160"
      width="1200"
      height="160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      {RIDGES.map((d) => (
        <path key={d} d={d} />
      ))}
      {FIELD_LINES.map((d) => (
        <path key={d} d={d} />
      ))}
      {PALMS.flatMap((x) =>
        palmPaths(x).map((d) => <path key={d} d={d} />),
      )}
      <path d="M760 122v-11h24v11M755 112l17-10 17 10" />
    </svg>
  )
}

export default CountrysideLineArt

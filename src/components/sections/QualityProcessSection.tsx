import type { ReactNode } from 'react'
import '../../styles/quality-process.css'
import {
  GrainIcon,
  LeafIcon,
  PackageIcon,
  ShieldIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  icon: ReactNode
  image: {
    src: string
    alt: string
    width: number
    height: number
    position: string
  }
}

const steps: ProcessStep[] = [
  {
    id: 'selection',
    number: '01',
    title: 'Selection',
    description:
      'Carefully selected grains begin the journey with attention to quality and consistency.',
    icon: <LeafIcon />,
    image: {
      src: '/images/quality/quality-selection.jpeg',
      alt: 'Rice grains selected at the beginning of the quality process.',
      width: 1536,
      height: 1024,
      position: '52% 45%',
    },
  },
  {
    id: 'cleaning',
    number: '02',
    title: 'Cleaning',
    description:
      'The grains are carefully cleaned to prepare them for the next stage of the process.',
    icon: <ShieldIcon />,
    image: {
      src: '/images/quality/quality-cleaning.jpeg',
      alt: 'Basmati rice being cleaned during processing.',
      width: 1536,
      height: 1024,
      position: '55% 40%',
    },
  },
  {
    id: 'processing',
    number: '03',
    title: 'Processing',
    description:
      'Thoughtful processing helps preserve the natural character of every grain.',
    icon: <GrainIcon />,
    image: {
      src: '/images/quality/quality-processing.jpeg',
      alt: 'Long-grain rice moving through processing equipment.',
      width: 1536,
      height: 1024,
      position: '62% 48%',
    },
  },
  {
    id: 'packing',
    number: '04',
    title: 'Packing',
    description:
      'The finished rice is packed with care, ready to make its way to the table.',
    icon: <PackageIcon />,
    image: {
      src: '/images/quality/quality-packing.jpeg',
      alt: 'Rice packaging process on a production line.',
      width: 1536,
      height: 1024,
      position: '48% 42%',
    },
  },
]

function QualityProcessSection() {
  return (
    <section
      className="quality-process"
      aria-labelledby="quality-process-title"
    >
      <PaddyIllustration className="quality-process__motif quality-process__motif--top-left" />
      <PaddyIllustration className="quality-process__motif quality-process__motif--mid-right" />

      <div className="quality-process__inner">
        <header className="quality-process__intro">
          <p className="quality-process__eyebrow">
            <GrainIcon className="quality-process__eyebrow-icon" />
            Quality at Every Step
          </p>

          <h2 id="quality-process-title" className="quality-process__title">
            <span className="quality-process__title-line">
              Care in Every Step,
            </span>{' '}
            <span className="quality-process__title-line quality-process__title-line--accent">
              Quality in Every Grain.
            </span>
          </h2>

          <p className="quality-process__lead">
            From careful selection to final packing, each stage is handled with
            attention to preserve the natural character and quality of Basmati
            rice.
          </p>
        </header>

        <ol className="quality-process__steps">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`quality-process__step quality-process__step--${step.id}`}
            >
              <span className="quality-process__number" aria-hidden="true">
                {step.number}
              </span>

              <span className="quality-process__node" aria-hidden="true">
                {step.icon}
              </span>

              <div className="quality-process__frame">
                <img
                  className="quality-process__image"
                  src={step.image.src}
                  alt={step.image.alt}
                  width={step.image.width}
                  height={step.image.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: step.image.position }}
                />
              </div>

              <h3 className="quality-process__name">{step.title}</h3>
              <p className="quality-process__description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default QualityProcessSection

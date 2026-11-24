import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const REDUCE_MOTION = '(prefers-reduced-motion: reduce)'

/* Repeated cards, steps, and panels. Quality steps are opacity-only in CSS
   because their resting position already uses translateY. */
const CARD_SELECTOR = [
  '.rice-collection__product',
  '.products-collection__item',
  '.products-collection__strip-item',
  '.hero__attribute',
  '.products-hero__attribute',
  '.quality-hero__pillar',
  '.quality-process__step',
  '.quality-standard__feature',
  '.quality-story__item',
  '.journey__step',
  '.difference__point',
  '.grain-table__step',
  '.our-story__value',
  '.why-partner__reason',
  '.dealer-process__step',
  '.contact-help__path',
  '.contact-form-section__detail',
  '.contact-form-section__form-panel',
  '.dealer-enquiry__form-panel',
  '.visit-us__detail',
  '.visit-us__map-card',
  '.philosophy__quote-panel',
].join(',')

function siblingIndex(node: HTMLElement) {
  const parent = node.parentElement
  if (!parent) return 0

  let index = 0
  for (const child of parent.children) {
    if (child === node) return index
    if (child instanceof HTMLElement && child.matches(CARD_SELECTOR)) index += 1
  }
  return index
}

function isInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return rect.bottom > 0 && rect.top < window.innerHeight * 0.92
}

function PageMotion() {
  const { pathname } = useLocation()

  useEffect(() => {
    const main = document.querySelector('.site-main')
    const footer = document.querySelector('.site-footer')
    const targets = [
      ...(main ? [...main.children] : []),
      ...(footer ? [footer] : []),
    ].filter((node): node is HTMLElement => node instanceof HTMLElement)

    if (window.matchMedia(REDUCE_MOTION).matches) {
      targets.forEach((node) => {
        delete node.dataset.reveal
        node.style.removeProperty('--reveal-delay')
      })
      return
    }

    const pending = targets.filter((node) => node.dataset.reveal !== 'in')
    let visibleIndex = 0

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) {
            continue
          }
          entry.target.dataset.reveal = 'in'
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
    )

    for (const node of pending) {
      if (isInView(node)) {
        node.style.setProperty('--reveal-delay', `${visibleIndex * 90}ms`)
        visibleIndex += 1
        node.dataset.reveal = 'in'
      } else {
        node.style.setProperty('--reveal-delay', '0ms')
        observer.observe(node)
      }
    }

    const settle = new AbortController()

    const releaseCard = (card: HTMLElement) => {
      if (card.style.animation === 'none') return
      card.addEventListener(
        'animationend',
        (event) => {
          if (event.target !== card) return
          card.style.animation = 'none'
        },
        { signal: settle.signal },
      )
    }

    const playCards = (cards: HTMLElement[]) => {
      for (const card of cards) {
        if (card.dataset.card === 'in') {
          releaseCard(card)
          continue
        }
        card.style.setProperty(
          '--card-delay',
          `${Math.min(siblingIndex(card), 5) * 75}ms`,
        )
        card.dataset.card = 'in'
        releaseCard(card)
      }
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        const entering = entries.flatMap((entry) =>
          entry.isIntersecting && entry.target instanceof HTMLElement
            ? [entry.target]
            : [],
        )
        playCards(entering)
        for (const entry of entries) {
          if (entry.isIntersecting) cardObserver.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0.05 },
    )

    const cards = main
      ? [...main.querySelectorAll<HTMLElement>(CARD_SELECTOR)]
      : []
    const visibleCards: HTMLElement[] = []

    for (const card of cards) {
      if (card.dataset.card === 'in') {
        releaseCard(card)
        continue
      }
      if (isInView(card)) visibleCards.push(card)
      else cardObserver.observe(card)
    }
    playCards(visibleCards)

    const revealOnFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const block = event.target.closest('.site-main > *, .site-footer')
      if (block instanceof HTMLElement) block.dataset.reveal = 'in'

      const card = event.target.closest(CARD_SELECTOR)
      if (card instanceof HTMLElement) playCards([card])
    }

    document.addEventListener('focusin', revealOnFocus)

    return () => {
      observer.disconnect()
      cardObserver.disconnect()
      settle.abort()
      document.removeEventListener('focusin', revealOnFocus)
    }
  }, [pathname])

  return null
}

export default PageMotion

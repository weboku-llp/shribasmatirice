import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/contact-form.css'
import { contactDetails } from '../../data/contact.ts'
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  FacebookIcon,
  GrainIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PackageIcon,
  PeopleIcon,
  PhoneIcon,
} from '../ui/Icons.tsx'

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Product Enquiry',
  'Other',
] as const

const products = [
  {
    id: 'classic-26kg',
    src: '/images/products/classic-26kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 26 kg pack',
    width: 1161,
    height: 1355,
  },
  {
    id: 'classic-1kg',
    src: '/images/products/classic-1kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 1 kg pack',
    width: 1086,
    height: 1448,
  },
] as const

interface FormValues {
  fullName: string
  phone: string
  email: string
  enquiryType: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  fullName: '',
  phone: '',
  email: '',
  enquiryType: '',
  message: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  }

  const phone = values.phone.replace(/[\s()-]/g, '')
  if (!phone) {
    errors.phone = 'Please enter your phone number.'
  } else if (!/^\+?\d{8,15}$/.test(phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.enquiryType) {
    errors.enquiryType = 'Please select an enquiry type.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter your message.'
  }

  return errors
}

function ContactFormSection() {
  const formId = useId()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'unavailable'>('idle')

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => {
      if (!current[key]) return current
      const next = { ...current }
      delete next[key]
      return next
    })
    if (status !== 'idle') setStatus('idle')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    /* No contact API exists in this project yet. */
    setStatus('unavailable')
  }

  return (
    <section
      id="contact-form"
      className="contact-form-section"
      aria-labelledby="contact-form-title"
    >
      <div className="contact-form-section__shell">
        <div className="contact-form-section__visual">
          <PaddyIllustration className="contact-form-section__motif contact-form-section__motif--visual" />
          <span className="contact-form-section__atmosphere" aria-hidden="true" />
          <span className="contact-form-section__plant" aria-hidden="true" />

          <div className="contact-form-section__intro">
            <p className="contact-form-section__eyebrow">
              <GrainIcon className="contact-form-section__eyebrow-icon" />
              Contact Shri Shri
            </p>

            <h2 id="contact-form-title" className="contact-form-section__title">
              <span className="contact-form-section__title-line">Have Something</span>{' '}
              <span className="contact-form-section__title-line contact-form-section__title-line--accent">
                to Ask Us?
              </span>
            </h2>

            <p className="contact-form-section__lead">
              We’re always happy to help. Reach out to us for product information,
              general enquiries, or any other questions.
            </p>

            <ul className="contact-form-section__details">
              <li className="contact-form-section__detail">
                <span
                  className="contact-form-section__detail-seal"
                  aria-hidden="true"
                >
                  <PhoneIcon />
                </span>
                <span className="contact-form-section__detail-copy">
                  <span className="contact-form-section__detail-label">Call Us</span>
                  <a
                    href={contactDetails.phone.href}
                    className="contact-form-section__detail-value"
                  >
                    {contactDetails.phone.display}
                  </a>
                </span>
              </li>

              <li className="contact-form-section__detail">
                <span
                  className="contact-form-section__detail-seal"
                  aria-hidden="true"
                >
                  <MapPinIcon />
                </span>
                <span className="contact-form-section__detail-copy">
                  <span className="contact-form-section__detail-label">
                    Our Address
                  </span>
                  <address className="contact-form-section__detail-value contact-form-section__address">
                    <span className="contact-form-section__company">
                      {contactDetails.company}
                    </span>
                    {contactDetails.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </span>
              </li>

              <li className="contact-form-section__detail">
                <span
                  className="contact-form-section__detail-seal"
                  aria-hidden="true"
                >
                  <ExternalLinkIcon />
                </span>
                <span className="contact-form-section__detail-copy">
                  <span className="contact-form-section__detail-label">
                    Follow Us
                  </span>
                  <span className="contact-form-section__socials">
                    {contactDetails.socials.map((social) => {
                      const Icon = socialIcons[social.id]
                      return (
                        <a
                          key={social.id}
                          href={social.href}
                          className="contact-form-section__social"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon />
                          {social.label}
                        </a>
                      )
                    })}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-form-section__stage" aria-hidden="true">
            <span className="contact-form-section__glow" />
            <span className="contact-form-section__table" />
            <span className="contact-form-section__cloth" />
            <span className="contact-form-section__grains" />

            {products.map((product) => (
              <div
                key={product.id}
                className={`contact-form-section__product contact-form-section__product--${product.id}`}
              >
                <span className="contact-form-section__contact" />
                <img
                  className="contact-form-section__product-image"
                  src={product.src}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

            <img
              className="contact-form-section__bowl"
              src="/images/about/journey-bowl.jpeg"
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />

            <PaddyIllustration className="contact-form-section__sprig contact-form-section__sprig--left" />
            <PaddyIllustration className="contact-form-section__sprig contact-form-section__sprig--right" />
          </div>
        </div>

        <div className="contact-form-section__form-panel">
          <PaddyIllustration className="contact-form-section__motif contact-form-section__motif--form" />
          <svg
            className="contact-form-section__contours"
            viewBox="0 0 480 140"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M-10 36C70 18 140 52 220 40S360 12 440 34 510 58 530 46" />
            <path d="M-10 68C80 48 160 84 250 66S390 30 470 58 520 96 540 82" />
            <path d="M-10 102C90 82 180 118 280 100S420 62 500 98 530 124 550 112" />
          </svg>

          <p className="contact-form-section__eyebrow contact-form-section__eyebrow--form">
            <GrainIcon className="contact-form-section__eyebrow-icon" />
            Send Us a Message
          </p>

          <p className="contact-form-section__form-lead">
            Fill in the details below and send us your enquiry.
          </p>

          <form
            className="contact-form-section__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact-form-section__grid">
              <Field
                id={`${formId}-fullName`}
                label="Full Name"
                required
                icon={<PeopleIcon />}
                error={errors.fullName}
              >
                <input
                  id={`${formId}-fullName`}
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={values.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? `${formId}-fullName-error` : undefined
                  }
                />
              </Field>

              <Field
                id={`${formId}-phone`}
                label="Phone Number"
                required
                icon={<PhoneIcon />}
                error={errors.phone}
              >
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Enter your phone number"
                  value={values.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? `${formId}-phone-error` : undefined
                  }
                />
              </Field>

              <Field
                id={`${formId}-email`}
                label="Email Address"
                required
                icon={<MailIcon />}
                error={errors.email}
              >
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? `${formId}-email-error` : undefined
                  }
                />
              </Field>

              <Field
                id={`${formId}-enquiryType`}
                label="Enquiry Type"
                required
                icon={<PackageIcon />}
                error={errors.enquiryType}
              >
                <select
                  id={`${formId}-enquiryType`}
                  name="enquiryType"
                  value={values.enquiryType}
                  onChange={(event) =>
                    updateField('enquiryType', event.target.value)
                  }
                  aria-invalid={Boolean(errors.enquiryType)}
                  aria-describedby={
                    errors.enquiryType
                      ? `${formId}-enquiryType-error`
                      : undefined
                  }
                >
                  <option value="">Select enquiry type</option>
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              id={`${formId}-message`}
              label="Message"
              required
              icon={<MailIcon />}
              error={errors.message}
            >
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={4}
                placeholder="Tell us about your query..."
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? `${formId}-message-error` : undefined
                }
              />
            </Field>

            <p className="contact-form-section__dealer-note">
              Interested in becoming a dealer?{' '}
              <Link to="/dealers#dealer-enquiry">Visit our Dealers page.</Link>
            </p>

            {status === 'unavailable' ? (
              <p className="contact-form-section__status" role="status">
                This enquiry form is ready on the page, but backend submission is
                not configured yet. Please contact Shri Shri directly to continue.
              </p>
            ) : null}

            <button
              type="submit"
              className="button button--primary contact-form-section__submit"
            >
              Send Message
              <ArrowRightIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  id: string
  label: string
  required?: boolean
  icon: ReactNode
  error?: string
  children: ReactNode
}

function Field({ id, label, required, icon, error, children }: FieldProps) {
  return (
    <div className={`contact-form-section__field${error ? ' is-invalid' : ''}`}>
      <label className="contact-form-section__label" htmlFor={id}>
        <span className="contact-form-section__field-icon" aria-hidden="true">
          {icon}
        </span>
        <span>
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
          {required ? (
            <span className="visually-hidden"> (required)</span>
          ) : null}
        </span>
      </label>
      <div className="contact-form-section__control">{children}</div>
      {error ? (
        <p
          className="contact-form-section__error"
          id={`${id}-error`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default ContactFormSection

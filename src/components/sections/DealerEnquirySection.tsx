import { useId, useState, type FormEvent, type ReactNode } from 'react'
import '../../styles/dealer-enquiry.css'
import {
  ArrowRightIcon,
  DiamondIcon,
  GrainIcon,
  HandshakeIcon,
  MailIcon,
  MapPinIcon,
  PackageIcon,
  PeopleIcon,
  PhoneIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
] as const

const BUSINESS_TYPES = [
  'Retailer',
  'Wholesaler',
  'Distributor',
  'Supermarket / Grocery Store',
  'Other',
] as const

const highlights: { icon: ReactNode; title: string }[] = [
  { icon: <GrainIcon />, title: 'Premium Basmati Range' },
  { icon: <DiamondIcon />, title: 'Consistent Quality' },
  { icon: <HandshakeIcon />, title: 'A Straightforward Partnership' },
]

const products = [
  {
    id: 'classic-26kg',
    src: '/images/products/classic-26kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 26 kg pack',
    width: 1161,
    height: 1355,
  },
  {
    id: 'xxxl-26kg',
    src: '/images/products/xxxl-26kg.jpeg',
    alt: 'Shri Shri XXXL Basmati Rice 26 kg pack',
    width: 1149,
    height: 1369,
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
  businessName: string
  city: string
  state: string
  businessType: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  fullName: '',
  phone: '',
  email: '',
  businessName: '',
  city: '',
  state: '',
  businessType: '',
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

  if (!values.businessName.trim()) {
    errors.businessName = 'Please enter your business or firm name.'
  }

  if (!values.city.trim()) {
    errors.city = 'Please enter your city.'
  }

  if (!values.state) {
    errors.state = 'Please select your state.'
  }

  if (!values.businessType) {
    errors.businessType = 'Please select a business type.'
  }

  return errors
}

function DealerEnquirySection() {
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

    /* No dealer/contact API exists in this project yet. */
    setStatus('unavailable')
  }

  return (
    <section
      id="dealer-enquiry"
      className="dealer-enquiry"
      aria-labelledby="dealer-enquiry-title"
    >
      <div className="dealer-enquiry__shell">
        <div className="dealer-enquiry__brand">
          <PaddyIllustration className="dealer-enquiry__motif dealer-enquiry__motif--brand-top" />
          <PaddyIllustration className="dealer-enquiry__motif dealer-enquiry__motif--brand-side" />

          <p className="dealer-enquiry__eyebrow dealer-enquiry__eyebrow--brand">
            <GrainIcon className="dealer-enquiry__eyebrow-icon" />
            Become a Shri Shri Dealer
          </p>

          <h2 id="dealer-enquiry-title" className="dealer-enquiry__brand-title">
            <span className="dealer-enquiry__brand-title-line">Let’s Grow</span>{' '}
            <span className="dealer-enquiry__brand-title-line dealer-enquiry__brand-title-line--accent">
              Together.
            </span>
          </h2>

          <p className="dealer-enquiry__brand-lead">
            Partner with Shri Shri and bring our Basmati rice range to more customers
            and markets.
          </p>

          <ul className="dealer-enquiry__highlights">
            {highlights.map((item) => (
              <li key={item.title} className="dealer-enquiry__highlight">
                <span className="dealer-enquiry__highlight-seal" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="dealer-enquiry__highlight-title">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="dealer-enquiry__stage">
            <span className="dealer-enquiry__table" aria-hidden="true" />
            <span className="dealer-enquiry__cloth" aria-hidden="true" />

            <img
              className="dealer-enquiry__bowl"
              src="/images/about/journey-bowl.jpeg"
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />

            {products.map((product) => (
              <div
                key={product.id}
                className={`dealer-enquiry__product dealer-enquiry__product--${product.id}`}
              >
                <span className="dealer-enquiry__contact" aria-hidden="true" />
                <img
                  className="dealer-enquiry__product-image"
                  src={product.src}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

            <PaddyIllustration className="dealer-enquiry__sprig" />
          </div>
        </div>

        <div className="dealer-enquiry__form-panel">
          <PaddyIllustration className="dealer-enquiry__motif dealer-enquiry__motif--form-top" />
          <PaddyIllustration className="dealer-enquiry__motif dealer-enquiry__motif--form-bottom" />

          <p className="dealer-enquiry__eyebrow dealer-enquiry__eyebrow--form">
            <GrainIcon className="dealer-enquiry__eyebrow-icon" />
            Dealer Enquiry Form
          </p>

          <h3 className="dealer-enquiry__form-title">
            <span className="dealer-enquiry__form-title-line">
              Tell Us About Your Business
            </span>{' '}
            <span className="dealer-enquiry__form-title-line dealer-enquiry__form-title-line--accent">
              and We’ll Take It From Here.
            </span>
          </h3>

          <p className="dealer-enquiry__form-lead">
            Share a few details and our team can get in touch to understand your
            requirements and discuss the next steps.
          </p>

          <form
            className="dealer-enquiry__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="dealer-enquiry__grid">
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
                id={`${formId}-businessName`}
                label="Business / Firm Name"
                required
                icon={<PackageIcon />}
                error={errors.businessName}
              >
                <input
                  id={`${formId}-businessName`}
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  placeholder="Enter your business or firm name"
                  value={values.businessName}
                  onChange={(event) =>
                    updateField('businessName', event.target.value)
                  }
                  aria-invalid={Boolean(errors.businessName)}
                  aria-describedby={
                    errors.businessName
                      ? `${formId}-businessName-error`
                      : undefined
                  }
                />
              </Field>

              <Field
                id={`${formId}-city`}
                label="City"
                required
                icon={<MapPinIcon />}
                error={errors.city}
              >
                <input
                  id={`${formId}-city`}
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Enter your city"
                  value={values.city}
                  onChange={(event) => updateField('city', event.target.value)}
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={
                    errors.city ? `${formId}-city-error` : undefined
                  }
                />
              </Field>

              <Field
                id={`${formId}-state`}
                label="State"
                required
                icon={<MapPinIcon />}
                error={errors.state}
              >
                <select
                  id={`${formId}-state`}
                  name="state"
                  autoComplete="address-level1"
                  value={values.state}
                  onChange={(event) => updateField('state', event.target.value)}
                  aria-invalid={Boolean(errors.state)}
                  aria-describedby={
                    errors.state ? `${formId}-state-error` : undefined
                  }
                >
                  <option value="">Select your state</option>
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              id={`${formId}-businessType`}
              label="Business Type"
              required
              icon={<HandshakeIcon />}
              error={errors.businessType}
            >
              <select
                id={`${formId}-businessType`}
                name="businessType"
                value={values.businessType}
                onChange={(event) =>
                  updateField('businessType', event.target.value)
                }
                aria-invalid={Boolean(errors.businessType)}
                aria-describedby={
                  errors.businessType
                    ? `${formId}-businessType-error`
                    : undefined
                }
              >
                <option value="">Select business type</option>
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              id={`${formId}-message`}
              label="Message / Additional Details"
              icon={<MailIcon />}
            >
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={3}
                placeholder="Tell us about your business, location, and any other details..."
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
              />
            </Field>

            {status === 'unavailable' ? (
              <p className="dealer-enquiry__status" role="status">
                This enquiry form is ready on the page, but backend submission is
                not configured yet. Please contact Shri Shri directly to continue.
              </p>
            ) : null}

            <button type="submit" className="button button--primary dealer-enquiry__submit">
              Submit Enquiry
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
    <div className={`dealer-enquiry__field${error ? ' is-invalid' : ''}`}>
      <label className="dealer-enquiry__label" htmlFor={id}>
        <span className="dealer-enquiry__field-icon" aria-hidden="true">
          {icon}
        </span>
        <span>
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
          {required ? <span className="visually-hidden"> (required)</span> : null}
        </span>
      </label>
      <div className="dealer-enquiry__control">{children}</div>
      {error ? (
        <p className="dealer-enquiry__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default DealerEnquirySection

import { getReservationInfo, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Reservations - Savor Restaurant',
  description: 'Make a reservation at Savor Restaurant.',
}

export default async function ReservationsPage() {
  const reservation = await getReservationInfo()

  const headline = reservation ? getMetafieldValue(reservation.metadata?.headline) : ''
  const description = reservation ? getMetafieldValue(reservation.metadata?.description) : ''
  const phone = reservation ? getMetafieldValue(reservation.metadata?.reservation_phone) : ''
  const email = reservation ? getMetafieldValue(reservation.metadata?.reservation_email) : ''
  const bookingUrl = reservation ? getMetafieldValue(reservation.metadata?.booking_url) : ''
  const maxParty = reservation?.metadata?.max_party_size
  const policies = reservation ? getMetafieldValue(reservation.metadata?.policies) : ''

  return (
    <div className="bg-brand-50 min-h-screen">
      <section className="bg-charcoal-900 text-white py-20">
        <div className="container-custom text-center">
          <p className="text-brand-300 uppercase tracking-widest text-sm font-medium mb-3">
            Book Your Experience
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {headline || 'Reservations'}
          </h1>
          {description && (
            <p className="text-charcoal-200 max-w-2xl mx-auto text-lg">{description}</p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          {!reservation ? (
            <p className="text-center text-charcoal-600">
              Reservation information coming soon. Please check back later.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact options */}
              <div className="bg-white rounded-lg p-8 border border-brand-100">
                <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">
                  Reserve a Table
                </h2>
                {bookingUrl && (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-md font-medium transition-colors mb-4"
                  >
                    Book Online
                  </a>
                )}
                {phone && (
                  <div className="mb-4">
                    <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-1">
                      Call Us
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-2xl font-serif font-bold text-charcoal-900 hover:text-brand-600 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                )}
                {email && (
                  <div>
                    <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-charcoal-700 hover:text-brand-600 transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                )}
              </div>

              {/* Details & policies */}
              <div className="bg-white rounded-lg p-8 border border-brand-100">
                <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">
                  Reservation Details
                </h2>
                {typeof maxParty === 'number' && (
                  <div className="mb-5">
                    <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-1">
                      Maximum Party Size
                    </p>
                    <p className="text-charcoal-700">Up to {maxParty} guests</p>
                  </div>
                )}
                {policies && (
                  <div>
                    <p className="text-sm text-brand-600 uppercase tracking-wider font-medium mb-2">
                      Policies
                    </p>
                    <div className="text-charcoal-700 whitespace-pre-line leading-relaxed text-sm">
                      {policies}
                    </div>
                  </div>
                )}
                {!maxParty && !policies && (
                  <p className="text-charcoal-500">
                    Contact us directly for detailed reservation information.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
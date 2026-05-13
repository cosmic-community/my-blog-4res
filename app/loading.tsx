export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-50">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin mb-4" />
        <p className="text-charcoal-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}
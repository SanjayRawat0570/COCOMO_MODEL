import { CocomoForm } from "@/components/cocomo-form"
import { calculateBasicCocomo } from "@/lib/cocomo-calculations"

export default function Home() {
  // Default values for initial render
  const defaultResults = calculateBasicCocomo(10, "organic")

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Basic COCOMO Calculator</h1>

      <div className="w-full max-w-md bg-neutral-900 rounded-lg shadow-lg p-8">
        <CocomoForm defaultResults={defaultResults} />
      </div>
    </div>
  )
}

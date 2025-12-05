interface BrandNameProps {
  className?: string
}

export function BrandName({ className = '' }: BrandNameProps) {
  return (
    <span className={className}>
      <span className="text-[#d9d2ff]">artificery</span>
      <span className="text-slate-500">.</span>
      <span className="text-[#ff6737]">io</span>
    </span>
  )
}

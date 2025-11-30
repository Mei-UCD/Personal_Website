import Svg from '@/assets/Mei.svg?raw'

export function AnimatedSignature() {
  return (
    <div
      className="animated-signature"
      dangerouslySetInnerHTML={{
        __html: Svg,
      }}
    ></div>
  )
}

import { useEffect, useRef } from 'react'
import { init } from '@waline/client'
import '@waline/client/style'


const WALINE_LOCALES: Record<SiteLang, any> =  {
  zh: {
    placeholder: '发条友善的评论吧（支持 Markdown 语法）…',
  },
  en: {
    placeholder: 'Leave a friendly comment (Markdown supported)…',
  },
}

// export function Waline({ serverURL }: { serverURL: string }) {
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const walineInst = init({
//       el: ref.current,
//       serverURL,
//       dark: "[data-theme='dark']",
//       login: 'force',
//       imageUploader: false,
//       search: false,
//       locale: {
//         placeholder: '发条友善的评论吧（支持 Markdown 语法）…',
//       },
//       emoji: ['//unpkg.com/@waline/emojis@1.1.0/bilibili'],
//     })

//     return () => {
//       if (ref.current) {
//         walineInst?.destroy()
//       }
//     }
//   }, [serverURL])

//   return <div ref={ref}></div>
// }


type SiteLang = 'zh' | 'en'

export function Waline({
  serverURL,
  lang,
}: {
  serverURL: string
  lang: SiteLang
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const walineInst = init({
      el: ref.current,
      serverURL,
      lang,
      dark: "[data-theme='dark']",
      login: 'force',
      imageUploader: false,
      search: false,
      locale: WALINE_LOCALES[lang],
      emoji: ['//unpkg.com/@waline/emojis@1.1.0/bilibili'],
    })

    return () => walineInst?.destroy()
  }, [serverURL, lang])

  return <div ref={ref} />
}
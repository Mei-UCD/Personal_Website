import { sponsor, site } from '@/config.json'
import { motion } from 'framer-motion'
import * as QR from 'qrcode.react'
import { useAtomValue } from 'jotai'
import { metaSlugAtom, metaTitleAtom } from '@/store/metaInfo'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { useModal } from '@/components/ui/modal'
import { useState, useEffect } from 'react'
import { getLangFromPath, getTranslations, type Lang } from '@/utils/i18n'

interface ShareData {
  url: string
  text: string
}

const getShareList = (t: ReturnType<typeof getTranslations>) => [
  {
    name: 'Twitter',
    icon: 'icon-x',
    onClick: ({ url, text }: ShareData) => {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      )
    },
  },
  {
    name: t.actions.share.copy,
    icon: 'icon-link',
    onClick: ({ url }: ShareData) => {
      navigator.clipboard.writeText(url)
      toast.success(t.actions.share.copied)
    },
  },
]

export function ActionAside({ lang }: { lang: Lang }) {
  return (
    <div
      className="absolute left-0 bottom-0 flex flex-col gap-4"
      style={{
        transform: 'translateY(calc(100% + 24px))',
      }}
    >
    {/* <div className="sticky top-[calc(100vh-200px)] flex flex-col gap-4"> */}
      <ShareButton lang={lang} />
      <DonateButton lang={lang} />
    </div>
  )
}

function ShareButton({ lang }: { lang: Lang }) {
  const postSlug = useAtomValue(metaSlugAtom)
  const postTitle = useAtomValue(metaTitleAtom)
  const { present } = useModal()

  const t = getTranslations(lang)

  const url = new URL(postSlug, site.url).href
  const text = t.actions.share.text.replace('{{title}}', postTitle)

  const openModal = () => {
    present({
      content: <ShareModal url={url} text={text} t={t} />,
    })
  }

  return (
    <button
      type="button"
      aria-label="Share this post"
      className="size-6 text-xl leading-none hover:text-accent"
      onClick={() => openModal()}
    >
      <i className="iconfont icon-share"></i>
    </button>
  )
}

function ShareModal({ url, text, t }: { url: string; text: string, t: ReturnType<typeof getTranslations> }) {
  const shareList = getShareList(t)
  return (
    <motion.div
      className="bg-primary rounded-lg p-2 min-w-[420px] border border-primary flex flex-col"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <h2 className="px-3 py-1 font-bold">{t.actions.share.title}</h2>
      <hr className="my-2 border-primary" />
      <div className="px-3 py-2 grid grid-cols-[180px_auto] gap-3">
        <QR.QRCodeSVG value={url} size={180} />
        <div className="flex flex-col gap-2">
          <div className="text-sm">{t.actions.share.to}</div>
          <ul className="flex flex-col gap-2">
            {shareList.map((item) => (
              <li
                className="px-2 py-1 flex gap-2 cursor-pointer rounded-md hover:bg-secondary"
                key={item.name}
                onClick={() => item.onClick({ url, text })}
                role="button"
                aria-label={`Share to ${item.name}`}
              >
                <i className={clsx('iconfont text-accent', item.icon)}></i>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function DonateButton({ lang }: { lang: Lang }) {
  const { present } = useModal()

  const t = getTranslations(lang)

  const openDonate = () => {
    present({
      content: <DonateContent t={t} />,
    })
  }

  return (
    <button
      type="button"
      aria-label="Donate to author"
      className="size-6 text-xl leading-none hover:text-accent"
      onClick={() => openDonate()}
    >
      <i className="iconfont icon-user-heart"></i>
    </button>
  )
}

function DonateContent({ t }: { t: ReturnType<typeof getTranslations> }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
    >
      <h2 className="text-center mb-5">{t.actions.donate.thanks}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <img
          className="object-cover"
          width={300}
          height={300}
          src={sponsor.wechat}
          alt={t.actions.donate.wechatAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.div>
  )
}

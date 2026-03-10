"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import {
  CategoryBar,
  type DiscoveryCategory,
} from "@/src/components/shared/CategoryBar"

type Props = {
  value: DiscoveryCategory
}

export function CategoryBarClient({ value }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onChange = React.useCallback(
    (next: DiscoveryCategory) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("category", next)
      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams]
  )

  return <CategoryBar value={value} onChange={onChange} />
}


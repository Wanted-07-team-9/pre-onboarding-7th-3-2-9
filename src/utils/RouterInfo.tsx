import { useRouter } from "next/router"
import type { IParam } from "../types/interfaces"

export const RouterInfo = (): IParam => {
  const router = useRouter()
  const pathName = router.pathname || null
  const page = router.query.page || null
  const active = router.query.active || null
  const broker = router.query.broker || null
  const status = router.query.status || null
  const q = router.query.q || null
  return { pathName, page, active, broker, status, q }
} 
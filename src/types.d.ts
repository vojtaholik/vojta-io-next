declare module 'use-analytics'
declare module '@analytics/google-analytics'

export interface CloudinaryAsset {
  asset_id: string
  public_id: string
  format: string
  version: number
  resource_type: string
  type: string
  created_at: string // You might want to use Date type here if you parse the string
  bytes: number
  width: number
  height: number
  folder: string
  url: string
  secure_url: string
  next_cursor: string
  derived: any[] // You can specify the correct type for this property if known
  rate_limit_allowed: number
  rate_limit_reset_at: string // Use Date type if you parse the string
  rate_limit_remaining: number
}

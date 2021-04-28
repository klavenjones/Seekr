export interface Activity {
  userId: string
  activityId: string
  jobId?: string
  title?: string
  company?: string
  jobTitle?: string
  type?: string
  start: string
  end?: string
  done?: boolean
  note?: string
  createdAt: string
}

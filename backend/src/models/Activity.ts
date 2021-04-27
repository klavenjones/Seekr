export interface Activity {
  userId: string
  activityId: string
  jobId?: string
  company?: string
  jobTitle?: string
  type?: string
  start: string
  end?: string
  done?: boolean
  note?: string
  createdAt: string
}

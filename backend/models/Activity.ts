export interface Activity {
  userId: string
  activityId: string
  jobId?: string
  type?: string
  start: string
  end?: string
  done?: boolean
  createdAt: string
}

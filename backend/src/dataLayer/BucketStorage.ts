//Importing AWS components
import * as AWS from 'aws-sdk'

export class UserBucketStorage {
  constructor(
    private readonly s3 = new AWS.S3({ signatureVersion: 'v4' }),
    private readonly s3Bucket = process.env.S3_BUCKET,
    private readonly expiration = +process.env.URL_EXPIRATION
  ) {}

  async getAttachmentUrl(attachmentId: string): Promise<string> {
    const attachmentUrl = `https://${this.s3Bucket}.s3.amazonaws.com/user/${attachmentId}`
    return attachmentUrl
  }
  async getUploadUrl(attachmentId: string): Promise<string> {
    const uploadUrl = this.s3.getSignedUrl('putObject', {
      Bucket: this.s3Bucket,
      Key: attachmentId,
      Expires: this.expiration,
    })
    return uploadUrl
  }
}

export class ResumeBucketStorage {
  constructor(
    private readonly s3 = new AWS.S3({ signatureVersion: 'v4' }),
    private readonly s3Bucket = process.env.S3_BUCKET,
    private readonly expiration = +process.env.URL_EXPIRATION
  ) {}

  async getAttachmentUrl(attachmentId: string): Promise<string> {
    const attachmentUrl = `https://${this.s3Bucket}.s3.amazonaws.com/resume/${attachmentId}`
    return attachmentUrl
  }
  async getUploadUrl(attachmentId: string): Promise<string> {
    const uploadUrl = this.s3.getSignedUrl('putObject', {
      Bucket: this.s3Bucket,
      Key: attachmentId,
      Expires: this.expiration,
    })
    return uploadUrl
  }
}

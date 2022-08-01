/*
import {
  DeleteObjectsCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity"
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity"

export const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: process.env.NEXT_PUBLIC_AWS_REGION }),
    identityPoolId: process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID as string,
  }),
})

export function addFile(key: string, file: File | Blob | Buffer) {
  return s3
    .send(
      new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
        Key: key,
        Body: file,
      })
    )
    .then(() => console.log(`Successfully uploaded file: ${key}`))
    .catch((e) => console.error("There was an error uploading file: ", e.message))
}
*/

export {}

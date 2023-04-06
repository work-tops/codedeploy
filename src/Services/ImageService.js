import {s3bucket,region,accessKeyId,secretAccessKey} from "../Constants/Config";
import AWS from 'aws-sdk';

const S3_BUCKET =s3bucket;
const REGION =region;
const path = "images/";
// https://myproject-data.s3.eu-west-2.amazonaws.com/images/test.jpeg

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION
})

export const uploadImage = (file) => {
    
    const params = {
        // ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: path+file.name,
        ACL:"public-read-write", 
    };

    myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            // setProgress(Math.round((evt.loaded / evt.total) * 100))
        })
        .send((err) => {
            if (err) console.log(err)
        })
}
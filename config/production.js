module.exports = {
  mongoURI: process.env.MONGO_URI_KEY,
  //Make sure this is your own unique string
  secretOrKey: process.env.SECRET_OR_KEY,
  AWSBucketName: process.env.AWS_BUCKET_NAME,
  AWSAccessKey: process.env.AWS_ACCESS_KEY,
  AWSSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  AWSRegion: process.env.AWS_REGION,
  AWSUrl: process.env.AWS_URL
};

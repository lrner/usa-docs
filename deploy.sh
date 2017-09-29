#!/usr/local/bin/fish

yarn build

echo Deploying To $CONSTITUTION_S3_URL

aws s3 sync build/ $CONSTITUTION_S3_URL --acl public-read

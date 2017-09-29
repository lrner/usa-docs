#!/usr/local/bin/fish

yarn build

aws s3 sync build/ $CONSTITUTION_S3_URL --acl public-read

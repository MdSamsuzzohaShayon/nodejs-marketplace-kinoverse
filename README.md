[nodejs sequelize](https://www.youtube.com/watch?v=0Yu-4_Vj4sU)

learn - express, sequalize, typescript
database-1.cvxjhdyzqnyp.us-east-2.rds.amazonaws.com
https://www.youtube.com/watch?v=ypWzL3PdKx0
https://www.youtube.com/watch?v=yFgrSJGNj0E


`pm2 start ts-node -- --type-check -r tsconfig-paths/register src/server.ts`
`pm2 start ts-node -- -P tsconfig.server.json ./server/index.ts`
`pm2 start ts-node -- -P tsconfig.json ./src/index.ts`
__https://github.com/Unitech/pm2/issues/3503__

http://kinoverse.net/api/v2/subscribers
http://kinoverse.net/api/v1/users/get-all-users



https://github.com/TypeStrong/ts-node/issues/566
__https://github.com/TypeStrong/ts-node/issues/566__


AWS EC2 & RDS CONNECTION ERROR
__https://stackoverflow.com/questions/18551556/permission-denied-publickey-when-ssh-access-to-amazon-ec2-instance__
__https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-fix-permission-denied-errors/__
__https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html__
__https://aws.amazon.com/premiumsupport/knowledge-center/duplicate-master-user-mysql/__
__https://aws.amazon.com/premiumsupport/knowledge-center/reset-master-user-password-rds/__





#instance id =         i-0df85b675c6a1ba34
# security group = sg-0bcda9f6dc73c20ef


### S3 
- Create a s3 bucket with blocking public access
- Go to aws Identity and Access Management (IAM) -> create policy -> choose service s3 -> from read click on get object -> from write put object, delete object, etc
- From resource -> add arn -> specify bucket name -> object name check any
- next set a policy name and keep everything default
- Go to users -> create a user from application -> access key -> check programetic access
- In permission -> attach existing policy -> search name of the policy we made
- Add user and copy access key id and access key secret

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




### AWS certificate manager 
- Request a certificate -> enter domain (will get name and value for cname)- validate domain (by creating cname record we can validate)
- Create cname record from route 53 domain (if it is already created then just exit it) - > change cname and cname value according to aws ec2 certificate manager certificate - after validation we can see success message
- from ec2 instance - client load balencer (left panel) -> 

Create application load balancer
set  name - check all mapping zome (e.g: us-est-2b) - security group as same as ec2 instance group -> 
click on specific load balancer and edit http(80) -> remove default acction -> add redirect -> select https -> port number 443
Create target group - register a target

route 53


### Task List 📜📜

 📌 Hosting node js and vanilla js on AWS ec2 instance <br/>
 📌 Change backend code TypeScript to JavaScript to fix an issue of memory <br/>
 📌 Get subscriber and waitlist form working <br/>
 📌 AWS S3 setup to upload PDF file upload <br/>
 📌 Create a simple admin page in react <br/>
 📌 Setup domain and SSL certificate (AWS route 53, AWS load balancer, AWS certificate manager) <br/>
 📌 Convert Vanilla JavaScript to React.js (react-router, material-ui, redux toolkit) <br/>
 📌 A single page. 
 📌 Text and images explaining the contest (I will provide)
 📌 form for the user to sign up and include a payment processor that charges them $50
 📌 Login to and submit their screenplay via upload.
 📌 terms of service built in


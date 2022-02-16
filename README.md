### Task List 📜📜

 📌 Hosting node js and vanilla js on AWS ec2 instance  ✅  <br/>
 📌 Change backend code TypeScript to JavaScript to fix an issue of memory  ✅  <br/>
 📌 Get subscriber and waitlist form working  ✅  <br/>
 📌 AWS S3 setup to upload PDF file upload  ✅  <br/>
 📌 Create a simple admin page in react  ✅  <br/>
 📌 Setup domain and SSL certificate (AWS route 53, AWS load balancer, AWS certificate manager)  ✅  <br/>
 📌 Convert Vanilla JavaScript to React.js (react-router, material-ui, redux toolkit)  ✅  <br/>
 📌 Compress image <br/>

 📌 A single **page for screening contest**  <br/>
 📌 Text and images explaining the contest (I will provide) <br/>
 📌 form for the user to sign up and include a payment processor that charges them $50 <br/>
 📌 Login to and submit their screenplay via upload. <br/>
 📌 Accpet .pdf .fdx and .txt file format <br/>
 📌 terms of service built in <br/>

 📌 Send email notification for subscriber and waitlist  ✅ <br/>
 📌 On the form ption “Screenwriting” or “3D animation” options  ✅ <br/>

 📌 **employee payment portal** ([existing code](https://drive.google.com/drive/folders/1M4wkswl0zj05VfRZ-i9R8qtgS_1GdgG4)).  <br/>
 📌 subdomain only accessible by me, and people who have the link. <br/>
 📌  Privacy policy page<br/>
 📌  “partner” page. Form -> first name, last name, business email, business website, description (text box)





[6:14 am, 13/02/2022] Jaden, Upwork: I had an idea. I was looking at the admin dashboard. It looks really good by the way. One small update I would like is a way to extract the list of users to a form if possible. Or we could set it up so it auto emails them as soon as they sign up. Then we can implement a second button for when we launch that auto sends their promo codes. 
Let me know your thoughts on these ideas. No rush
[0:51 pm, 13/02/2022] Shayon: Ok.. We can do that.
We can send them auto email. But what that second button suppose to do? What kind of launch, little confuse
[0:52 pm, 13/02/2022] Jaden, Upwork: Since right now the website is just people signing up to be notified when the app and web all are launched
[0:52 pm, 13/02/2022] Jaden, Upwork: When it is actually done and launched we will send another email out to everyone who signed up




Then we will have a form that requests the following: first name, last name, business email, business website, description (text box)<br/>

### Learn - express, sequalize, typescript, [nodejs sequelize](https://www.youtube.com/watch?v=0Yu-4_Vj4sU)
 - __https://www.youtube.com/watch?v=ypWzL3PdKx0__
 - __https://www.youtube.com/watch?v=yFgrSJGNj0E__


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

### Create application load balancer
 - set  name - check all mapping zome (e.g: us-est-2b) - security group as same as ec2 instance group -> 
 - click on specific load balancer and edit http(80) -> remove default acction -> add redirect -> select https -> port number 443
 - Create target group - register a target
 - route 53
 


### Google Nodemailer
 - Go to __https://myaccount.google.com/lesssecureapps__


#Errors 
 - __https://github.com/Unitech/pm2/issues/3503__
 - __https://github.com/TypeStrong/ts-node/issues/566__


### AWS EC2 & RDS CONNECTION ERROR
 - __https://stackoverflow.com/questions/18551556/permission-denied-publickey-when-ssh-access-to-amazon-ec2-instance__
 - __https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-fix-permission-denied-errors/__
 - __https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html__
 - __https://aws.amazon.com/premiumsupport/knowledge-center/duplicate-master-user-mysql/__
 - __https://aws.amazon.com/premiumsupport/knowledge-center/reset-master-user-password-rds/__
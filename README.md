### Task List 📜📜

📌 Hosting node js and vanilla js on AWS ec2 instance ✅ <br/>
📌 Change backend code TypeScript to JavaScript to fix an issue of memory ✅ <br/>
📌 Get subscriber and waitlist form working ✅ <br/>
📌 AWS S3 setup to upload PDF file upload ✅ <br/>
📌 Create a simple admin page in react ✅ <br/>
📌 Setup domain and SSL certificate (AWS route 53, AWS load balancer, AWS certificate manager) ✅ <br/>
📌 Convert Vanilla JavaScript to React.js (react-router, material-ui, redux toolkit) ✅ <br/>
📌 Compress image ✅ <br/>

📌 A single **page for screening contest** <br/>
📌 Text and images explaining the contest (I will provide) <br/>
📌 form for the user to sign up and include a payment processor that charges them $50 <br/>
📌 Login to and submit their screenplay via upload. <br/>
📌 Accpet .pdf .fdx and .txt file format <br/>
📌 terms of service built in <br/>

📌 Send email notification for subscriber and waitlist ✅ <br/>
📌 On the form ption “Screenwriting” or “3D animation” options ✅ <br/>

📌 **employee payment portal** ([existing code](https://drive.google.com/drive/folders/1M4wkswl0zj05VfRZ-i9R8qtgS_1GdgG4)). <br/>
📌 subdomain only accessible by me, and people who have the link. <br/>
📌 **Privacy policy page** ✅ <br/>
📌 **“partner”** page. Form -> first name, last name, business email, business website, description (text box) ✅ <br/>
📌 When it is actually done and launched we will send another email out to everyone who signed up auto sends their promo codes. <br/>
📌 List all partner in dashboard. <br/>
📌 View all files and download all files in dashboard from s3. (resume, screen contest) <br/>
📌 Stripe setup <br/>

### New modification

- fix the type on the “partner” page where it says “business website” ✅
- create a section on the backend for the partner page information
- change the career page text. Change the main text that says earn and learn to “General application” “Kinoverse is always looking for talent in the industry. Fill out the form below to apply” ✅
- Then for now, remove the part that says “I’m interested in” and has the check boxes. ✅
- on the footer there is a typo it should say “Use the signup form to start your account and be notified of our launch. Please provide a valid email address to receive a $10 credit coupon towards your first job’s fees on the marketplace” ✅
- change the Facebook social media link to Facebook.com/teamkinoverse ✅
- on the home page make the phone screen flip through mulitple images of the UI

### Learn - express, sequalize, typescript, [nodejs sequelize](https://www.youtube.com/watch?v=0Yu-4_Vj4sU)

- **https://www.youtube.com/watch?v=ypWzL3PdKx0**
- **https://www.youtube.com/watch?v=yFgrSJGNj0E**

### Stripe - [There are three ways to accept payments on Stripe ](https://stripe.com/docs/payments/payment-intents/migration/charges)

- Method-1: Create a payment intent and confirm payment from front-end (Has more functionlity)
- Method-2: Create a checkout session and checkout one time payment in stripe hosted payment page
- The PaymentIntent contains a client secret, a key that’s unique to the individual PaymentIntent. On the client side of your application, Stripe.js uses the client secret as a parameter when invoking functions (such as stripe.confirmCardPayment or stripe.handleCardAction) to complete the payment. [Example](https://stripe.com/docs/payments/payment-intents#passing-to-client)
- This reference documents every object and method available in Stripe’s [browser-side Vanilla JavaScript library](https://stripe.com/docs/js)
- You can use Stripe.js’ APIs to tokenize customer information, collect sensitive payment details using customizable Stripe Elements, and accept payments with browser payment APIs like Apple Pay and the Payment Request API.
- [React components](https://stripe.com/docs/stripe-js/react) for Stripe.js and Stripe Elements

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

- set name - check all mapping zome (e.g: us-est-2b) - security group as same as ec2 instance group ->
- click on specific load balancer and edit http(80) -> remove default acction -> add redirect -> select https -> port number 443
- Create target group - register a target
- route 53

### Google Nodemailer

- Go to **https://myaccount.google.com/lesssecureapps**

#Errors

- **https://github.com/Unitech/pm2/issues/3503**
- **https://github.com/TypeStrong/ts-node/issues/566**

### AWS EC2 & RDS CONNECTION ERROR

- **https://stackoverflow.com/questions/18551556/permission-denied-publickey-when-ssh-access-to-amazon-ec2-instance**
- **https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-fix-permission-denied-errors/**
- **https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html**
- **https://aws.amazon.com/premiumsupport/knowledge-center/duplicate-master-user-mysql/**
- **https://aws.amazon.com/premiumsupport/knowledge-center/reset-master-user-password-rds/**

- Create dot env dot prod
- Register super suer
- Refactor database
- npm start
- Upload file for **Add to waitlist**, **add screenplay[ensureAuth]**
- Change some and update

### Dogital ocean

- [Tutorial](https://www.youtube.com/watch?v=akEfQt9oGmc&list=PLx-OQRQE9_maQssKO1zDd-VF7GAfRO2Rr&index=3)
- [nginx server block](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04)
- [nginx with let's encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)

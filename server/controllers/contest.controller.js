const db = require('../models');
// const User = require('../models/User');
const { Contest, User } = db;
const { s3 } = require('../config/s3-config');




const addScreenplay = async (req, res, next) => {
    try {
        const contestExist = await Contest.findOne({ where: { userId: req.userId } });
        if (contestExist) {
            // DELETE PREVIOUS IMAGE 
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: contestExist.screenplay
            };
            // console.log(params);
            s3.deleteObject(params, function (err, data) {
                if (err) console.log("Error - ", err, err.stack); // an error occurred
                else console.log("Data - ", data);           // successful response
                /*
                data = {
                }
                */
            });

            // UPDATE RECORD
            const updateContest = await contestExist.update({ screenplay: req.file.key });
            // The database now has "Ada" for name, but still has the default "green" for favorite color
            const saveContest = await updateContest.save();
            // Now the database has "Ada" for name and "blue" for favorite color
            res.status(200).json({ msg: "Screenplay is been submitted for contest - ", contest: saveContest });

        } else {
            // CREATE NEW RECORD 
            const user = await User.findOne({ where: { id: req.userId } });
            // Everything went fine.
            // console.log("Req file - ", req.file);
            // console.log("Req files - ", req.files);
            const contest = await Contest.create({ screenplay: req.file.key });

            // // contest.setUser(user); // ADD THIS CONTEST.BELONGSTO

            // // USER PARENT AND CONTEST CHILD 
            user.setContest(contest); // ONE CONTEST WILL HAVE ONLY ONE USER


            res.status(200).json({ msg: "Screenplay is been submitted for contest - ", contest, user });
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    addScreenplay
}
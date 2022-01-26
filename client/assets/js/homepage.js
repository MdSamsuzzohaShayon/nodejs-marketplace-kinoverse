$(document).ready(function () {

    /*
    //Sliding image
    var images = [], x = 0;
    images[0] = "assets/images/pre-launch-site/Hire-Message.png";
    images[1] = "assets/images/pre-launch-site/Hire-Update-Profil.png";
    images[2] = "assets/images/pre-launch-site/Worker-Feed-Timeline.png";
    images[3] = "assets/images/pre-launch-site/Worker-Message.png";
    images[4] = "assets/images/pre-launch-site/Worker-Preview-Profile.png";
    setInterval(function () {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.querySelector(".device-mockup").style.backgroundImage = `url('${images[x]}')`;
    }, 4000);
    //End Sliding image

    function initShare(userId) {
        const currentDomain = window.location.hostname;
        const emailLink = `mailto:?subject="Title"&body=View Slide at - ${currentDomain}/?id=${userId}`;
        const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${currentDomain}/?id=${userId}`;
        const twitterLink = `https://twitter.com/home?status=${currentDomain}/?id=${userId}`;
        const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${currentDomain}/?id=${userId}`;

        document.querySelector('.share-email').setAttribute('href', emailLink);
        document.querySelector('.share-facebook').setAttribute('href', facebookLink);
        document.querySelector('.share-twitter').setAttribute('href', twitterLink);
        document.querySelector('.share-linkedin').setAttribute('href', linkedinLink);
    }
    */

    /*
    // modal start
    var closeButtons = $(".modal .close");

    closeButtons.on('click', function () {
        this.closest('.modal').style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }
    */

    /*
    function processForm(e) {
        if (e.preventDefault) e.preventDefault();

        const name = document.querySelector('#subscribe_form #name').value;
        const email = document.querySelector('#subscribe_form #email').value;
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const inviteId = urlParams.get('id')
        $.ajax({
            method: "POST",
            url: `${BACKEND_URL}/v2/subscribers/create`,
            // url: "http://localhost:1337/api/v1/users/create-user",
            data: { name, email, inviteId }
        }).then(resp => {
            console.log("Response - ", resp);
            if (resp.success) {
                const userId = resp.data.user.id;
                const modal = document.querySelector('#myModal');
                modal.style.display = 'block';

                if (resp.data.new) {
                    modal.querySelector('h3').innerHTML = 'Thank you!'
                    modal.querySelector('p').innerHTML = 'Your credit will be found in your notification email. <br/> Share with your friends and potential clients below!'
                } else {
                    modal.querySelector('h3').innerHTML = 'You Already Subscribed!'
                    modal.querySelector('p').innerHTML = 'Share with your friends and potential clients below!'
                }
                initShare(userId)
            }
        }).catch(err => {
            console.log(err);
        });
        return false;
    }
    
    var form = document.querySelector('#subscribe_form');
    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
    */
});












// VANILLA JAVASCRIPT 
const notifyMe = document.getElementById("notify-me");
const emailAddress = document.getElementById("email");


// MODAL 
const modal = document.getElementById('myModal');
const modalHeader = modal.getElementsByTagName('h3')[0];
const modalParagraph = modal.getElementsByTagName('p')[0];
const closeModal = document.getElementById('modal-close');



async function addSubScriber() {
    try {
        // console.log("Email value");
        if (emailAddress.value === null || emailAddress.value === "") {
            modal.style.display = 'block';

            modalHeader.textContent = 'Invalid Email';
            emailAddress.value = "";
            initShare();
            return false;
        } else {
            const response = await axios.post(`${BACKEND_URL}/subscriber/add-subscriber`, { email: emailAddress.value });
            // console.log(response);
            // console.log(modalHeader);

            if (response.status === 200) {
                // const userId = resp.data.user.id;
                modal.style.display = 'block';
                modalHeader.textContent = 'Thank you!';
                emailAddress.value = "";
            } else if (response.status === 208) {
                modal.style.display = 'block';
                modalHeader.textContent = 'You Already Subscribed!';
                emailAddress.value = "";
            } else if (response.status === 406) {
                modal.style.display = 'block';
                modalHeader.textContent = 'Invalid Email!';
                emailAddress.value = "";
            }
            initShare();
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}



notifyMe.addEventListener('click', (e) => {
    e.preventDefault();
    addSubScriber();
});





closeModal.addEventListener('click', e => {
    // e.preventDefault();
    modal.style.display = "none";
});

window.addEventListener('click', e => {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    })
});



/*
let images = [], x = 0;
images[0] = "assets/images/pre-launch-site/Hire-Message.png";
images[1] = "assets/images/pre-launch-site/Hire-Update-Profil.png";
images[2] = "assets/images/pre-launch-site/Worker-Feed-Timeline.png";
images[3] = "assets/images/pre-launch-site/Worker-Message.png";
images[4] = "assets/images/pre-launch-site/Worker-Preview-Profile.png";
setInterval(function () {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.querySelector(".device-mockup").style.backgroundImage = `url('${images[x]}')`;
}, 4000);
//End Sliding image

*/
function initShare() {
    const currentDomain = window.location.hostname;
    const emailLink = `mailto:?subject="Title"&body=View Slide at - ${currentDomain}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${currentDomain}`;
    const twitterLink = `https://twitter.com/home?status=${currentDomain}`;
    const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${currentDomain}`;

    document.querySelector('.share-email').setAttribute('href', emailLink);
    document.querySelector('.share-facebook').setAttribute('href', facebookLink);
    document.querySelector('.share-twitter').setAttribute('href', twitterLink);
    document.querySelector('.share-linkedin').setAttribute('href', linkedinLink);
}
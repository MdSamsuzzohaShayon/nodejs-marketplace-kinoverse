const subscriber = document.getElementById('name');
const email = document.getElementById('email');
const resumeUpload = document.getElementById("resume");
const submit = document.getElementById('notify-me');

const modal = document.getElementById('myModal');
const modalHeader = modal.getElementsByTagName('h3')[0];
const modalParagraph = modal.getElementsByTagName('p')[0];
const closeModal = document.getElementById('modal-close');


const formData = new FormData();

resumeUpload.addEventListener('change', (e) => {
    // console.log(e.target.files);
    const singleFile = e.target.files[0];
    // console.log(singleFile.size, 1000 * 100 * 2);
    if (singleFile.size > 1000 * 100 * 2) {
        // ERROR 
        // PLEASE UPLOAD FILE WITH LESS THAN 2 MB SIZE 
        // console.log("file size is too large");
        modal.style.display = 'block';
        modalHeader.textContent = 'File size is too large!';

    } else if (singleFile.type !== "application/pdf") {
        // ERROR 
        // ONLY PDF FILE ARE ALLOWED TO UPLOAD
        // console.log("Please upload pdf file");
        modal.style.display = 'block';
        modalHeader.textContent = 'Please upload pdf file';
    } else {
        // console.log("Upload success");
        formData.append('resume', singleFile);
    }
});



submit.addEventListener('click', e => {
    e.preventDefault();
    // modal.style.display = 'block';
    if (email.value === null || email.value === '') {
        // ERROR 
        // NO EMAIL ADDRESS
        // console.log("No email address");
        modal.style.display = 'block';
        modalHeader.textContent = 'No email address!';

    } else if (subscriber.value === null || subscriber.value === '') {
        // ERROR 
        // NO NAME
        // console.log("No name");
        modal.style.display = 'block';
        modalHeader.textContent = 'No name found!';
    } else if (resumeUpload.value === null || resumeUpload.value === '') {
        // ERROR 
        // NO RESUME
        // console.log("No resume");
        modal.style.display = 'block';
        modalHeader.textContent = 'No resume attached!';
    } else {
        // console.log('Success');
        formData.append('email', email.value);
        formData.append('name', subscriber.value);
        const config = {
            method: 'put',
            url: `${BACKEND_URL}/subscriber/add-to-waitlist`,
            data: formData
        };

        axios(config)
            .then(function (response) {
                // console.log(response.status);
                if (response.status === 406) {
                    modal.style.display = 'block';
                    modalHeader.textContent = 'Please enter value of all field';
                } else if (response.status === 200 || response.status === 201) {
                    modal.style.display = 'block';
                    modalHeader.textContent = 'Successfully attached to waitlist!';
                    subscriber.value = '';
                    email.value = '';
                    resumeUpload.value = null;
                    formData.delete('name');
                    formData.delete('email');
                    formData.delete('resume');
                } else if (response.status = 208) {
                    modal.style.display = 'block';
                    modalHeader.textContent = 'All ready listed in waitlist!';
                    subscriber.value = '';
                    email.value = '';
                    resumeUpload.value = null;
                    formData.delete('name');
                    formData.delete('email');
                    formData.delete('resume');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});



closeModal.addEventListener('click', e => {
    // e.preventDefault();
    modal.style.display = "none";
});

window.addEventListener('click', e => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    })
});










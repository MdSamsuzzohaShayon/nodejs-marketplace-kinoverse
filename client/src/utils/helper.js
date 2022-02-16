import { openModal } from '../redux/slices/elementsSlice.js';


export const masureResize = () => {
    // const [winSize, setWinSize]
    let initialResize = null;
    const resizeObserver = new ResizeObserver(entities => {
        // console.log(entities);
        for (let entity of entities) {
            // console.log(entity.contentRect.width);
            if (entity.contentRect.width >= 900) {
                // FLEX DIRECTION REVERSE 
                initialResize = false;
            } else {
                initialResize = true;
            }
        }
    });
    resizeObserver.observe(document.body);
    return initialResize;
}







export const fileUploadHandler = (e, maxFileSizeKB, fileTypeList, dispatch, formData) => {
    const singleFile = e.target.files[0];
    if (!singleFile) return;
    let fileTypes = '';
    fileTypeList.forEach((c, i) => i === 0 ? fileTypes += c : fileTypes += `|${c}`);
    // fileTypeList.forEach((c, i) => { if (i === 0) { fileTypes += c } else { fileTypes += `|${c}` } });
    const re = new RegExp(`(${fileTypes})$`);

    // console.log(singleFile.size, 1000 * 100 * 2);
    if (singleFile.size > maxFileSizeKB) {
        // ERROR 
        // PLEASE UPLOAD FILE WITH LESS THAN 2 MB SIZE 
        dispatch(openModal({ heading: "File size it too large", body: `Please upload a file with size of less than ${maxFileSizeKB / 1000} MB` }));
    } else if (re.test(singleFile.type) === false) {
        // ERROR 
        // ONLY PDF FILE ARE ALLOWED TO UPLOAD
        dispatch(openModal({ heading: "Invalid file type", body: `Only ${fileTypes.toUpperCase()} file are allowed to upload.` }));
    } else {
        // console.log("Upload success");
        formData.append('resume', singleFile);
    }
}
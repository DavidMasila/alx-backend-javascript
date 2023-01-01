export default function uploadPhoto(fileName) {
    return Promise.reject((err) => {
        console.log(err + ' ' + '$fileName cannot be processed');
    });
}

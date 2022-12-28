export default function getFullResponseFromApit(success){
    return new Promise((resolve, reject) => {
        if(success){
            resolve({
                status: 200,
                bosy: 'Success',
            });
        } else {
            reject('The fake API is no working currently');
        }
    });
}
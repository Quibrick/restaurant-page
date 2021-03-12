import SocialMedia from './socialClass';

// input arg is array of string. Creates an object array containing the appropiate names and links using the SocialMedia class
function socialMediaArray(...args) {
    
    let objectArray = [];
    let argsLength = args.length;

    for (let i = 0; i < argsLength; i++) {

        const object = new SocialMedia(args[i]); //calls the SocialMedia constructor
        objectArray.push(object);
    }

    return objectArray;
}

export default socialMediaArray;
import SocialMedia from './socialClass';

function socialMediaArray(...args) {
    
    let objectArray = [];
    let argsLength = args.length;

    for (let i = 0; i < argsLength; i++){

        const object = new SocialMedia(args[i]);
        objectArray.push(object);
    }

    return objectArray;
}

export default socialMediaArray;
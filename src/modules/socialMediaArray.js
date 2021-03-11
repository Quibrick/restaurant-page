import {SocialMedia} from './socialClass';

function socialMediaArray(...args) {
    
    let objectArray = [];

    for (let i = 0; i < args.length; i++){

        const object = new SocialMedia(args[i]);
        objectArray.push(object);
    }

    return objectArray;
}

export {socialMediaArray};
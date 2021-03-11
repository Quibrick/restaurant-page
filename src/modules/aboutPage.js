import {pageCreator} from './pageViewCreator';
import {navBar} from './navBar';

pageCreator('about-page;')


function aboutPageLoader(){
    pageCreator('about-page')
    navBar('about-page');
}

export {aboutPageLoader};
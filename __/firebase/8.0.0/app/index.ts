
 import firebase from '@firebase/app';
 import { name, version } from '../package.json';
 
 firebase.registerVersion(name, version, 'app');
 
 export default firebase;
 
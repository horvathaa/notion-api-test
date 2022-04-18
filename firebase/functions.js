// import firebase from './firebase.js';
import { DB_COLLECTIONS } from './index.js';

export const fbSignInWithEmailAndPassword = async (email, password) => {
	return await firebase.auth().signInWithEmailAndPassword(email, password);
}

export const fbGetAnnotations = async (uid) => {
    const db= firebase.firestore();
    const annotationsRef = db.collection(DB_COLLECTIONS.VSCODE_ANNOTATIONS);
    const docs= await annotationsRef
                                                        .where('authorId', '==', user.uid)
                                                        .where('deleted', '==', false)
                                                        .where('outOfDate', '==', false)
                                                        .get();
    if(!docs || docs.empty) return []
    // const { data } = await getGithubUsernameForAnnotations(getListFromSnapshots(docs));
    return getListFromSnapshots(docs);
    // const annotations: Annotation[] = data.annotations && data.annotations.length ? data.annotations.map((a: any) => {
    // 	return buildAnnotation(a);
    // }) : [];
    // const annotations = dataAnnotations && dataAnnotations.length ? dataAnnotations.map((a: any) => {
    //     return buildAnnotation( { ...a, needToUpdate: false } );
    // }) : [];
    // return annotations;
}

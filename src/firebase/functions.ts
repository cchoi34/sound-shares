import * as firebase from "firebase";
import React from "react";
import { ICompositionStateType } from "../types/types";

// export function testingLoad() {
//     const rootRef = firebase.database().ref();

//     const nameRef = rootRef.child('name');
//         nameRef.on('value', snap => {
//             this.setState({
//                 name: snap.val(),
//             })
//         })

//         const imageRef = rootRef.child('imageURL');
//         imageRef.on('value', snap => {
//             this.setState({
//                 imageURL: snap.val(),
//             })
//         })
// }

export function getCompositions(component: React.Component) {
    try {
        const compositionRef = firebase.database().ref().child('compositions');
    
        compositionRef.on('value', snap => {
            const data = snap.val();
            let response;
            if (!Array.isArray(data)) {
                response = Object.values(data);
            } else {
                response = data;
            }
            component.setState({
                compositions: response
            });
        });
    } 
    catch (error) {
        console.log("Error in getting all Compositions!");
    }
}

export function getSingleComposition(component: React.Component, id: string) {
    try {
        const singleCompositionRef = firebase.database().ref().child("compositions").child(`${id}`);

        singleCompositionRef.on('value', snap => {
            const data = snap.val();
            if (!data) {
                return;
            }
            component.setState({
                name: data.name,
                imageURL: data.imageURL,
                description: data.description
            })
        });
    } 
    catch (error) {
        console.log("Error in getting single Composition!");
    }
}

export function postComposition(state: ICompositionStateType) {
    try {
        const defaults = getDefaultValues();
    
        const name = state.name || defaults.name;
        const imageURL = state.imageURL || defaults.imageURL;
        const description = state.description || defaults.description;
    
        const compositionList = firebase.database().ref().child('compositions');
        const newComposition = compositionList.push() as any;
        const key = newComposition.getKey();
    
        newComposition.set({
            'id': key,
            'name': name,
            'imageURL': imageURL,
            'description': description
        });
    } 
    catch (error) {
        console.log("Error in Posting a new Composition!");
    }
}

export function deleteComposition(id: string) {
    try {
        const rootRef = firebase.database().ref();
        const compositionRef = rootRef.child('compositions');
        const compToDelete = compositionRef.child(`${id}`);
        compToDelete.remove();
    } 
    catch (error) {
        console.log("Error in deleting composition!");
    }
}

export function updateComposition(id: string, body: ICompositionStateType) {
    try {
        const compositionRef = firebase.database().ref().child('compositions');
        const compToUpdate = compositionRef.child(`${id}`);
        
        const defaults = getDefaultValues();
        const name = body.name || defaults.name;
        const imageURL = body.imageURL || defaults.imageURL
        const description = body.description || defaults.description;

        console.log("setting new data in update: ", {id, name, imageURL, description});
        compToUpdate.set({
            'id': id,
            'name': name,
            'imageURL': imageURL,
            'description': description
        }); 
    }
    catch (error) {
        console.log("Error in updating composition!");
    }
}

function getDefaultValues() {
    const defaultImages = [    
                               "https://i.pinimg.com/originals/22/8e/30/228e303f741a61efc44deb7e793951df.png",
                               "https://cdn.statically.io/img/wallpapercave.com/wp/wp4591616.jpg",
                               "https://www.ecopetit.cat/wpic/mpic/2-27120_banner-aesthetic-youtube-backgrounds.jpg",
                               "https://i.pinimg.com/originals/cc/9a/04/cc9a04b4beca39e6b793821e1352efcb.jpg",
                               "https://4kwallpaper.wiki/wp-content/uploads/2019/07/41416.jpg",
                               "https://wallpaperaccess.com/full/826868.png",
                               "https://wallpaperplay.com/walls/full/1/9/8/141485.jpg",
                               "https://sfondo.info/i/original/4/5/6/41839.jpg",
                               "https://cutewallpaper.org/21/korean-aesthetic-wallpaper/Korean-Wallpaper-60-images-.jpg",
                               "https://wallpaperboat.com/wp-content/uploads/2020/04/winter-aesthetic-wallpaper-hd-7.jpg",
                               "https://images.hdqwalls.com/download/mercedes-benz-aesthetics-a-concept-to-1920x1080.jpg",
                               "https://i.pinimg.com/originals/5b/50/78/5b50786d19dc8d7d36603fce2894a123.jpg",
                               "https://cutewallpaper.org/21/computer-wallpapers-aesthetic/Desktop-Backgrounds-1920x1080-Vaporwave-Aesthetic-.jpg"
                          ];
    
        const randomImage = Math.floor(Math.random() * defaultImages.length);
        const imageURL = defaultImages[randomImage];
        const name = "no-name-provided";
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        return { name, imageURL, description };
}
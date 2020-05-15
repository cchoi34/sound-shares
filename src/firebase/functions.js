import * as firebase from "firebase";

export function testingLoad() {
    const rootRef = firebase.database().ref();

    const nameRef = rootRef.child('name');
        nameRef.on('value', snap => {
            this.setState({
                name: snap.val(),
            })
        })

        const imageRef = rootRef.child('imageURL');
        imageRef.on('value', snap => {
            this.setState({
                imageURL: snap.val(),
            })
        })
}

export function getCompositions(component) {
    try {
        const compositionRef = firebase.database().ref().child('compositions');
    
        compositionRef.on('value', snap => {
            const data = snap.val();
            let response;
            console.log("snap val: ", data);
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

export function getSingleComposition(component, id) {
    try {
        const singleCompositionRef = firebase.database().ref().child("compositions").child(`${id}`);

        singleCompositionRef.on('value', snap => {
            const data = snap.val();
            console.log("Setting single comp with: ", data);
            component.setState({
                singleComposition: data
            })
        });
    } 
    catch (error) {
        console.log("Error in getting single Composition!");
    }
}

export function postComposition(state) {
    try {
        const defaults = getDefaultValues();
    
        const name = state.name || defaults.name;
        const imageURL = state.imageURL || defaults.imageURL;
    
        const compositionList = firebase.database().ref().child('compositions');
        const newComposition = compositionList.push();
        const key = newComposition.getKey();
    
        newComposition.set({
            'id': key,
            'name': name,
            'imageURL': imageURL
        });
    } 
    catch (error) {
        console.log("Error in Posting a new Composition!");
    }
}

export function deleteComposition(id) {
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

function getDefaultValues() {
    const defaultImages = ["https://i.pinimg.com/originals/22/8e/30/228e303f741a61efc44deb7e793951df.png",
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

        return { name, imageURL };
}
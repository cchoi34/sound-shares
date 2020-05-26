import React from "react";
import * as firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const Upload: React.FC = () => {
    return(
        <section className="upload">
            <div className="upload__container upload__container--audio">
                <h2 className="upload__header-secondary">
                    New Audio
                </h2>
                <img src="https://cutewallpaper.org/21/waveform-wallpaper/64+-Sound-Waves-Wallpapers-on-WallpaperPlay.jpg" className="upload__image" />
                <button className="upload__button button">
                    <Link className="upload__button--link" to="#">Upload</Link>
                </button>
            </div>

            <div className="upload__container upload__container--video">
                <h2 className="upload__header-secondary">
                    New video
                </h2>
                <img src="https://cdn.hipwallpaper.com/i/57/2/hfgXAH.jpg" className="upload__image" />
                <button className="upload__button button">
                    <Link className="upload__button--link" to="#">Upload</Link>
                </button>
            </div>

            <div className="upload__container upload__container--composition">
                <h2 className="upload__header-secondary">
                    New composition
                </h2>
                <img src="https://i.redd.it/nddw0kak6nq41.jpg" className="upload__image" />
                <button className="upload__button button">
                    <Link className="upload__button--link" to="/upload-composition">Upload</Link>
                </button>
            </div>
     
        </section>
    )
}

export default Upload;
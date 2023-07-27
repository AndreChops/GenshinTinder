import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoDiscord, logoGithub, logoInstagram, logoYoutube, musicalNote, person, personCircle, personCircleOutline, personCircleSharp, personOutline } from "ionicons/icons";
import './Profile.css';

const Profile: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
                <IonButtons slot="end">
                    <IonButton routerLink="/profile">
                        <IonIcon icon={person}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                 <IonCardContent className="ion-text-center">
                    <img id="profile-image" src="./assets/image/acep.jpg" alt=""/>
                    <h1 id="name">Andre Chandra Putra</h1>
                    <h2>00000036266</h2><br></br>
                    <IonButton className="instagram-button" expand="block" target="_blank" href="https://www.instagram.com/andrechandraap/"><IonIcon id="profile-icon" icon={logoInstagram}/>Instagram</IonButton>
                    <IonButton className="discord-button" expand="block" target="_blank" href="https://discord.com"><IonIcon id="profile-icon" icon={logoDiscord}/>Discord</IonButton>
                    <IonButton className="youtube-button" expand="block" target="_blank" href="https://www.youtube.com/channel/UC0wmJso24wL1Ycls_rKu4yA"><IonIcon id="profile-icon" icon={logoYoutube}/>Youtube</IonButton>
                    <IonButton className="github-button" expand="block" target="_blank" href="https://github.com/AndreChops"><IonIcon id="profile-icon" icon={logoGithub}/>GitHub</IonButton>
                    <IonButton className="spotify-button" expand="block" target="_blank" href="https://open.spotify.com/user/21kpayoh2h76lr3izibl7txyi?si=71a1e6e4de514fa4"><IonIcon id="profile-icon" icon={musicalNote}/>Spotify</IonButton>
                    </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    );
};

export default Profile;
import { IonActionSheet, IonAlert, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import { arrowBackCircleOutline, close, female, heart, person, personCircleSharp, trash } from "ionicons/icons";
import React from "react";
import { useContext, useRef, useState } from "react";
import CouplesContext from "../data/couple-context";
import { Couple_List } from "./List";
import './Target.css';

const Target: React.FC = () => {

    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
    const [actionSheet, setShowActionSheet] = useState(false);
    const [ids, setId] = useState<string>();
    const couplesCtx = useContext(CouplesContext);

    const deleteCouple = (id: string) => {
        slidingOptionRef.current?.closeOpened();
        couplesCtx.couples.forEach(element => {
            if (element.id !== id) {
                
            }else{
                Couple_List.push({
                    id: element.id,
                    name: element.name,
                    desc: element.desc,
                    gender: element.gender,
                    image: element.image
                })
            }
        });
        couplesCtx.deleteCouple(id);
    }

    const actionSheetHandler = (id: string) => {
        setShowActionSheet(true);
        setId(id);
    }


    return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Waifu Target</IonTitle>
                <IonButtons slot="end">
                    <IonButton routerLink="/profile">
                        <IonIcon icon={person}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
        {couplesCtx.couples.length !=0 ?
            couplesCtx.couples.map(couples =>(
            <IonItemSliding key={couples.id} ref={slidingOptionRef}>

                <IonItemOptions side="end">
                    <IonItemOption color="danger" onClick={() => actionSheetHandler(couples.id)}>
                        <IonIcon slot="icon-only" icon={close}></IonIcon>
                    </IonItemOption>
                </IonItemOptions>

                <IonItem lines="full">
                    <IonAvatar slot="start" id="avatar">
                        <img src={couples.image} alt="" />
                    </IonAvatar>
                    <IonLabel>
                        <h1>{couples.name}</h1>
                        <h3>{couples.desc}</h3>
                        <h3><IonIcon slot="icon-ony" icon={female}/>{couples.gender}</h3>
                    </IonLabel>
                </IonItem>
            </IonItemSliding>
        ))
        
        :
        
        <IonGrid>
            <IonRow className="target-grid">
                <h2>Don't have a waifu yet?</h2>
            </IonRow>
            <IonRow className="target-grid">
                <IonButton expand="block" routerLink="/List">
                    Find a Waifu
                </IonButton>
            </IonRow>
        </IonGrid>
    }
        {ids &&
        <IonActionSheet isOpen={actionSheet} onDidDismiss={() => setShowActionSheet(false)}
            header="Are you sure ?"
            buttons={[{
            icon: trash,
            text: "Delete her from your list?",
            handler: () => deleteCouple(ids)
        },
        {   
            text: "No, go back!",
            icon: arrowBackCircleOutline, }
            ]} />
        }
        </IonContent>
    </IonPage>
    );
};

export default Target;


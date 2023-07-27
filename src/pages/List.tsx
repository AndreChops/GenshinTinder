import { isPlatform } from "@ionic/core";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonIcon, IonItemOption, IonItemOptions, IonItemSliding, IonFabButton, IonFab, IonAlert, IonToast, IonModal, IonCol, IonGrid, IonRow, IonInput, IonAvatar, IonLoading } from "@ionic/react";
import { addOutline, ban, banSharp, create, female, heart, person, personCircleSharp, text, trash, trashBin } from "ionicons/icons";
import React, { HtmlHTMLAttributes, useContext, useRef, useState } from "react";
import CouplesContext, { Couple } from "../data/couple-context";
import './List.css';

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Redirect } from "react-router";

const shuffleSlidingList = (Couple_List: { id: string; name: string; desc: string; gender: string; image: string; }[]) => [...Couple_List].sort(() => Math.random() - 0.5);

export const Couple_List = [{
        id: 'f1',
        name: 'Yae Miko',
        gender: 'Female',
        desc: 'FoxLady.',
        image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/01/01/3208480698.png'
    },
    {
        id: 'f2',
        name: 'Ei',
        gender: 'Female',
        desc: 'Electro Archon.',
        image: 'https://1.bp.blogspot.com/-2aAFYSlPEr4/YQ_-iL4fKxI/AAAAAAAAL7o/3aABBxj7SXMKf14PCKfKsVp8hFQmVVdnwCLcBGAsYHQ/s1631/Raiden%2BShogun%2BMaterial.jpg'
    },
    {
        id: 'f3',
        name: 'Yoimiya',
        gender: 'Female',
        desc: 'She likes fireworks.',
        image: 'https://www.ginx.tv/uploads2/Genshin_Impact/Yoimiya_5.jpg'
    },
    {
        id: 'f4',
        name: 'Ayaka',
        gender: 'Female',
        desc: 'Ayaya, Ayaya!',
        image: 'https://foto.kontan.co.id/eQpBGeMMmMkhHSwU5oO1RAn-Gjw=/smart/2021/07/15/2100661850p.jpg'
    },
    {
        id: 'f5',
        name: 'Kujou Sara',
        gender: 'Female',
        desc: 'Broken c6.',
        image: 'https://www.siliconera.com/wp-content/uploads/2021/09/genshin-impact-sara-kujou-1.jpeg'
    },
    {
        id: 'f6',
        name: 'Ganyu',
        gender: 'Female',
        desc: 'Sleep deprived beauty.',
        image: 'https://gamebrott.com/wp-content/uploads/2021/01/ganyu-wangi.jpg'
    },
    {
        id: 'f7',
        name: 'HuTao',
        gender: 'Female',
        desc: 'Wants to bury Qiqi.',
        image: 'https://kincirimage.s3-ap-southeast-1.amazonaws.com/production/2021-03/hu-tao-support~c60fa953-2f2d-4286-bd01-cef2df9ee432.jpg'
    },
    {
        id: 'f8',
        name: 'Ningguang',
        gender: 'Female',
        desc: 'Rich Lady.',
        image: 'https://gadgetapa.com/wp-content/uploads/2020/12/Guide-dan-Build-Ningguang-Genshin-impact_2.jpg'
    },
    {
        id: 'f9',
        name: 'Beidou',
        gender: 'Female',
        desc: 'Pirate Lady.',
        image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/01/Beidou-Strong-Genshin-Impact-Cropped.jpg?q=50&fit=crop&w=1400&dpr=1.5'
    },
    {
        id: 'f10',
        name: 'Keqing',
        gender: 'Female',
        desc: 'Zhongli Simp.',
        image: 'https://gamebrott.com/wp-content/uploads/2021/11/7-Fakta-Menarik-Keqing-di-Genshin-Impact-Waifu-Wangy-Idaman-Para-Traveler-Header.jpg'
    },
    {
        id: 'f11',
        name: 'Yanfei',
        gender: 'Female',
        desc: 'My lawyer can`t be this cute.',
        image: 'https://i.ytimg.com/vi/zi1sqf1kTmI/maxresdefault.jpg'
    },
    {
        id: 'f12',
        name: 'YunJin',
        gender: 'Female',
        desc: 'Opera lady.',
        image: 'https://gamedaim.com/wp-content/uploads/2021/09/Yunjin-800x450.jpg'
    },
    {
        id: 'f13',
        name: 'Jean',
        gender: 'Female',
        desc: 'Overworking mommy.',
        image: 'https://esportsku.com/wp-content/uploads/2021/01/genshin-impact-jean-acting-grand-master-2.jpg'
    },
    {
        id: 'f14',
        name: 'Lisa',
        gender: 'She can make you buy headphones.',
        desc: 'Seductive librarian.',
        image: 'https://gamebrott.com/wp-content/uploads/2021/06/Rayakan-Ulang-Tahun-Inilah-Fakta-Menarik-Tentang-Lisa-dari-Genshin-Impact-yang-Perlu-Kamu-Ketahui-1.png'
    },
    {
        id: 'f15',
        name: 'Eula',
        gender: 'Female',
        desc: 'Proof that one sneeze can make you simp.',
        image: 'https://dailyspin.id/wp-content/uploads/2021/05/Eula-Genshin-Impact-YT.jpg'
    },
]

const randomShuffleList = shuffleSlidingList(Couple_List);

const List: React.FC = () => {

    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
    const couplesCtx = useContext(CouplesContext);
    const [showLoad, setShowLoading] = useState(false)
    const [startTarget, setStartTarget] = useState(false);
    const [selectedCouple, setSelectedCouple] = useState<{id: string, name: string, gender:string, desc: string, image: string} | null>();

    let exist: any[] = [];
    couplesCtx.couples.map(target => exist.push(target.id))

    const addCouple = (id: string, nama: string, keterangan: string, gender: string, image:string) => {
        slidingOptionRef.current?.closeOpened();
        couplesCtx.addCouple(id, nama, keterangan, gender,image)
        Couple_List.forEach((value,index)=>{
          if(value.id===id){
            Couple_List.splice(index,1);
          } 
        });
        console.log(Couple_List);
        setShowLoading(true)
    }
    setTimeout(() => {
        setShowLoading(false);
    }, 3000)

    return(  
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Genshin Tinder</IonTitle>
                    <IonButtons slot="end">
                        <IonButton routerLink="/profile">
                            <IonIcon icon={person}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        slidesPerGroup={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {randomShuffleList.map((item) => (
                            <SwiperSlide key={item.id}>
                                <IonCard className="margin-card">
                                    <IonAvatar id="swiper-img">
                                        <img src={item.image} alt="" />
                                    </IonAvatar>
                                    <h3 className="card-title">{item.name}</h3>
                                </IonCard>
                            </SwiperSlide>
                        ))}
                    </Swiper><br></br>
                    {Couple_List.map((item) => (
                        <IonItemSliding key={item.id} ref={slidingOptionRef}>

                            <IonItemOptions side="end">
                                <IonItemOption color="danger" disabled={exist.indexOf(item.id) > -1} routerLink="/Target" onClick={() => addCouple(item.id, item.name, item.desc, item.gender, item.image)}>
                                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                                </IonItemOption>
                            </IonItemOptions>

                            <IonItem lines="full">
                                <IonAvatar slot="start" id="avatar">
                                    <img src={item.image} alt="" />
                                </IonAvatar>
                                <IonLabel>
                                    <h1>{item.name}</h1>
                                    <h3>{item.desc}</h3>
                                    <h3><IonIcon slot="icon-ony" icon={female}/>{item.gender}</h3>
                                </IonLabel>
                            </IonItem>

                        </IonItemSliding>
                    ))}
                    <IonLoading isOpen={showLoad} onDidDismiss={() => setShowLoading(false)} message={'Adding Waifu...'} duration={3000}/>
                </IonList>
            </IonContent>
        </IonPage>
    )
};


export default List;
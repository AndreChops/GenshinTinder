import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToggle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import List from './pages/List'
import Profile from './pages/Profile';
import Target from './pages/Target';
import { discOutline, list, listCircleOutline, listOutline, mailOutline, moon, person, personCircleSharp, settings, warning } from 'ionicons/icons'
import { videocamOutline} from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CouplesContextProvider from './data/CouplesContextProvider';


setupIonicReact();

const App: React.FC = () => {

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  
  return (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
              <IonTitle>Genshin Tinder</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/list">
                <IonIcon slot="start" icon={listOutline}/>
                <IonLabel>Waifu List</IonLabel>
              </IonItem>
              <IonItem button routerLink="/target">
                <IonIcon slot="start" icon={discOutline}/>
                <IonLabel>Target</IonLabel>
              </IonItem>
              <IonItem button routerLink="/profile">
                <IonIcon slot="start" icon={person}/>
                <IonLabel>Profile</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon
                  slot="start" icon={moon} className="component-icon component-icon-dark" />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <CouplesContextProvider>
        <IonRouterOutlet id="main">
          <Route path="/list" component={List} />
          <Route path="/target" component={Target} />
          <Route path="/profile" component={Profile} />
          <Redirect exact from="/" to="/list" />
        </IonRouterOutlet>
      </CouplesContextProvider>
    </IonReactRouter>
  </IonApp>
  )
};

export default App;

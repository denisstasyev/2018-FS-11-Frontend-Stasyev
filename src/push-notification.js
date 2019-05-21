import firebase from "firebase";

let config = {
  messagingSenderId: "225679507199"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

export const askForPermissioToReceiveNotifications = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("Your token:", token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

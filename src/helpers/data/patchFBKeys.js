import axios from 'axios';
import PinDetails from '../../views/PinDetails';

const baseUrl = 'https://fir-cows-95ae.firebaseio,com/pinterest-webpack';

const patchFBBoardKeys = () => new Promise((resolve,reject) => { axios.get(`${baseUrl/boards.json}`).then((response) => {
    const keys = Object.keys(response.data);
    keys.forEach((key) => {
        axios.patch(`${baseUrl}/boards/${key}.json`, {firebaseKey:key});
    });
}) .catch((error) => reject(error));

});

const patchFBPinKeys = () => new Promise((resolve, reject) => { axios.get(`${baseUrl/pins.json}`).then((response) => { 
    const keys = Object.keys(response.data);
    keys.forEach((key) => {
        axios.patch(`${baseUrl}/pins/${key}.json`, {firebaseKey : key});
});
}) .catch((error) => reject(error));

});

export { patchFBBoardKeys, patchFBPinKeys }
import axios from 'axios';

const baseUrl = 'https://react-pinterest-4f3cf.firebaseio.com/';

const getAllUserBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${boardId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createBoard = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/boards.json`, object)
    .then((response) => {
      console.warn(response);
      axios.patch(`${baseUrl}/boards/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const updateBoard = (object) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/boards/${object.firebaseKey}.json`, object)
    .then(resolve).catch((error) => reject(error));
});

export {
  getAllUserBoards, getSingleBoard, createBoard, updateBoard,
};
const searchBoards = (userId, searchTerm) => new Promise((resolve, reject) => {
  getAllUserBoards(userId)
    .then((response) => {
      const searched = response.filter((board) => board.name.toLowerCase().includes(searchTerm));
      resolve(searched);
    }).catch((error) => reject(error));
});

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const deletePinBoard = (firebaseKey) => axios.delete(`${baseUrl}/pin-boards/${firebaseKey}.json`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllUserBoards, getSingleBoard, createBoard, updateBoard, deleteBoard, deletePinBoard, searchBoards,
};

# 🎧 Moody Player

Moody Player is an innovative web application that **enhances your music listening experience** by detecting your facial expressions in real-time and recommending songs that match your current mood.

![Moody Player Screenshot](https://ibb.co/JjpgXR2t)

---

## 🧠 Features

- 🎥 **Real-time Mood Detection** – Uses your webcam and [face-api.js](https://github.com/justadudewhohacks/face-api.js) to analyze facial expressions (e.g., happy, sad, angry, surprised).
- 🎵 **Personalized Playlists** – Fetches songs from the backend API based on detected emotion.
- 🔊 **Dynamic Music Playback** – Plays songs directly in your browser.
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop.
- 📤 **File Upload Support** – Easily upload new songs using the backend API.

---

## 🛠️ Tech Stack

### 🖥️ Frontend
| Technology | Description |
|-----------|-------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) | React for UI components |
| ![Face API](https://img.shields.io/badge/FaceAPI.js-FF6F61?style=for-the-badge&logo=tensorflow&logoColor=white) | Real-time facial expression detection |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) | API requests |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3) | Styling & layout |

### 🧩 Backend
| Technology | Description |
|------------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Web framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) | NoSQL database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | MongoDB ORM |
| ![Multer](https://img.shields.io/badge/Multer-FF9800?style=for-the-badge) | File upload middleware |

---

## ⚙️ Setup & Installation

### 📦 Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

### 1. 🔁 Clone the Repository

```bash
git clone <your-repository-url>
cd moody-player
```

### 2.🚀 Backend Setup
```bash
cd backend
npm install
```
Create a .env file:
```bash
MONGO_URI=mongodb://localhost:27017/moodyplayer
PORT=3000
```

Start the server:

```bash
npm start
```
The backend will run at: http://localhost:3000

3. 🌐 Frontend Setup
```bash
cd ../frontend
npm install
```
🔽 Download Face API Models
Download the following from face-api.js models repo:

tiny_face_detector_model.json

tiny_face_detector_model.weights

face_expression_model.json

face_expression_model.weights

Place them in:

frontend/public/models

Start React App
```bash
npm start
```
Frontend will run at: http://localhost:5173

🧪 Usage
✅ Allow webcam access when prompted.

🧠 Click the Detect Mood button.

🎶 Enjoy the auto-generated playlist tailored to your facial expression.

🤝 Contributing
Contributions are welcome!
If you have suggestions for new features or bug fixes:

Open an issue

Submit a pull request

📄 License
This project is licensed under the MIT License.
Feel free to use and modify for personal or commercial projects.

🙏 Acknowledgments
face-api.js by @justadudewhohacks

Music icons by Remix Icon

yaml
Copy code

---

### ✅ Instructions to Use:
1. Open a code editor.
2. Create a file named `README.md` in your project's root folder.
3. Paste the above content into it and save.












# 📝 Todo API with Attachments

A simple **Node.js REST API** for managing Todos.  
This project allows users to:  
- ✅ Create, update, and delete todos.  
- ✅ Mark todos as completed.  
- 🖼️ Attach images or 🎙️ audio files to each todo.  

---

## 🚀 Features
- **CRUD APIs** for todos  
- **Mark completed** functionality  
- **File upload support** (images/audio)  
- **mysql/sequelize**  
- **Express.js** backend framework  

---

## 🛠️ Tech Stack
- **Node.js** (Runtime)  
- **Express.js** (Framework)  
- **mysql** with **Sequelize** (Database)  

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ramees-Raja/Todo-API-node-express-mysql.git
   ```

2. **Open terminal in project folder**
   ```
   cd Todo-API-node-express-mysql
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the server**
   ```bash
   npm run start-dev
   ```

---

## 🔑 API Endpoints

### Todos
| Method | Endpoint           | Description |
|--------|--------------------|-------------|
| POST   | `/api/todos`       | Create a new todo (with optional file upload) |
| GET    | `/api/todos`       | Get all todos |
| GET    | `/api/todos/:id`   | Get a single todo |
| PUT    | `/api/todos/:id`   | Update a todo |
| PATCH  | `/api/todos/:id/complete` | Mark a todo as completed |
| DELETE | `/api/todos/:id`   | Delete a todo |

---

## 👨‍💻 Author - Ramees Raja
Developed with ❤️ using **Node.js + Express + Mysql**.  
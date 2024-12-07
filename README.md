
# **Event Management Application**

A full-stack web application that allows users to create, view, update, and delete events, built using Django (backend) and React (frontend).

---

## **Features**
- Add, edit, and delete events with details like title, date, and description.
- View a list of all events in an organized manner.
- Seamless communication between the Django backend and React frontend.

---

## **Tech Stack**
- **Backend**: Django (Django REST Framework)
- **Frontend**: React (with Axios for API calls)
- **Database**: SQLite (default Django database)

---

## **Getting Started**
Follow these steps to set up the project locally:

---

### **1. Prerequisites**
- Python (3.8+)
- Node.js and npm
- Git

---

### **2. Clone the Repository**
```bash
git clone <repository-url>
cd Event-Management-Application
```

---

### **3. Backend Setup (Django)**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv myvenv
   source myvenv/bin/activate  # On Windows: myvenv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the Django server:
   ```bash
   python manage.py runserver
   ```
   The backend will run at `http://127.0.0.1:8000/`.

---

### **4. Frontend Setup (React)**
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:5173/`.

---

### **5. Verify the Application**
- Access the frontend at `http://localhost:5173/`.
- Ensure the backend API endpoints (`http://127.0.0.1:8000/events`) are accessible.
- Create, update, view, or delete events.

---

## **API Endpoints**
### **Base URL**: `http://127.0.0.1:8000/`
- **GET /events**: Retrieve all events.
- **POST /events/**: Create a new event.
- **PUT /events/:id/**: Update an existing event.
- **DELETE /events/:id/**: Delete an event.

---

## **Future Enhancements**
- User authentication and event ownership.
- Add search and filter functionality for events.
- Integration with a calendar view for event scheduling.
- Deploy the application on a cloud platform.

---

## **Contributing**
Feel free to fork this repository and submit pull requests. Contributions are welcome!

---

## **License**
This project is licensed under the MIT License.

---

## **Contact**
For questions or feedback, please reach out at [praveenreddy9248@gmail.com].

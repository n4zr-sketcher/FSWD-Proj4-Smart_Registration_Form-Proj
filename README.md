# 📝 Smart Registration Form

A simple and responsive **Student Registration Form** built using **HTML, CSS, and JavaScript**. The project demonstrates real-time form validation, DOM manipulation, event handling, and a live character counter.

## 🌐 Live Demo

Check out the live version of the project:

👉 **[Smart Registration Form - Live Demo](https://n4zr-sketcher.github.io/FSWD-Proj4-Smart_Registration_Form-Proj/)**

## 📌 About the Project

The **Smart Registration Form** is designed to provide a clean and user-friendly registration experience.

The form validates user input in real time while the user is typing. It provides appropriate error messages for invalid inputs and keeps the Submit button disabled until the required fields are valid.

This project was created as a practical exercise to understand the fundamentals of **HTML forms, CSS styling, JavaScript events, and DOM manipulation**.

## ✨ Features

* 👤 Name field validation
* 📧 Email format validation
* 🔐 Password validation with a minimum of 6 characters
* 📝 Bio textarea with a 200-character limit
* 🔢 Real-time Bio character counter
* ⚠️ Real-time error messages
* 🚫 Submit button remains disabled until required fields are valid
* ⚡ Real-time validation using the `input` event
* 🎨 Clean and simple user interface
* 📱 Responsive design

## 🛠️ Technologies Used

* **HTML5** – Structure of the registration form
* **CSS3** – Styling and responsive layout
* **JavaScript** – Form validation, event handling, and DOM manipulation

## 📂 Project Structure

```text
Smart-Registration-Form/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧩 Form Fields

The registration form contains the following fields:

| Field    | Validation                     |
| -------- | ------------------------------ |
| Name     | Cannot be empty                |
| Email    | Must have a valid email format |
| Password | Minimum 6 characters           |
| Bio      | Maximum 200 characters         |

The Bio field also displays a live character counter:

```text
0 / 200 characters
```

The counter updates automatically as the user types.

## ⚙️ How It Works

### 1. Name Validation

The Name field is checked whenever the user enters or removes text.

If the field is empty, an error message is displayed.

### 2. Email Validation

The Email field is checked using a JavaScript pattern to make sure the entered value follows a valid email format.

### 3. Password Validation

The password must contain at least **6 characters**.

If fewer than 6 characters are entered, an error message is displayed.

### 4. Bio Character Counter

The Bio field has a maximum length of **200 characters**.

JavaScript reads the length of the entered text and updates the counter in real time.

Example:

```text
45 / 200 characters
```

### 5. Submit Button

The Submit button remains disabled while the required fields contain invalid information.

Once the required fields become valid, the button is enabled.

## 🧠 JavaScript Concepts Practiced

This project was created to practice fundamental JavaScript concepts, including:

* `document.getElementById()`
* DOM manipulation
* `addEventListener()`
* `input` events
* `submit` events
* `if...else` conditions
* `.value`
* `.length`
* `.textContent`
* Regular expressions
* Form validation
* Button properties

## 🚀 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

2. Open the project folder.

3. Open `index.html` in your web browser.

4. Enter information into the form and test the real-time validation.

> No additional libraries or frameworks are required.

## 🎯 Project Objective

The main objective of this project is to understand how **HTML, CSS, and JavaScript work together** to create an interactive web form.

It focuses on learning JavaScript through practical implementation rather than using external libraries or frameworks.

## 🔮 Future Improvements

Some possible improvements for future versions include:

* Add more form fields
* Add stronger password validation
* Add success messages
* Improve mobile responsiveness
* Add form reset functionality
* Store submitted information
* Add additional accessibility features

## 👨‍💻 Author

**Imran Naseer**

This project was created as part of my learning journey in **Web Development**, with a focus on HTML, CSS, and JavaScript fundamentals.

## 📄 License

This project is available for educational and learning purposes.

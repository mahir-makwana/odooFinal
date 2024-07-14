# Library Management System

## Overview

The Library Management System is a comprehensive solution designed to manage book inventories, track borrower details, and handle transactions efficiently. This system includes robust features like user management, book inventory management, a borrowing system, advanced search and recommendations, notifications and alerts, and reporting.

## Features

1. **User Management**
   - Login/Logout functionality for Admin and Users.
   - Role-based access control: Admin, Librarian, and User roles.

2. **Book Inventory Management**
   - Add, update, delete, and search for books.
   - Book details: ISBN, title, author, publisher, year, genre, quantity.
   - Real-time availability status.
   - Integration with the Google Books API to fetch book details using ISBN.

3. **Borrowing System**
   - Checkout process for borrowing books.
   - Return process including due dates and late fees calculation.
   - History tracking for each user's borrowed and returned books.

4. **Search and Recommendations**
   - Advanced search options (by title, author, genre, etc.).
   - Book recommendations based on user history or popular trends.

5. **Notifications and Alerts**
   - Email or SMS notifications for due dates, new arrivals, etc.
   - Alerts for overdue books and outstanding fees.

6. **Reporting**
   - Generate reports on book usage, overdue items, user activity, etc.
   - Dashboard for admins and librarians to see real-time statistics.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML, CSS, JavaScript
- **APIs:** Google Books API
- **Notifications:** Nodemailer (for email notifications), Twilio (for SMS notifications)
- **Authentication:** JWT (JSON Web Tokens), bcrypt.js for password hashing

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- Google Books API key
- Email service credentials
- Twilio account credentials

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/voidMatrix-getit/odoo.git
   cd odoo

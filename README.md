
# 🧑‍💼 HR Dashboard

A modern HR management dashboard built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Zustand**, and **NextAuth.js**. This dashboard supports employee search, filter, bookmarking, analytics visualization, theme toggling, user creation, and route protection via authentication.



##  Features

1. **Login/Logout with NextAuth.js**
2. **Protected Routes** (Bookmarks, Create User, Analytics)
3. **Dark/Light Mode** (persistent with `localStorage`)
4. **View & Filter Employees**
5. Filter by **Department** or **Performance Rating**
6. Live **search** across name, email, and department
7. **Bookmark Employees** (Persistent with `localStorage` using Zustand)
8. **Create New Users** (Modal with **form validation**)
9. **Analytics Page** (Charts (Bar, Line) to visualize data)
10. **Pagination** for employees
9. **Detailed Employee Page** (Tabs: Overview, Projects, Feedback)



##  Tech Stack

- **Frontend**: Next.js 15 App Router, Tailwind CSS
- **State Management**: Zustand
- **Auth**: NextAuth.js (credentials-based)
- **Charting**: Chart.js (react-chartjs-2)
- **UI Enhancements**: Custom Modals, Dark Mode, Responsive Grid



##  Demo Credentials

```
admin@gmail.com
123456
```

## Folder Structure

```
src/
├── app/
│ ├── analytics/
│ ├── bookmarks/
│ ├── employee/[id]/
│ ├── login/
│ ├── api/auth/[...nextauth]/route.js
├── components/
│ ├── Card/ → UserCard.jsx
│ ├── Charts/ → Chart components
│ ├── UI/ → MultiSelect, Tabs, Button, Modal
| ├── Layout/ → Navbar
├── store/ → Zustand (bookmark store)
├── hooks/ → useSearch, useFetchUsers
├── lib/ → authOptions
```

## Getting Started

### 1. Clone Repo

```
git clone https://github.com/your-username/hr-dashboard.git
cd hr-dashboard
```
### 2. Install Dependencies

```
npm install
```
### 3. Set Environment Variables

Create a .env.local file:
```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

Generate a strong secret:

```
openssl rand -base64 32
```

### 4. Run the App

```
npm run dev
```

Visit: http://localhost:3000


## Demo Photos

### 1. NextAuth Login

![Screenshot 2025-05-26 224150](https://github.com/user-attachments/assets/9c8ea037-5aad-4cef-bc89-6818b7593d37)

### 2. HR Dashboard

![Screenshot 2025-05-26 223648](https://github.com/user-attachments/assets/f81b6ca1-0525-40d6-b7af-ef8a771c1cc1)

### 3. Search By Name

![Screenshot 2025-05-26 224050](https://github.com/user-attachments/assets/fe8161d8-5f63-4e18-a353-ba8a7a35dbf7)

### 4. Bookmarked Employees 

![Screenshot 2025-05-26 223800](https://github.com/user-attachments/assets/e67c5419-e972-47be-ba72-31b2fb6d21cf)

### 5. Analytics Page 

![Screenshot 2025-05-26 223819](https://github.com/user-attachments/assets/e8b10382-f50b-4018-81b6-76015f374a4b)

### 6. Create User 

![Screenshot 2025-05-26 223851](https://github.com/user-attachments/assets/f8470a09-0788-4660-a053-53f21141585e)

![Screenshot 2025-05-26 223916](https://github.com/user-attachments/assets/7570e8fe-d87c-4be3-a554-a0721a4b4cc3)

### 7. Filter By Department

![Screenshot 2025-05-26 223938](https://github.com/user-attachments/assets/f72756ec-a2cf-4a9f-a710-758fc4fb6d4d)

### 8. MultiFilter By Departments

![Screenshot 2025-05-26 223954](https://github.com/user-attachments/assets/5a5af4ad-abcb-4d50-bbe8-9980cb7df794)

### 9. Filter By Rating

![Screenshot 2025-05-26 225024](https://github.com/user-attachments/assets/262a8bf0-30d5-47e0-9378-759805823a7a)

### 10. MultiFilter By Rating

![Screenshot 2025-05-26 225035](https://github.com/user-attachments/assets/843d8a19-8ee3-4e02-a37e-8cb756d24c75)

### 11. MultiFilter By Department and Rating 

![Screenshot 2025-05-26 224021](https://github.com/user-attachments/assets/5bb73cbc-86d2-4003-bdb6-4159e19c7d8a)

### 12. Promoted Employee

![Screenshot 2025-05-26 224132](https://github.com/user-attachments/assets/56175c58-c9ef-409a-83b4-ebe978647778)

### 13. Pagination

![Screenshot 2025-05-26 225306](https://github.com/user-attachments/assets/3c81fbac-779a-46ce-9911-e8a1aaa1be67)


## Demo Video 

https://github.com/user-attachments/assets/49e77141-f366-44b4-bc2f-5025bda7a065

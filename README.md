
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

## Demo Video 

https://github.com/user-attachments/assets/c3f93d90-2680-4057-a941-cad4a46b9e48




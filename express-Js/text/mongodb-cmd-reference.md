Here’s your **MongoDB CMD Reference Documentation** in clean, professional format with proper descriptions and copyable commands using backticks \`\`. You can use this as a `.txt` file or upload it directly to GitHub as `mongodb-cmd-reference.txt`.

---

## 🗂️ MongoDB CMD Reference (Windows)

### ✅ Start MongoDB Server (as Administrator)

Start MongoDB as a Windows service:

```
net start MongoDB
```

---

### ✅ Launch MongoDB Shell (Mongosh)

Connect to MongoDB shell (CLI interface):

```
mongosh
```

---

### 📄 Show All Databases

List all available databases:

```
show dbs
```

---

### 🚀 Switch to or Create a Database

Select or create a new database (e.g., college):

```
use college
```

---

### 🏗️ Create a Collection

Create a new collection (e.g., students):

```
db.createCollection("students")
```

---

### ➕ Insert Data into Collection

Insert a document into the `students` collection:

```
db.students.insertOne({ name: "Rajeev Kumar", age: 25, email: "rk@test.com" })
```

Insert another document:

```
db.students.insertOne({ name: "Harsh Babu", age: 18, email: "hk@test.com" })
```

---

### 🔍 View All Documents

Display all documents from the collection:

```
db.students.find()
```

---

### ✏️ Update a Document

Update a field (e.g., set age to 17 for Harsh Babu):

```
db.students.updateOne({ name: "Harsh Babu" }, { $set: { age: 17 } })
```

---

### ❌ Drop a Collection

Delete the entire `students` collection:

```
db.students.drop()
```

---

### 🧹 Drop the Current Database

**Be careful** — this deletes the entire selected DB:

```
db.dropDatabase()
```

---


### 🛑 Stop MongoDB Server (as Administrator)

```
net stop MongoDB
```

---

## 📝 Notes

* Always run `net start MongoDB` and `net stop MongoDB` in **Admin CMD**
* Use `mongod` only if you’re running MongoDB in standalone mode (non-service)
* Shell commands work **inside `mongosh` prompt**, not in CMD

---

Let me know if you want it exported as `.txt` or `.md` for GitHub upload.

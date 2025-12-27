

# ⏱️ Stopwatch

A sleek, high-performance digital stopwatch built with **HTML5**, **CSS3 (Neumorphic Design)**, and **Vanilla JavaScript**. This project demonstrates asynchronous data handling, DOM manipulation, and responsive UI design.

---

## 🚀 How to Run the Project

1. **Clone the Repository**:
```bash
git clone https://github.com/your-username/stopwatch-api-project.git

```


2. **Navigate to Folder**:
```bash
cd stopwatch-api-project

```


3. **Open the App**:
Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, etc.).

---

## 🛠️ API Documentation

### 1. Base URL

This project utilizes the **TimezoneDB API** (or similar Time/Logging API) to sync local timestamps with global standards.

* **Root:** `http://api.timezonedb.com/v2.1/`

### 2. Endpoints

* `GET /get-time-zone`: Retrieve current time based on zone.
* `GET /list-time-zone`: List all available time zones.
* `GET /convert-time-zone`: Convert lap times between different zones.

### 3. Required Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | String | Your API Access Key |
| `format` | String | Response format (json/xml) |
| `by` | String | Query type (zone, city, or lat/long) |

### 4. Authentication

✔ **API Key Required** (Stored in `config.js`)

### 5. Sample JSON Response

```json
{
  "status": "OK",
  "formatted": "2023-10-27 10:30:05",
  "zoneName": "America/New_York",
  "abbreviation": "EDT"
}

```

---

## 💻 Technical Implementation

### 6. Fetching Data (JavaScript)

```javascript
async function fetchCurrentTime(zone) {
    try {
        const response = await fetch(`${BASE_URL}get-time-zone?key=${API_KEY}&format=json&by=zone&zone=${zone}`);
        if (!response.ok) throw new Error("Failed to fetch time");
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error.message);
    }
}

```

### 7. Display in HTML (DOM)

* **Lists**: Laps are rendered dynamically as `<li>` elements within a scrollable container.
* **Cards**: The main timer is housed in a modern neumorphic card.
* **Icons**: Used for Play, Pause, and Reset actions.

### 8. Error Handling

* **No Results**: Displayed if a timezone search yields no data.
* **Invalid Input**: Validates lap naming characters.
* **Failed API Call**: Catch block alerts the user if the server is down.
* **Loading Message**: A "Syncing..." status appears during API calls.

### 9. Input Validation

* Auto-trims whitespace from lap notes.
* Disables the "Start" button while the system is fetching initial sync data.
* Prevents empty lap entries.

### 10. Loading State

* A CSS-based **Loading Spinner** or "Syncing..." text is displayed during asynchronous operations.

---

## 🎨 UI & Design

### 11. Responsive Design

* Fully optimized for **Desktop**, **Tablet**, and **Mobile** viewports using CSS Flexbox and Media Queries.

### 15. UI Requirements

* **Search Bar**: To filter through saved lap history.
* **Buttons**: Themed Start/Pause/Lap/Reset buttons.
* **Results Container**: Scrollable area for laps.
* **Footer**: "Powered by TimezoneDB API - Created by [Your Name]"

### 19. CSS Requirements

* **Card Layout**: Centered timer interface.
* **Hover Effects**: Subtle scaling and glow on buttons.
* **Custom Color Theme**: "Deep Space" Dark Mode (Navy & Cyan).

---

## 📁 File Structure

```text
├── index.html   # Structure & UI Components
├── style.css    # Modern Neumorphic Styling
├── script.js   # Core Logic & API Interaction
└── config.js   # API Key Storage (Git Ignored)

```
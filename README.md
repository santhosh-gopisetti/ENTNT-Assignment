# TalentFlow - Mini Hiring Platform (Frontend)

This is a React-based frontend application for "TalentFlow," a mini hiring platform, built as part of a technical assignment.

**Live Deployed Link:** `https://entnttalentflow.netlify.app/`


---

##  Local Setup

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/santhosh-gopisetti/ENTNT-Assignment
    cd talentflow-minimal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

##  Architecture & Technical Decisions

This project was bootstrapped with **Vite** and is built entirely in **React**.

* **Routing:** `react-router-dom` is used for all client-side navigation between the Jobs, Candidates, and Assessment pages.
* **Data:** To rapidly prototype the UI and user flows, the application currently uses **hard-coded local data** (found in `src/data.js`). This allows the components to be built and tested without a dependency on a live backend or persistence layer.
* **Styling:** All styling is done with **plain CSS** (`index.css`, `App.css`, and `PageStyles.css`) to maintain simplicity and avoid external UI libraries.

---

##  Known Issues & Future Work

This submission represents the initial scaffolding and UI prototyping. Several key features from the specification are planned for future development:

* **No Persistence:** The app does not persist any changes. All data is reset on browser refresh. The next step is to integrate a local persistence layer like **IndexedDB** (using a wrapper like `dexie.js`) to store all state.
* **No Mock API:** The app reads directly from hard-coded JavaScript files. This will be replaced with a mock API layer using **MSW (Mock Service Worker)** to simulate real network latency, requests, and errors.
* **No Virtualization:** The candidate list renders all 100 items at once. This will cause performance issues at 1,000+ candidates and needs to be refactored to use a **virtualized list** (e.g., `@tanstack/react-virtual`).
* **Missing Advanced UI:** Core features like **drag-and-drop reordering** for the jobs board and the **Kanban view** for candidates have not been implemented.
* **Basic Assessment Form:** The assessment form is a "dumb" component. It lacks all **validation rules** and **conditional logic**.

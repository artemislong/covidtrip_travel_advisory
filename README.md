
# 🦠 COVIDTRIP Documentation

COVIDTRIP is a site that allows users to find COVID-19 policies for any country, along with other key metrics to help plan trips accordingly. The platform gathers information from multiple APIs and sources, including Google and Johns Hopkins, and presents it in an easy-to-navigate format. 

**COVIDTRIP Key Features**:
- Derives real-time data from multiple trusted sources.
- Utilizes a custom web scraper, scheduled to update daily, to keep information fresh and relevant.
- Built with a content management system (CMS) to manage data updates, track changes, and receive alerts.

> **Update**: This project is no longer active due to discontinued financial support.

---

## 📜 Table of Contents
1. [📦 Third-Party Packages](#third-party-packages)
2. [⚙️ App Architecture](#app-architecture)
3. [🗂️ Files and Folders](#files-and-folders)
4. [🌐 Routing and Navigation](#routing-and-navigation)

---

### 📦 Third-Party Packages

- **React**: Framework for building dynamic frontend components.
- **react-router-dom**: For seamless navigation between pages.
- **Axios**: Handles API requests to retrieve and post data.
- **i18next** & **i18n-iso-countries**: Enable multilingual support and country code conversion.
- **Moment.js**: Formats dates to adapt to different locales.
- **react-toastify**: Displays notifications for success/errors.
- **React-GA**: Integrates Google Analytics to track page usage.
- **React-Helmet**: Dynamically updates meta tags for improved SEO.

---

### ⚙️ App Architecture

#### Overview of Main Files in /src

1. **Index.js**
   - Initializes the app with `Router`, provides styling via `ThemeProvider`, and global state with `ClassesContext`.
   - **Google Analytics**: Tracks page views using `ReactGA`.

2. **App.js**
   - Handles routing and setup.
   - Integrates notification popups through `ToastContainer` (react-toastify).

---

### 🗂️ Files and Folders

- **/pages**: Contains primary views for the site:
  - **Main.jsx**: The homepage, including SEO-friendly dynamic meta tags and a scroll-to-top feature.
  - **Country.jsx**: Displays country-specific COVID-19 data, loading a data analysis screen with dynamic components for missing data handling.

- **/components**: Houses reusable components, each with defined roles for displaying various data elements.

- **/utils**: Helper functions and modules:
  - **history.js**: Custom navigation handler.
  - **ligma.js**: Processes API responses, returning data sections: `generalInfo`, `travelInfo`, `mobilityInfo`, and `policyInfo`.

- **/styles**:
  - **theme.js**: Custom Material-UI theme with responsive font settings.
  - **general.js**: Contains styles for common UI components.

- **Other Folders**:
  - **/context**: Manages global React context.
  - **/languages**: Contains JSON files for each supported language.
  - **/image**: Stores static images used throughout the app.

---

### 🌐 Routing and Navigation

- **App Routing**: Defined in `App.js` with `react-router-dom`. Key routes:
  - `/livingroom`: The homepage.
  - `/:id`: Displays data for a specific country, identified by a URL parameter.
  - `*`: Redirects unmatched paths to `/livingroom`.

---

### 📝 Additional Notes

- **Internationalization**: Detects and adapts to the user’s browser language settings.
- **Error Handling**: Shows error messages and redirects to the homepage if data retrieval fails.
- **Dynamic Meta Tags**: Updates meta tags for each page dynamically via `React-Helmet` to support SEO.

This documentation provides a comprehensive overview of COVIDTRIP’s setup, features, and architecture, supporting both developers and stakeholders. For further details, consult the comments in each code file.

---

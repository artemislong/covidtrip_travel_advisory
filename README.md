# COVIDTRIP DOCUMENTATION

Table of content


## Third-party packages

### General
`"react": "^16.13.1"` default

`"react-scripts": "3.4.1"` default

`"react-router-dom": "^5.2.0"` for routing
### HTTP
`"axios": "^0.19.2"`

### Internationalization
`"i18n-iso-countries": "^6.0.0"`  converts iso2, iso3 to country names and supports multiple languages

`"i18next": "^19.6.3"` general internationalization assisting package

`"i18next-browser-languagedetector": "^5.0.1"` supplement for i18next package, detects browser language

`"react-i18next": "^11.7.0"` supports i18next to work in a react-app

### Other utils
`"moment": "^2.27.0"` date formating for different cases (languages)

`"react-custom-scrollbars": "^4.2.1"` custom scrollbar within a component

`"react-ga": "^3.1.2"` connects Google analytics to a react-app

 `"react-helmet": "^6.1.0"` dynamic metatags within react components, for Search Engine Optimization
 
` "react-toastify": "^6.0.8"`  a handy popup to notify success or error

### Unused for now
`"g_state-management": "^1.1.6"` amazing state management package that replaces Redux and React Context

`"react-google-login": "^5.1.21"` google login assist
   
`"react-truncate": "^2.4.0"` truncate long texts
    

## App architecture

### Files of /src folder
#### `Index.js` 

Cancel console.log in development mode:
```
if (process.env.NODE_ENV !== 'development') {
  console.log = () => { }
}
```

Router wrapper (as suggested by React-router-dom documenttation)
```
<Router history={history}>
    <App />
  </ Router>,
```

#### `App.js` 

Google analytics (ReactGA package):
```  
ReactGA.initialize('UA-175442767-1');
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });
```

Routing (as suggested by React-router-dom documenttation): mannually passing props to acess params and location props as advised by docs
```
<Switch>
            <Route exact path="/livingroom" render={(props) => <Main {...props} />} />
            <Route exact path="/:id" render={(props) => <Country {...props} />} /> 
            <Redirect from="*" to="/livingroom" />
 </Switch>
```

Getting styling object
```
<ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
```

React context provider:
```
<ClassesContext.Provider value={classes}>
      ...
   </ClassesContext.Provider>
```

React-toastify component for the notification popup:
```
<ToastContainer />
```

### Subfolders of /src folder

Covidtrip has the following folders in **/src** folder:


#### pages 
/src/pages
Contains 2 components for each 

##### `Main.jsx`
Main home page

Uses Helmet component to make dynamic, multilingual metatags

Scrolls to the top whenever the component is rendered
```
window.scrollTo(0, 0);
```

##### `Country.jsx`
Country page

Uses Helmet component to make dynamic, multilingual metatags

When renders, it will display loading screen until completes fetching and data analyzing. 

Some components are rendered dynamically (if data is missing then hidden or display default text, or only displays what data is available)

`useEffect function`
Is called whenever the user navigates to the component or changes to a new country (url is changed), just like ComponentDidMount and ComponentDidUpdate

```
    useEffect(() => {
      //defining a function that will set loading screen, fetch and process data, and handle errors.
        const ligma = async (id) => {
            try {
                const response = await getCountry(id); //calling API function imported from /src/api
              
                if (response.data) {
                    const countryData = processCountryData(response.data)); //if response data is available, process data into content. Function is imported from /src/utils/ligma.js
                   
                    setCountry(countryData); //set the whole data object as compoent's state
                    setTimeout(handleLoader, 1000) //close loading screen after 1s
                    //country data object's properties: generalInfo, travelInfo, mobilityInfo, policyInfo
                } else throw t("no data") //throw error if no data
            } catch (exception) {
                handleLoader(false); //close loading screen
                toast.error(`😓 ${t("uhhh something went wrong")}`) //push the toast popup to notify user about the error
                history.push('/') //navigate back to home page
            }
        } //end defining ligma function
        
      //geting the country code from the URL by accessing React-router-dom's props
        const id = match.params.id;
      //enable loading screen
        handleLoader(true)
        
        ligma(id); //send request and process data
    }, [location]) //useEffect is executed whenever location property (from props, which is the URL parameters container) is changed
```

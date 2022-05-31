# Architecture  

---
![img_1.png](img_1.png)

in this lab we implemented these modules:
- Gateway API:  
    - caches the data to increase performance  
    - security through RBA (Role Based Access) => we have two roles (Forcaster / Planner)
    - entry point and standardized process for interactions between the user and business logic.  
- Forecast Backend:  
    - forecast the number of sales of a particular product within a 1 year between the date selected by the user (before and after 6 month of that date)
- Forecast Database Design:  
`Product: id, name, price, description`  
`Store: id, name, description`  
`Forecast: id, product, store, numberOfSales`  
- User Database Design:  
`User: id, name, email, password, role`  
`Role is an enumeration (Forcaster, Planner)`  

# Running the application

---
To run the application first you need to create two postgresql databases:  
    - forecast-stores
    - forecast-users

cd forecast-backend; npm run start
cd gateway-api; npm run start
cd forecastUI; ng serve -o

![img_2.png](img_2.png)
![img_3.png](img_3.png)

if we are authenticated as forcaster we will get this view  
![img_4.png](img_4.png)
We choose the store and we will get the list of products in that store
![img_5.png](img_5.png)
We then choose the product, next we will be asked to enter the date of the forecast
![img_6.png](img_6.png)
now a forecast is generated and we will get a chart of the forecasts of 1 year centered by the date we selected (before and after)
to have a clear chart we chose to have two buttons to navigate through the chart that adds and subtracts one month
![img_7.png](img_7.png)

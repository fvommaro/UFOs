# UFOs
Challenge 11

## Overview of Project:

Dana is a Data Jornalist who wanted to tell a history about her hometown McMinnville, Oregon. Her hometowns is famous for UFOs sightings and even has a gathering of UFOs enthusiastics. For this project we will be using a JavaScript file (data.js) filled with sightings informations. 

The plan is to build a webpage that will present an article and a dynamic table with all the information inside the JavaScript file. And to make this table fully dynamic, meaning that it will react to user input, we will create filters allowing users to filter for multiple criteria at the same time. The filters we will be using are: date, city, state, country, and shape. Then we'll place the table into an HTML file for easy viewing. The webpage will be customize using Bootstrap.


## Results: 

The Webpage is simple to use. Lets say we want to know about the followwing UFO sighting:
city: el cajon
shape: light
date: 1/1/2010
We would fill the filters one at time and press enter, and the website would already stating filter step by step.

Figure 1: This image shows the city and the shape already filtered.
![This is the webpage when it just loaded.](images/ufos01.png)
Figure 2: This image shows the city already filtered.
![This image shows the city already filtered.](images/ufos01.png)
Figure 3: This image shows the city and the shape filtered.
![This image shows the city and the shape filtered.](images/ufos01.png)
Figure 4: This image shows the city, the shape and the date filtered.
![This image shows the city, the shape and the date filtered.](images/ufos01.png)


## Summary: In a summary statement, describe one drawback of this new design and two recommendations for further development.

During the implementation of this project I encoutered some problems, two of them I corrected in this version, as I would consider them bugs. The other three problems I am recommending to implement in the next version.

 1. [Problem] When I was filtering the city, and added a Upper letter to the city name, the filter wouldn't return the expected results.

    [Correction] I transformed the string all in upper case to compare.
     ![corrected](images/readme1.png)
    [When] This version

2. [Problem] The next problem found was if I cleared the filter, the table wouldn't rebuild.

    [Correction] I inserted in the code a test to see if the filterKey length is 0 and if it is, I rebuild the table with the whole data.
    ![corrected](images/readme2.png)

    [When] This version

3. [Problem] There are no botons to clear the data with only one click. You have to mannually to delete the values from the textbox and click enter.

    [Correction] Implement a botton that clears all filters with only a click.

    [When] Next version

4. [Problem] The table can not be ordenated by any collumn.

    [Correction] Implement a sort solution that alows the user to order the table by any collumn.

    [When] Next version

5. [Problem] You have to click enter to filter the data.
    
    [Correction] Implement a correction to the event to listen for changes as the user types to each filter
    
    [When] Next version

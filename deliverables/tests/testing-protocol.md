<h1>Testing Protocol</h1>

We have created a series of tests that we will perform in order to verify that the solution meets our functional requirements.

<h2>General Test Practices</h2>

**Manual test**:
- Use Console.log() to check if the outputs match what we are expecting.
- Use the Chrome Inspect feature to see if the style of the map is correct.
- Run the web app and try multiple behaviors to see if these functions are working correctly.

**Automated test**:
- Use JavaScript to assert if the map’s properties and functionalities are correct.
- Jest or React testing library script to check the outputs with incorrect input

<h2>Explanation of Homepage.test.js </h2>

- Test 1 tests if our homepage renders correctly. It renders our homepage and check if a certain text "About the Map" is on the page, if it is, then it means the homepage renders correctly.

- Test 2 tests if our navbar renders correctly. It renders the navbar and check if 2 certain text "Map" and "Resources" are in the navbar. If it is, then it means the navbar is correct.

- Test 3 tests if the radio buttons are property set to be checked after a user click it. The test mocks user clicking one of the button callled "Adult Fitness Equipment" and see if it's clicked state is set to true. If it is, then it means the filter button is working properly.

<h2>Unit Tests</h2>

<h3>Dataset Testing</h3>

<h4>Test 1</h4>

**Input**: A dataset containing information on Seattle public green spaces.
- Valid input: A dataset containing valid latitude, longitude, park name, address, size, and amenities information.
- Invalid input: A dataset with null or incomplete values in any of the required fields.

**Output**: A filtered dataset with no null or incomplete values using a function that checks each value in the row.

**Pass Criteria**: The function should successfully filter the dataset to remove any rows that contain null or incomplete values in the output dataset. We can confirm that the function has passed by checking the output dataset and the values in any of the required fields.

<h3>Map Feature Testing</h3>

<h4>Test 1</h4>

**Input**: A web page containing the map
- Valid input: A valid map object with defined center coordinates, zoom level, and map options within the specified boundaries.
- Invalid input: An undefined or null map object or out-of-bounds coordinates or invalid map options.

**Output**: The web page should display a rendered map of Seattle.

**Pass Criteria**: The map should be rendered correctly on the web page when the valid input is provided. All the functions on the map should work correctly without any deviation from the expected results. If there is an error message displayed or deviation, the test should be considered a failure, and further debugging will be required. The map should be centered on Seattle and should be within the specified boundaries. 

<h4>Test 2</h4>

**Input**: Zoom in and out of map 
- Valid input: Zooming in and out of the map using the +/- buttons or mouse scroll within a valid zoom range.
- Invalid input: Zooming beyond the maximum or minimum zoom level where the map will be centered on Seattle or zooming in an invalid manner.

**Output**: The map should zoom in or out accordingly within the valid zoom range.

**Pass Criteria**: The function should accurately zoom in or out of the map when the +/- buttons are clicked or the mouse is scrolled up or down within the valid zoom range. If an invalid input is entered, the function should throw an "invalid" error. The maximum and minimum zoom levels should be set such that the map will be centered on Seattle when zoomed out beyond a certain point. 

<h4>Test 3</h4>

**Input**: Dragging to see different areas of the map
- Valid input: Dragging the map to view different areas within the city limits of Seattle.
- Invalid input: Dragging the map to view areas outside of Seattle or dragging the map in an invalid manner.

**Output**: The function should pan the map to show different areas within Seattle when the map is dragged correctly.

**Pass Criteria**: The function should accurately pan the map to show different areas when the map is dragged within the city limits of Seattle. If we mock the user’s event to drag outside of Seattle, the test is expected to have an error message thrown. The map should only pan to areas within Seattle, and should not pan to areas outside of the city limits.

<h4>Test 4</h4>

**Input**: Select filters to refine the park markers displayed on the map
- Valid input: Selecting one radio button to filter for if the park is suitable for children, meaning the green space is a play area.
- Invalid input: Selecting more than one radio button or selecting an invalid filter option.

**Output**: The map should display only the markers that correspond to the parks that match the selected filter criteria.

**Pass Criteria**: The function should accurately filter the markers on the map based on the selected filter criteria. The filtered markers displayed should accurately match the filter criteria that were selected. For example, when we mock the user event of checking the filter of “Suitable for Children”, the map should only provide markers that are in that category from the dataset.

<h3>Green Space Marker Testing</h3>

<h4>Test 1</h4>

**Input**: Click on green space markers for more information and name of park
- Valid inputs: Clicking on a green space marker (userEvent.click(marker)) to display valid marker information including the name of the corresponding park.
- Invalid inputs: Clicking on any other area of the map that is not a green space.

**Output**: When a green space marker is clicked, the function should display valid marker information that matches the corresponding park. The information should include the name of the park and any other relevant details. If an invalid input is entered, the function should throw an "invalid" error.

**Pass Criteria**: The function should accurately differentiate between valid and invalid inputs by checking if the clicked area is a green space marker or not. For example, when we mock the user event of clicking a marker of “West Montlake Park”, the test file is expected to get text with “West Montlake Park” in the pop up component. 

<h4>Test 2</h4>

**Input**: Clicking on an area of a map that isn’t a marker
- Valid input: Clicking on a location that is not a marker on the map
- Invalid input: Clicking a marker or outside of the map

**Output**: When a location that is not a marker is clicked, the pop up component should continue to be empty.

**Pass Criteria**: The function should accurately differentiate between valid and invalid input by checking if the clicked area is a green space marker or not. For example, when we mock user events by clicking a location like “Cafe on the Ave”, which is a restaurant and not a green space marker on our map, the test should not display any text in the pop up component.

<h2>Known Bugs</h2>

**Media Queries**
When switching between sizes, the map may disappear or appear very small on the righthand side of the page. To fix this, the user should view this application on desktop view or on their phone.

**Data Error**
Some markers might contains information like `<br>` inside the content, this is caused by original data. We are trying to writing a code to detect these erros and replaced them with right text in the future.
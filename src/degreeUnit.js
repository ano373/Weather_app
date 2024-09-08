let degreeUnit = 'metric';

document.getElementById('celsiusButton').addEventListener("click", function() {
    degreeUnit = 'metric';
});

document.getElementById('fahrenheitButton').addEventListener("click", function() {
    degreeUnit = 'us';
});

export {degreeUnit};


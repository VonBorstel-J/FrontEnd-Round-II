        //Creating a time data function 
        function currentTime() { 
            var d = new Date(); 
            var hr = d.getHours(); 
            var min = d.getMinutes(); 
            var sec = d.getSeconds(); 
            var ampm; // This declares an empty variable to store AM or PM 
            var utchr = d.getUTCHours(); 
            var timeDiff; 
            var adjTimeDiff; 
            var timeZone; 

            //Adds a 0 to single digit numbers for seconds 
            if (sec < 10) { 
                sec = "0" + sec; 
            }
            //Adds a 0 to single digit numbers for minutes 
            if (min < 10) { 
                min = "0" + min; 
            }

            //This will be to determine whether we need to input an AM or PM string 
            if (hr == 12) { 
                ampm = "PM"; // Will set to PM 
            } else if (hr > 12) { 
                hr -= 12; // Deduct 12 from hours greater than 12 (the 24 time is being translated into the 12 hr one)
            } else { 
                ampm = "AM"; //will set to AM 
            }

            //Assemble time format to display 
            var time = hr + ":" + min + ":" + sec + " " + ampm;

            //Display current local time and time zone within the set HTML Elements; This is calling the id 'clock' i've set within the section between the header and main
            document.getElementById("clock").innerText = time; // this will now add the time 

            //Set the function to refresh every 1 second 
            setInterval(currentTime, 1000); 
        }

        //This will call the function and run the script adding time into the set HTML element. 
        currentTime(); 

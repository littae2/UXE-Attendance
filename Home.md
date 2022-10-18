# Initial Research Reflection

I made a rough [wireframe](https://github.com/littae2/UXE-Attendance/wiki/Research-Wireframe) of a site idea, and then I did a small survey asking if they were the one taking the attendance, how would you want to fill in the information. The feedback given made me realise that it wasn’t necessarily which approach was favoured that would be important, instead the users wanted to be able to use keyboard shortcuts/keys to fill out the roll. One user even suggested it to automatically step down onto the next student once they’ve been ticked off. Essentially, the consensus was they would push a key that would correspond to if they’re present or not (e.g., P for present, A for absent, and E for excused).  Additionally, it made me realise I should implement a simpler key version of just yes or no (Y or N) because this was many of the user’s inclination when questioned. 
When I make the prototype, I intend on making different versions to further test which users would prefer. 

***
# Competitor Analysis

## Attendance Codes:
* O - Online
* A - Absent
* N - Not Required
* L - Late
* P - Present
* E - Explained
* S - Sick
* C - Class Canceled 

### Current interaction: 
[Current site screenshot](https://raw.githubusercontent.com/littae2/UXE-Attendance/main/Current-System.png)
* keyboard letter corresponding to attendance type 
* user _has_ to click onto next user. I would like to implement an automatic next user or tab functionality
* Has a fill down function which copies the first students attendance status to all students
* stream hopping is a current issue as it currently combines both streams of students into the roll
***
# Client Requests
* See which is the current session (class 1 or 2)
* wants to see previous attendance
* wants an easy Yes or No option
* wants a simplified mobile version
* wants to see student image, name, preferred name, and preferred pronouns 
* wants to keep current attendance codes
***
# Technologies
* Svelte Kit – a more rounded version of svelte. I want to use this as I have the practice of svelte but using svelte kit I hope I can improve on my skill of making it modular. 
* Tailwind CSS – I chose this because when looking up which technologies to use, this came up regularly. Additionally, when researching, I came across DaisyUI which is a plugin for Tailwind and it helps with making a more uniformed looking site with primary, secondary colour usage. 
* Netlify – I will use this to host my site as we had a tutorial/ lab on using this. 
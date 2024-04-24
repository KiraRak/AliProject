// main.js
let userJobStatus = ""; // Variable to store job status selection
let businessName = ""; // Variable to store business name

let data = [
    "Accounting",
    "Airlines/Aviation",
    "Alternative Dispute Resolution",
    "Alternative Medicine",
    "Animation",
    "Apparel/Fashion",
    "Architecture/Planning",
    "Arts/Crafts",
    "Automotive",
    "Aviation/Aerospace",
    "Banking/Mortgage",
    "Biotechnology/Greentech",
    "Broadcast Media",
    "Building Materials",
    "Business Supplies/Equipment",
    "Capital Markets/Hedge Fund/Private Equity",
    "Chemicals",
    "Civic/Social Organization",
    "Civil Engineering",
    "Commercial Real Estate",
    "Computer Games",
    "Computer Hardware",
    "Computer Networking",
    "Computer Software/Engineering",
    "Computer/Network Security",
    "Construction",
    "Consumer Electronics",
    "Consumer Goods",
    "Consumer Services",
    "Cosmetics",
    "Dairy",
    "Defense/Space",
    "Design",
    "E-Learning",
    "Education Management",
    "Electrical/Electronic Manufacturing",
    "Entertainment/Movie Production",
    "Environmental Services",
    "Events Services",
    "Executive Office",
    "Facilities Services",
    "Farming",
    "Financial Services",
    "Fine Art",
    "Fishery",
    "Food Production",
    "Food/Beverages",
    "Fundraising",
    "Furniture",
    "Gambling/Casinos",
    "Glass/Ceramics/Concrete",
    "Government Administration",
    "Government Relations",
    "Graphic Design/Web Design",
    "Health/Fitness",
    "Higher Education/Acadamia",
    "Hospital/Health Care",
    "Hospitality",
    "Human Resources/HR",
    "Import/Export",
    "Individual/Family Services",
    "Industrial Automation",
    "Information Services",
    "Information Technology/IT",
    "Insurance",
    "International Affairs",
    "International Trade/Development",
    "Internet",
    "Investment Banking/Venture",
    "Investment Management/Hedge Fund/Private Equity",
    "Judiciary",
    "Law Enforcement",
    "Law Practice/Law Firms",
    "Legal Services",
    "Legislative Office",
    "Leisure/Travel",
    "Library",
    "Logistics/Procurement",
    "Luxury Goods/Jewelry",
    "Machinery",
    "Management Consulting",
    "Maritime",
    "Market Research",
    "Marketing/Advertising/Sales",
    "Mechanical or Industrial Engineering",
    "Media Production",
    "Medical Equipment",
    "Medical Practice",
    "Mental Health Care",
    "Military Industry",
    "Mining/Metals",
    "Motion Pictures/Film",
    "Museums/Institutions",
    "Music",
    "Nanotechnology",
    "Newspapers/Journalism",
    "Non-Profit/Volunteering",
    "Oil/Energy/Solar/Greentech",
    "Online Publishing",
    "Other Industry",
    "Outsourcing/Offshoring",
    "Package/Freight Delivery",
    "Packaging/Containers",
    "Paper/Forest Products",
    "Performing Arts",
    "Pharmaceuticals",
    "Philanthropy",
    "Photography",
    "Plastics",
    "Political Organization",
    "Primary/Secondary Education",
    "Printing",
    "Professional Training",
    "Program Development",
    "Public Relations/PR",
    "Public Safety",
    "Publishing Industry",
    "Railroad Manufacture",
    "Ranching",
    "Real Estate/Mortgage",
    "Recreational Facilities/Services",
    "Religious Institutions",
    "Renewables/Environment",
    "Research Industry",
    "Restaurants",
    "Retail Industry",
    "Security/Investigations",
    "Semiconductors",
    "Shipbuilding",
    "Sporting Goods",
    "Sports",
    "Staffing/Recruiting",
    "Supermarkets",
    "Telecommunications",
    "Textiles",
    "Think Tanks",
    "Tobacco",
    "Translation/Localization",
    "Transportation",
    "Utilities",
    "Venture Capital/VC",
    "Veterinary",
    "Warehousing",
    "Wholesale",
    "Wine/Spirits",
    "Wireless",
    "Writing/Editing"
]

data.sort();
let industry = document.getElementById("industry");
let suggestion = document.getElementById("suggestion");
const enterKey = 13;

  
window.onload = () => {
    industry.value = "";
    clearSuggestion();
};

const clearSuggestion = () => {
    suggestion.innerHTML = "";
};

const caseCheck = (word) => {
    //Array of characters
    word = word.split("");
    let inp = industry.value;
    //loop through every character in ino
    for (let i in inp) {
      //if input character matches with character in word no need to change
      if (inp[i] == word[i]) {
        continue;
      } else if (inp[i].toUpperCase() == word[i]) {
        //if inp[i] when converted to uppercase matches word[i] it means word[i] needs to be lowercase
        word.splice(i, 1, word[i].toLowerCase());
      } else {
        //word[i] needs to be uppercase
        word.splice(i, 1, word[i].toUpperCase());
      }
    }
    //array to string
    return word.join("");
};

//complete predictive text with enter key
industry.addEventListener("keydown", (e) => {
    if (e.keyCode == enterKey && suggestion.innerText != ""){
        e.preventDefault();
        industry.value = suggestion.innerText;
        clearSuggestion();
    }
})  

//Execute function on input
industry.addEventListener("input", (e) => {
    clearSuggestion();
    let regex = new RegExp("^" + industry.value, "i");
    

    for (let i in data){
        //check if input matches with any word
        if(regex.test(data[i]) && industry.value != ""){
            //change case of word in words array according to user input
            data[i] = caseCheck(data[i]);
            //display suggestion
            suggestion.innerHTML = data[i];
            break;
        }  
    }
});

function displayData(value){
    industry.value = value;
    removeElements();
}

function removeElements(){
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

function saveUserInfo() {
  const firstName = document.getElementById("firstName").value.trim(); 
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

    // Email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return; 
  }

  // Check for empty fields using a loop and early return
  const emptyFields = [];
  for (const input of document.getElementById("userForm").querySelectorAll("input")) {
    if (!input.value.trim()) {
      emptyFields.push(input.placeholder); // Store placeholders for clear messages
      return alert("Please fill in the following fields:\n" + emptyFields.join(", "));
    }
  }
    // Show the job status form
    document.getElementById("userForm").style.display = "none";
    document.getElementById("jobForm").style.display = "flex";
}
  
function saveJobStatus() {
    userJobStatus = document.getElementById("jobStatus").value;
    const jobMessage = userJobStatus === "company" ? "You work for a company." : "You own a business.";
    console.log(jobMessage);

    // Conditionally show the business name form or job title form
    if (userJobStatus === "business") {
        document.getElementById("jobForm").style.display = "none";
        document.getElementById("businessForm").style.display = "flex";
    } else {
        document.getElementById("jobForm").style.display = "none";
        document.getElementById("industryForm").style.display = "flex";
    }
}

function saveBusinessName() {
    const businessNameInput = document.getElementById("businessName");
    const businessName = businessNameInput.value.trim(); // Trim whitespace
  
    // Check if business name is empty
    if (!businessName) {
      alert("Please enter your business name.");
      return; // Exit function if empty
    }
  
    // Process business name (logic for saving or displaying)
    console.log(`Your business name is: ${businessName}`);
  
    // Assuming you have logic to show the business listing form
    document.getElementById("businessForm").style.display = "none";
    document.getElementById("businessListingForm").style.display = "flex";
}
  
function saveBusinessListing() {
    const isBusinessListedRadio = document.querySelector('input[name="businessList"]:checked'); // Get checked radio button
  
    if (!isBusinessListedRadio) {
      alert("Please select whether you'd like to list your business.");
      return; // Exit function if no selection
    }
  
    const businessListingValue = isBusinessListedRadio.value; 
    const listingMessage = businessListingValue === "yes" ? "Your business will be listed." : "Thanks for letting us know."; // Clearer message
    console.log(listingMessage);
  
    if (businessListingValue === "yes") {
      document.getElementById("businessListingForm").style.display = "none";
      document.getElementById("businessAddressForm").style.display = "flex";
    } else {
      document.getElementById("businessListingForm").style.display = "none";
      document.getElementById("thankYouMessage").style.display = "flex";
      startCountdown();
    }
}
  
function saveBusinessAddress() {
    const businessAddressInput = document.getElementById("businessAddress");
    const businessAddress = businessAddressInput.value.trim(); // Trim whitespace
  
    // Check if business address is empty
    if (!businessAddress) {
      alert("Please enter your business address.");
      return; // Exit function if empty
    }
  
    // Process business address (logic for saving or displaying)
    console.log(`Your business address is: ${businessAddress}`);
  
    // Assuming you have logic to show the thank you message
    document.getElementById("businessAddressForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "flex";
    startCountdown();
}
  
function saveIndustry() {
    const industryInput = document.getElementById("industry");
    const industryValue = industryInput.value.trim(); // Trim whitespace
  
    // Check if industry field is empty
    if (!industryValue) {
      alert("Please enter your industry.");
      return; // Exit function if empty
    }
  
    // Process industry information (logic for saving or displaying)
    console.log("Industry:", industryValue);
  
    document.getElementById("industryForm").style.display = "none";
    document.getElementById("volunteerForm").style.display = "flex";
}
  
function saveVolunteer() {
    const isVolunteerRadio = document.querySelector('input[name="isVolunteer"]:checked'); // Get checked radio button
  
    // Check if a radio button is selected
    if (!isVolunteerRadio) {
      alert("Please select whether you'd like to volunteer.");
      return; // Exit function if no selection
    }
  
    const volunteerValue = isVolunteerRadio.value; // Get the selected radio button value
    const volunteerMessage = volunteerValue === "yes" ? "You're interested in volunteering!" : "Thanks for letting us know."; // Clearer message
    console.log(volunteerMessage);
  
    // Show appropriate form based on selection
    if (volunteerValue === "yes") {
      document.getElementById("volunteerForm").style.display = "none";
      document.getElementById("contactForm").style.display = "flex";
    } else {
      document.getElementById("volunteerForm").style.display = "none";
      document.getElementById("thankYouMessage").style.display = "flex";
      startCountdown();
    }
}
  
function saveContact() {
  contact = document.getElementById("contact").value;
  const contactMessage = contact === "Text" ? "We will send you a text message soon." : "Wait for our email.";
  console.log(contactMessage);

  if (contact === "Text") {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "flex";
    // Start the countdown on showing Thank You message
    startCountdown();
  } else {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "flex";
    // Start the countdown on showing Thank You message
    startCountdown();
  }
}

function startCountdown() {
  const countdownContainer = document.getElementById("countdown-container");
  let seconds = 5;

  const countdownInterval = setInterval(() => {
    countdownContainer.textContent = ` Redirecting to Google in ${seconds} seconds...`;
    seconds--;

    if (seconds < 0) {
      clearInterval(countdownInterval);
      window.location.href = "https://www.google.com"; 
    }
  },1000);
}


document.getElementById("currentYear").innerHTML = new Date().getFullYear();
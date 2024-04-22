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

// sort data in ascending order    
let sortedData = data.sort();
//console.log(sortedData);

//reference
let industry = document.getElementById("industry");

//Execute function on keyup
industry.addEventListener("keyup", (e)=>{
    //initially remove all elements
    removeElements();

    //loop throught above array
    for(let i of sortedData){
        //console.log(i);

        //convert input to lowercase and compare with each string
        if(i.toLowerCase().startsWith(industry.value.toLowerCase()) 
            && 
            industry.value != ""){
           
            //create li element
            let listItem = document.createElement("li");

            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayData('"+
            i + "')");  

            //DIsplay matched part in bold
            let word = "<b>" + i.substr(0, industry.value.lenght) + "</b>";

            //word += i.substr(industry.value.lenght);
            //console.log(word);
            
            //display the value in array
            listItem.innerHTML = word;
            //console.log(listItem);
            document.querySelector(".list").appendChild(listItem);
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
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Save user info (you can store it in local storage or send it to a server)
    // For demonstration purposes, we'll just display a welcome message:
    const fullName = firstName + " " + lastName;
    console.log(`Welcome, ${fullName}! Your email is ${email} and your phone is ${phone}.`);

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
    businessName = document.getElementById("businessName").value;
    console.log(`Your business name is: ${businessName}`);

    document.getElementById("businessForm").style.display = "none";
    document.getElementById("businessListingForm").style.display = "flex";
}

function saveBusinessListing() {
    businessListing = document.getElementById("businessListing").value;
    const listingMessage = businessListing === "yes" ? "You want to list your business." : "You do not want to list your business.";
    console.log(listingMessage);

    if (businessListing === "yes") {
        document.getElementById("businessListingForm").style.display = "none";
        document.getElementById("businessAddressForm").style.display = "flex";
    } else {
        document.getElementById("businessListingForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "flex";
    }
}

function saveBusinessAddress() {
    businessAddress = document.getElementById("businessAddress").value;
    console.log(`Your business address is: ${businessAddress}`);

    // Additional logic for saving business address (not shown here)
    // For now, let's show the thank-you message:
    document.getElementById("businessAddressForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "flex";
}

function saveIndustry() {
    industry = document.getElementById("industry").value;
    console.log(`Your work for: ${industry}`);

    // Hide the job title form and show the thank you message
    document.getElementById("industryForm").style.display = "none";
    document.getElementById("volunteerForm").style.display = "flex";
}

function saveVolunteer() {
    volunteer = document.getElementById("volunteer").value;
    const volunteerMessage = volunteer === "yes" ? "You want to be a volunteer." : "You do not want to be a volunteer.";
    console.log(volunteerMessage);

    if (volunteer === "yes") {
        document.getElementById("volunteerForm").style.display = "none";
        document.getElementById("contactForm").style.display = "flex";
    } else {
        document.getElementById("volunteerForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "flex";
    }
}

function saveContact() {
    contact = document.getElementById("contact").value;
    const contactMessage = contact === "Text" ? "We will send you a text message soon." : "Wait for our email.";
    console.log(contactMessage);

    if (contact === "Text") {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "flex";
    } else {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "flex";
    }
}

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
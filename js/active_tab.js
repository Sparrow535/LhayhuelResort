document.addEventListener('DOMContentLoaded', function() {
    // Select the tabs
    var tab1 = document.getElementById('tab-1');
    var tab2 = document.getElementById('tab-2');

    // Function to set active tab
    function setActiveTab(activeTab) {
        // Remove active styles from both tabs
        tab1.classList.remove('active');
        tab1.style.border = ''; // Remove border
        tab1.style.borderRadius = ''; // Remove border radius
        
        tab2.classList.remove('active');
        tab2.style.border = ''; // Remove border
        tab2.style.borderRadius = ''; // Remove border radius
        
        // Add active class and styles to the clicked tab
        activeTab.classList.add('active');
        activeTab.style.border = '1px solid #aa8453'; // Blue border
        activeTab.style.borderRadius = '5px'; // Rounded corners
    }
    // Set Tab 1 as the default active tab
    setActiveTab(tab1);

    // Add click event listeners
    tab1.addEventListener('click', function() {
        setActiveTab(tab1);
    });
    
    tab2.addEventListener('click', function() {
        setActiveTab(tab2);
    });
});
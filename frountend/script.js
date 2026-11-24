/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageName, clickedMenu) {

    const pages =
        document.querySelectorAll(
            ".dashboard, .page-section"
        );


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(pageName);


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    const menuItems =
        document.querySelectorAll(".menu-item");


    menuItems.forEach(function(item) {

        item.classList.remove("active");

    });


    if (clickedMenu) {

        clickedMenu.classList.add("active");

    }


    /*
       Scroll back to the top whenever
       a new page is opened.
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   MONTH SELECTOR
===================================================== */

function changeMonth() {

    const month =
        document.getElementById("monthSelect").value;


    const visitorCount =
        document.getElementById("visitorCount");


    if (month === "october") {

        visitorCount.innerText = "24,580";

    }

    else if (month === "september") {

        visitorCount.innerText = "22,640";

    }

    else if (month === "august") {

        visitorCount.innerText = "20,320";

    }


    alert(
        "Month changed to " +
        month +
        ".\n\nPrototype data updated."
    );

}



/* =====================================================
   REFRESH DASHBOARD
===================================================== */

function refreshDashboard() {

    const button =
        document.getElementById("refreshBtn");


    button.innerText = "✓";


    setTimeout(function() {

        button.innerText = "↻";

    }, 1200);


    alert(
        "Dashboard refreshed successfully.\n\n" +
        "Prototype Mode: sample data is being displayed."
    );

}



/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification() {

    alert(
        "Notifications\n\n" +

        "✓ Monthly report is ready\n" +

        "✓ Website data updated\n" +

        "✓ Social media data updated\n\n" +

        "⚠ Campaign data needs review"
    );

}



/* =====================================================
   DOWNLOAD MONTHLY REPORT
===================================================== */

function downloadReport() {

    const report = `

CWS COMMUNICATIONS DASHBOARD
MONTHLY COMMUNICATION REPORT

Reporting Period: October 2026

========================================

WEBSITE ANALYTICS

Visitors: 24,580
Sessions: 31,200
Bounce Rate: 42.8%
Average Time: 3m 42s

========================================

SOCIAL MEDIA

Total Reach: 86.4K
Engagement Rate: 6.8%
Followers: 18.7K
Content Published: 42

Instagram Reach: 42.5K
LinkedIn Reach: 18.6K
YouTube Views: 42.8K

========================================

EMAIL

Emails Sent: 12.8K
Open Rate: 38.6%
Click Rate: 8.4%
Subscribers: 6.4K

========================================

CAMPAIGNS

Active Campaigns: 3
Total Reach: 68.2K
Average Engagement: 7.2%
Response Value: ₹2.82L

Wild Seve: ₹1.24L
Shaale: ₹86K
Surakshe: ₹72K

========================================

DATA HEALTH

Website Analytics: Updated
Instagram: Updated
LinkedIn: Updated
YouTube: Review Required
Email: Updated
Campaign Data: Review Required

========================================

IMPORTANT NOTE

This report contains SAMPLE PROTOTYPE DATA
for demonstration purposes.

It does not represent live CWS analytics.

A final implementation can connect the
dashboard to actual CWS data sources,
APIs and scheduled data exports.

========================================

CWS Communications Dashboard
Prototype Version 1.0

`;


    const blob =
        new Blob(
            [report],
            { type: "text/plain" }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "CWS_Communication_Report.txt";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);

}



/* =====================================================
   CAMPAIGN REPORT
===================================================== */

function downloadCampaignReport() {

    const report = `

CWS CAMPAIGN PERFORMANCE REPORT
October 2026

========================================

ACTIVE CAMPAIGNS

1. WILD SEVE

Reach: 31.4K
Engagement: 8.1%
Response: ₹1.24L
Data Health: 92%
Status: Active


2. SHAALE

Reach: 21.7K
Engagement: 6.9%
Response: ₹86K
Data Health: 81%
Status: Active


3. SURAKSHE

Reach: 15.1K
Engagement: 6.2%
Response: ₹72K
Data Health: 74%
Status: Review

========================================

TOTAL CAMPAIGN REACH

68.2K

========================================

AVERAGE ENGAGEMENT

7.2%

========================================

TOTAL RESPONSE VALUE

₹2.82L

========================================

NOTE

All figures are sample prototype data.

Final implementation can connect actual
campaign and communication data.

`;


    const blob =
        new Blob(
            [report],
            { type: "text/plain" }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "CWS_Campaign_Report.txt";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);

}



/* =====================================================
   EXPORT SUMMARY
===================================================== */

function exportSummary() {

    const summary = `

CWS COMMUNICATION SUMMARY
October 2026

Overall Communication Score: 82%

Website Visitors: 24,580
Social Reach: 86.4K
YouTube Views: 42.8K
Email Open Rate: 38.6%

Active Campaigns: 3
Campaign Reach: 68.2K
Campaign Engagement: 7.2%

Data Sources:
Website Analytics - Updated
Instagram - Updated
LinkedIn - Updated
YouTube - Review
Email - Updated
Campaign Data - Review

NOTE:
Prototype/sample data only.

`;


    const blob =
        new Blob(
            [summary],
            { type: "text/plain" }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "CWS_Summary.txt";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);

}



/* =====================================================
   PRINT REPORT
===================================================== */

function printReport() {

    window.print();

}



/* =====================================================
   SAVE SETTINGS
===================================================== */

function saveSettings() {

    const demoMode =
        document.getElementById("demoMode").checked;


    const autoRefresh =
        document.getElementById("autoRefresh").checked;


    const reportPeriod =
        document.getElementById("reportPeriod").value;


    const refreshFrequency =
        document.getElementById("refreshFrequency").value;


    const displayMode =
        document.getElementById("displayMode").value;


    localStorage.setItem(
        "cwsDemoMode",
        demoMode
    );


    localStorage.setItem(
        "cwsAutoRefresh",
        autoRefresh
    );


    localStorage.setItem(
        "cwsReportPeriod",
        reportPeriod
    );


    localStorage.setItem(
        "cwsRefreshFrequency",
        refreshFrequency
    );


    localStorage.setItem(
        "cwsDisplayMode",
        displayMode
    );


    alert(
        "Settings saved successfully! ✓\n\n" +

        "Reporting Period: " +
        reportPeriod +

        "\nRefresh Frequency: " +
        refreshFrequency +

        "\nDisplay Mode: " +
        displayMode
    );

}



/* =====================================================
   RESET SETTINGS
===================================================== */

function resetSettings() {

    const confirmReset =
        confirm(
            "Reset all dashboard settings to default?"
        );


    if (!confirmReset) {

        return;

    }


    document.getElementById("demoMode").checked = true;

    document.getElementById("autoRefresh").checked = true;

    document.getElementById("reportPeriod").value =
        "Monthly";

    document.getElementById("refreshFrequency").value =
        "Daily";

    document.getElementById("displayMode").value =
        "Comfortable";


    localStorage.clear();


    alert(
        "Settings have been reset to default. ✓"
    );

}



/* =====================================================
   LOAD SAVED SETTINGS
===================================================== */

function loadSettings() {

    const savedDemo =
        localStorage.getItem("cwsDemoMode");


    const savedAuto =
        localStorage.getItem("cwsAutoRefresh");


    const savedPeriod =
        localStorage.getItem("cwsReportPeriod");


    const savedFrequency =
        localStorage.getItem("cwsRefreshFrequency");


    const savedDisplay =
        localStorage.getItem("cwsDisplayMode");


    if (savedDemo !== null) {

        document.getElementById("demoMode").checked =
            savedDemo === "true";

    }


    if (savedAuto !== null) {

        document.getElementById("autoRefresh").checked =
            savedAuto === "true";

    }


    if (savedPeriod) {

        document.getElementById("reportPeriod").value =
            savedPeriod;

    }


    if (savedFrequency) {

        document.getElementById("refreshFrequency").value =
            savedFrequency;

    }


    if (savedDisplay) {

        document.getElementById("displayMode").value =
            savedDisplay;

    }

}



/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSettings();

    }
);
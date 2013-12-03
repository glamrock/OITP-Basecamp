// ==UserScript==
// @name           OTI Basecamp
// @namespace      http://oti.newamerica.net
// @description    Add drop downs to all OTI Basecamp time trackers. By Nat Meysenberg, Josh King, and James Vasile.
// @include        https://oti.basecamphq.com/projects/*/time_entries
// @updateURL      https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @downloadURL    https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @version        1.4
// @require        https://commotionwireless.net/misc/jquery.js
// ==/UserScript==

// compatability for gm included jquery
this.$ = this.jQuery = jQuery.noConflict(true);

// work day
workDayHours = '8.00';
var hoursField = document.getElementById('time_entry_hours');
hoursField.value = workDayHours;

$('.date_pop_wrapper').click(function() {
  hoursField.value = workDayHours;
});


var project = '';
var pid = window.location.pathname.split('/')[2].split('-')[0];
//This is where you add in additional projects.
switch(pid)
{
  case "8603089":
    project = 'Commotion';
    break;
}

//This is where you modify the text strings for each case.
var options = new Array();
switch(project)
{
  case 'Commotion':
    options = new Array(
/*    "Deployment and Documentation, MENA Network (DRL)", */
/*    "Deployment, India Workshop (Non-Fed)",  */
    "Deployment Support, Redhook Testbed (USAID)",
    "Deployment Support, Partner Management (USAID)",
    "Deployment Support, General (USAID)",
    "Development, GSM (USAID)",
    "Development, Local Apps (USAID)",
    "Development, Secure Chat (USAID)",
    "Development, Offline Wikipedia (USAID)",
    "Development, General (USAID)",
/*    "Development, Security Architecture (DRL)", */
/*    "Development, General (DRL)", */
    "Project Monitoring and Evaluation (USAID)",
/*    "Project Monitoring and Evaluation (DRL)", */
/*    "PTO (DRL)", */
    "PTO (USAID)",
/*    "NAF Holiday (DRL)", */
    "NAF Holiday (USAID)",
/*    "Bereavement leave (DRL)", */
    "Bereavement leave (USAID)",
/*    "Family leave (DRL)", */
    "Family leave (USAID)",
/*    "Sick leave (DRL)", */
    "Sick leave (USAID)"
    );
    break;
}

var optLength = options.length;
if(optLength > 0)
{
  if (project != 'Commotion') {
    options.push("PTO");
  }
  optLength = options.length;

  var selector = '<select id="time_entry_description" name="time_entry[description]">';
  for(var i=0; i<optLength; i++)
  {
    if (options[i] == 'Development, General (USAID)') {
      selector += '<option selected>' + options[i] + '</option>'; 
    }
    else {
      selector += '<option>' + options[i] + '</option>'; 
    }
  }
  selector += '</select>';
  
  var descrip = document.getElementById('time_entry_description');
  descrip.parentNode.innerHTML = selector;
}

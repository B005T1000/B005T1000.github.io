// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const volunteerBtn = document.querySelector('button');
    const volunteerForm = document.getElementById('volunteer-form');
  
    // Show the form when the button is clicked
    volunteerBtn.addEventListener('click', () => {
      volunteerForm.style.display = 'block';
      volunteerForm.scrollIntoView({ behavior: 'smooth' });
    });
  
    // Add a dynamic detail section
    const charityDetails = document.getElementById('charity-details');
  
    const extraInfo = document.createElement('div');
    extraInfo.setAttribute('id', 'extra-info');
    extraInfo.style.display = 'none';
    extraInfo.style.backgroundColor = '#e0f2f1';
    extraInfo.style.border = '1px solid #009688';
    extraInfo.style.padding = '1rem';
    extraInfo.style.marginTop = '1rem';
    extraInfo.innerHTML = `
      <h4>Did You Know?</h4>
      <p>We have supported over 10,000 students in the past 5 years through our nationwide volunteering initiative.</p>
    `;
  
    charityDetails.appendChild(extraInfo);
  
    // Show extra info when hovering over the main charity name
    const mainTitle = charityDetails.querySelector('h2');
    mainTitle.style.cursor = 'pointer';
  
    mainTitle.addEventListener('mouseenter', () => {
      extraInfo.style.display = 'block';
    });
  
    mainTitle.addEventListener('mouseleave', () => {
      extraInfo.style.display = 'none';
    });
  });
  
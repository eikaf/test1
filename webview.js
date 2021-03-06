const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.yrs5ff:first-child');
    let count = 0;

    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].querySelectorAll('.Ht7Nrb').length === 0) {
        count += 1;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};

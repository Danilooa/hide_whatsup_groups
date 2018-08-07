function removeGroup(groupNames) {
    for (var j = 0; j < groupNames.length; j++) {
      let groupName = groupNames[j];
      let spans = document.getElementsByTagName("span");
      for (let i = 0; i < spans.length; i++) {
        let span = spans[i]; 
        if (span.innerHTML === groupName) {
          span.parentElement.parentElement.parentElement.parentElement.innerHTML = "";
          break;
        }  
      }
    }  
  }
  
  new function(groupNames) {
    setInterval(function() { removeGroup(groupNames);}, 500);
  }(['NAME OF THE GROUP 1', 'NAME OF THE GROUP 2', '...']);
// list 1
  //  Sortable.create(List, { /* options */ });

  var sortable = Sortable.create(List);

  //Disable sortable
  function Disable() {
      var state = sortable.option("disabled"); // get
  
      sortable.option("disabled", !state); // set
  }
  
  //Display correct answers
  function correctAnswers() {
      document.getElementById("answer").innerHTML = "Answer:<br><br>1. Go to an ATM<br>2. Take out your bankcard from your wallet/purse<br>3. Put your bankcard into the ATM machine<br>4. Enter your PIN<br>5. Choose the transaction and account type<br>6. Enter in the amount of money you wish to withdraw<br>7. When dispensed, take out your bankcard, money and account balance<br>8. Place your bankcard and money back into your wallet <br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden() {
  var display = document.getElementById("List");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[7].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary").innerHTML = "Incorrect - Further OT assessment to assess banking is LIKELY required";
          incorrect.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary").innerHTML = "Correct - Further OT assessment to assess banking is NOT LIKELY required";
          incorrect.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect");
       
             src.appendChild(img);
          }
      }
    }
  }
  
  // List 2
    //  Sortable.create(List, { /* options */ });
  
    var sortable2 = Sortable.create(List2);
  
  //Disable sortable
  function Disable2() {
      var state2 = sortable2.option("disabled"); // get
  
      sortable2.option("disabled", !state2); // set
  }
  
  //Display correct answers
  function correctAnswers2() {
      document.getElementById("answer2").innerHTML = "Answer:<br><br>1. Check your pantry and fridge for groceries that you may need<br>2. Write a shopping list<br>3. Go to the grocery store<br>4. Obtain a shopping trolley or basket<br>5. Navigate through the store to find the required groceries using your shopping list<br>6. Check your shopping list to ensure you found all of the groceries you need<br>7. Go to the checkout to pay for your groceries<br>8. Take your groceries home<br>9. Pack your groceries away in the pantry and fridge<br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden2() {
  var display = document.getElementById("List2");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[7].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[8].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList2() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List2");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect2").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary2").innerHTML = "Incorrect - Further OT assessment to assess grocery shopping is LIKELY required";
          incorrect2.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect2");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect2").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary2").innerHTML = "Correct - Further OT assessment to assess grocery shopping is NOT LIKELY required";
          incorrect2.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect2");
       
             src.appendChild(img);
          }
      }
    }
  }
  
  // list 3
    //  Sortable.create(List, { /* options */ });
  
    var sortable3 = Sortable.create(List3);
  
  //Disable sortable
  function Disable3() {
      var state3 = sortable3.option("disabled"); // get
  
      sortable3.option("disabled", !state3); // set
  }
  
  //Display correct answers
  function correctAnswers3() {
      document.getElementById("answer3").innerHTML = "Answer:<br><br>1. Wash your hands<br>2. Get your ingredients ready<br>3. Cut up the chicken and vegetables<br>4. Add oil to pan and turn on hotplate to a medium heat<br>5. Cook chicken until light golden brown<br>6. Add vegetables, sauce and stir regularly<br>7. Turn heat down to low-medium heat and simmer until vegetable are cooked<br>8. Turn off the hotplate<br>9. Serve stirfry with noodles or rice <br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden3() {
  var display = document.getElementById("List3");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[7].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[8].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList3() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List3");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect3").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary3").innerHTML = "Incorrect - Further OT assessment to assess cooking is LIKELY required";
          incorrect3.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect3");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect3").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary3").innerHTML = "Correct - Further OT assessment to assess cooking is NOT LIKELY required";
          incorrect3.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect3");
       
             src.appendChild(img);
          }
      }
    }
  }
  
  // List 4
    //  Sortable.create(List, { /* options */ });
  
    var sortable4 = Sortable.create(List4);
  
  //Disable sortable
  function Disable4() {
      var state4 = sortable4.option("disabled"); // get
  
      sortable4.option("disabled", !state4); // set
  }
  
  //Display correct answers
  function correctAnswers4() {
      document.getElementById("answer4").innerHTML = "Answer:<br><br>1. Collect your dirty clothing<br>2.	Load the washing machine with the dirty clothing<br>3. Add laundry powder and close the washing machine door<br>4. Set the washing machine to wash cycle<br>5. Press the start button<br>6. Once finished open the washing machine door<br>7. Empty the clean wet clothes into a basket<br>8. Hang the wet clothes onto the clothes line<br>9. Once dry fold the clothes and put them away<br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden4() {
  var display = document.getElementById("List4");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[7].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[8].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList4() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List4");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect4").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary4").innerHTML = "Incorrect - Further OT assessment to assess laundry is LIKELY required";
          incorrect4.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect4");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect4").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary4").innerHTML = "Correct - Further OT assessment to assess laundry is NOT LIKELY required";
          incorrect4.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect4");
       
             src.appendChild(img);
          }
      }
    }
  }
  
  // list 5
    //  Sortable.create(List, { /* options */ });
  
  var sortable5 = Sortable.create(List5);
  
  //Disable sortable
  function Disable5() {
      var state5 = sortable5.option("disabled"); // get
  
      sortable5.option("disabled", !state5); // set
  }
  
  //Display correct answers
  function correctAnswers5() {
      document.getElementById("answer5").innerHTML = "Answer:<br><br>1. Pick up the broom<br>2. Sweep the dust on the floor into piles<br>3. Pick up the dustpan and brush<br>4. Sweep the piles of dust into the dustpan<br>5. Empty the dustpan into the bin<br>6. Fill up the bucket with water and add floor cleaner<br>7. Using the mop and bucket mop the floor<br>8. Empty the mop bucket and wait for the floor to dry <br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden5() {
  var display = document.getElementById("List5");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[7].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList5() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List5");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect5").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary5").innerHTML = "Incorrect - Further OT assessment to assess cleaning is LIKELY required";
          incorrect5.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect5");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect5").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary5").innerHTML = "Correct - Further OT assessment to assess cleaning is NOT LIKELY required";
          incorrect5.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect5");
       
             src.appendChild(img);
          }
      }
    }
  }
  
  // list 6
    //  Sortable.create(List, { /* options */ });
  
    var sortable6 = Sortable.create(List6);
  
  //Disable sortable
  function Disable6() {
      var state6 = sortable6.option("disabled"); // get
  
      sortable6.option("disabled", !state6); // set
  }
  
  //Display correct answers
  function correctAnswers6() {
      document.getElementById("answer6").innerHTML = "Answer:<br><br>1. Search the Translink website for available bus routes and times<br>2. Make sure you have enough funds on your go card<br>3. Go to the nearest bus stop on the bus route<br>4. Hail the bus with the chosen bus route number<br>5. Swipe your go card as you hop on the bus and take a seat<br>6. Push the bell when you are at the destination<br>7. Swipe your go card as you leave the bus <br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden6() {
  var display = document.getElementById("List6");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList6() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List6");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect6").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary6").innerHTML = "Incorrect - Further OT assessment to assess public transport access is LIKELY required";
          incorrect6.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect6");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect6").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary6").innerHTML = "Correct - Further OT assessment to assess public transport access is NOT LIKELY required";
          incorrect6.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect6");
       
             src.appendChild(img);
          }
      }
    }
  }
  
  // list 7
    //  Sortable.create(List, { /* options */ });
  
    var sortable7 = Sortable.create(List7);
  
  //Disable sortable
  function Disable7() {
      var state7 = sortable7.option("disabled"); // get
  
      sortable7.option("disabled", !state7); // set
  }
  
  //Display correct answers
  function correctAnswers7() {
      document.getElementById("answer7").innerHTML = "Answer:<br><br>1. Phone the doctor's surgery to book an appointment<br>2. Present to the doctor's surgery for your scheduled appointment<br>3. Tell the medical admin that you have arrived<br>4. Wait in the waiting room until the doctor calls your name<br>5. Tell your doctor that you require a prescription for your medication<br>6. Present back to the medical admin to pay your bill or sign the medicare form<br>7. Attend your local pharmacy to have your prescription filled<br>8. Take your medication home and store it in a safe place <br><br>Congratulations if you got this correct, if not take time to review the answer";
  }
  
  //Display hidden numbers
  function removeHidden7() {
  var display = document.getElementById("List7");
      display.getElementsByTagName("FIGURE")[0].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[1].removeAttribute("hidden"); 
      display.getElementsByTagName("FIGURE")[2].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[3].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[4].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[5].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[6].removeAttribute("hidden");
      display.getElementsByTagName("FIGURE")[7].removeAttribute("hidden");
  }
  
  //https://www.w3schools.com/howto/howto_js_sort_list.asp
  
  function sortList7() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("List7");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      //Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*check if the next item should
        switch place with the current item:*/
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /*if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop:*/
        
          shouldSwitch= true;
          document.getElementById("incorrect7").innerHTML = "Sorry incorrect&nbsp&nbsp";
          document.getElementById("summary7").innerHTML = "Incorrect - Further OT assessment to assess medication management is LIKELY required";
          incorrect7.style.color = 'red';
  // https://www.quora.com/How-do-you-insert-an-image-in-Javascript
            var img = document.createElement("img");
       
              img.src = "img/wrong.png";
              var src = document.getElementById("incorrect7");
       
              src.appendChild(img); 
          break;
          }
          else {document.getElementById("incorrect7").innerHTML = "Correct&nbsp&nbsp";
          document.getElementById("summary7").innerHTML = "Correct - Further OT assessment to assess medication management is NOT LIKELY required";
          incorrect7.style.color = 'darkgreen';
          var img = document.createElement("img");
       
              img.src = "img/tick.png";
             var src = document.getElementById("incorrect7");
       
             src.appendChild(img);
          }
      }
    }
  }
  function printPage() {
    window.print();
}
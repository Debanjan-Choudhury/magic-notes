let addBtn = document.getElementById('addBtn')         /* ok */
let addTxt1 = document.getElementById('addTxt')         /* ok */
let notes1 = localStorage.getItem('notes2')         /* ok */
let notesObj;         /* ok */
let notesElm = document.getElementById('notes')         /* ok */
showNotes();
addBtn.addEventListener('click', function () {         /* ok */
    if (notes1 == null) {         /* ok */
        notesObj = []         /* ok */
    }
    else {
        notesObj = JSON.parse(notes1)         /* ok */
    }
    notesObj.push(addTxt1.value)         /* ok */
    localStorage.setItem('notes2', JSON.stringify(notesObj))         /* ok */
    addTxt1.value = ""          /* ok */
    console.log(notesObj)
    showNotes()
})

function showNotes() {
    if (notes1 == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes1)
    }
    let html = ""
   notesObj.forEach(function (element, index) {
        html +=
            `<div class="card mx-2 my-2 noteCard" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title">Note ${index + 1} </h5>
         <p class="card-text"> ${element} </p>
         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger " >Delete</button>
     </div>
 </div>`
    }); 
    if(localStorage.length != 0){
      notesElm.innerHTML = html
    }
    else {
       
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  }

 

  //function to delete an element 


  function deleteNote(index){
    console.log('deleting')  /* ok*/
    let notes1 = localStorage.getItem('notes2')
    if (notes1 == null){
      notesObj = [];

    }else {
      notesObj = JSON.parse(notes1);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes2", JSON.stringify(notesObj));
    showNotes(); 
  }

  // to search the element
  let search = document.getElementById('searchTxt');
  search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
    
  })


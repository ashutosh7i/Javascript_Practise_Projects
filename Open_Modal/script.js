//Select the elements with the IDs
    const modal = document.getElementById("modal")
    const open_modal_btn = document.getElementById("open-modal-btn")
    const close_modal_btn = document.getElementById("close-modal-btn")
    const overlay = document.getElementById("overlay")

//Create a click event listener for the open-modal-btn that adds the class "open" to the modal
    open_modal_btn.addEventListener('click', () => {
      modal.classList.add("open")
      overlay.classList.add("open")
    })

//Create a click event listener for the close-modal-btn that removes the class "open" from the modal
    close_modal_btn.addEventListener('click',() => {
      removeModal();
    })

//if clicked outside modal
    overlay.addEventListener('click',() => {
      removeModal();
    })
    
//a master function to remove modal in both cases
    function removeModal(){
      modal.classList.remove("open")
      overlay.classList.remove("open")
    }
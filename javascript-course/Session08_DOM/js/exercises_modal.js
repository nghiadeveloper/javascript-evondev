// Cách 2

const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, atque! Commodi, dignissimos dolorum. Repudiandae libero, enim, incidunt minima soluta blanditiis recusandae nemo ipsum nam laboriosam molestias aliquid suscipit minus dolor!";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit"); 
modalSubmit.textContent = "Confirm";
modalAction.appendChild(modalSubmit);
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel"); 
modalCancel.textContent = "Cancel";
modalAction.appendChild(modalCancel);
document.body.appendChild(modal);

const modalWrapper = document.querySelector(".modal");
if(modalWrapper) {
    setTimeout(function() {
        modalWrapper.classList.add("is-show");
    }, 3000); 
}



// Cách 1

// const template = `<div class="modal">
//                     <div class="modal-content">
//                         <i class="fa fa-times modal-close"></i>
//                         <div class="modal-desc">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, atque! 
//                             Commodi, dignissimos dolorum. Repudiandae libero, enim, incidunt minima soluta 
//                             blanditiis recusandae nemo ipsum nam laboriosam molestias aliquid suscipit minus dolor!
//                         </div>
//                         <div class="modal-action">
//                             <button class="modal-submit">Confirm</button>
//                             <button class="modal-cancel">Cancel</button>
//                         </div>
//                     </div>
//                 </div>`;

// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

// const modal = document.querySelector(".modal");
// if(modal) {
//     setTimeout(function() {
//         modal.classList.add("is-show");
//     }, 3000); 
// }
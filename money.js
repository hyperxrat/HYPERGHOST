
document.querySelector(".signup").addEventListener("click",()=>{
    location.href="sign_up.html"
})
const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.Username && user.password) {
            // If user is found, display a welcome message
            document.querySelector(".rightnav").style.display="none"
            document.querySelector(".hidden_rightnav").style.display="block"
        } else {
            // If user is not found, prompt to sign up
            document.querySelector(".rightnav").style.display="block"
            document.querySelector(".hidden_rightnav").style.display="none"
        }


// ---------------- ORDER CONTAINER NAV BUTTONS---------
// ---------------- ORDER CONTAINER NAV BUTTONS---------

const pendingbtn = document.querySelector(".pending_tab")
const dispatchedbtn = document.querySelector(".dispatched_tab")
const cancelledbtn = document.querySelector(".cancelled_tab")

pendingbtn.addEventListener("click",()=>{
    document.querySelector(".order_pending_conta").style.display="block"
    document.querySelector(".order_dispatched_conta").style.display="none"
    document.querySelector(".order_cancelled_conta").style.display="none"
})
dispatchedbtn.addEventListener("click",()=>{
    document.querySelector(".order_pending_conta").style.display="none"
    document.querySelector(".order_dispatched_conta").style.display="block"
    document.querySelector(".order_cancelled_conta").style.display="none"
})
cancelledbtn.addEventListener("click",()=>{
    document.querySelector(".order_pending_conta").style.display="none"
    document.querySelector(".order_dispatched_conta").style.display="none"
    document.querySelector(".order_cancelled_conta").style.display="block"
})
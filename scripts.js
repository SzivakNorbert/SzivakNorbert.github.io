
  function toggleTheme(){
    window.theme = typeof(window.theme)==='string' ? window.theme : 'hc-off';
    var switchToTheme = window.theme === 'hc-off' ? 'hc-on' : 'hc-off';
    window.theme = switchToTheme;
    document.querySelector('body').setAttribute('data-theme',switchToTheme);
}
function disableSubmit() {
  document.getElementById("submit").disabled = true;
 }

  function activateButton(element) {

      if(element.checked) {
        document.getElementById("submit").disabled = false;
       }
       else  {
        document.getElementById("submit").disabled = true;
      }

  }

  function saveData()
   {
   let kname,vname,email,subject,message,ferfi,no,non;
   kname=document.getElementById("kname").value;
   vname=document.getElementById("vname").value;
   email=document.getElementById("email").value;
   subject=document.getElementById("subject").value;
   message=document.getElementById("message").value;
   ferfi=document.getElementById("male").value;
   no=document.getElementById("female").value;
   non=document.getElementById("sex-none").value;
   
   localStorage.setItem("firstname",kname);
   localStorage.setItem("lastname",vname);
   localStorage.setItem("email",email);
   localStorage.setItem("subject",subject);
   localStorage.setItem("message",message);
   localStorage.setItem("ferfi",ferfi);
   localStorage.setItem("no",no);
   localStorage.setItem("non",non);
   }
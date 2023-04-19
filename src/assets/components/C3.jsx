import React from 'react'

function C3() {
  return (   
    <>
        <button class="btn btn-sm btn-primary rounded-circle position-fixed bottom-0 end-0 translate-middle d-none" onclick="scrollToTop()" id="back-to-up">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
    
      {/* <script>
      window.onscroll = () => {
            toggleTopButton();
          }
          function scrollToTop(){
            window.scrollTo({top: 0, behavior: 'smooth'});
          }

          function toggleTopButton() {
            if (document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20) {
              document.getElementById('back-to-up').classList.remove('d-none');
            } else {
              document.getElementById('back-to-up').classList.add('d-none');
            }
          }
    </script> */}
    </>

  )
}

export default C3
import UserLibrary from "@/components/Users/UserLibrary";
import Navbar from "@/components/shared/Navbar";

function userId() {
    return (
        <section>
<Navbar />
  <section class="relative block h-[500px]">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{transform: "translateZ('0px')"}}>
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blue-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section class="relative py-16 bg-blue-200">
    <div class="md:container w-full mx-auto px-4">
      <div class="relative flex flex-col break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="md:px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img alt="..." src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 flex sm:block justify-center sm:mt-0">
                <button class="bg-gradient-to-r from-[darkblue] bg-opacity-50 to-[darkorchid] text-white uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-n  one sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Follow
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blue-600">22</span><span class="text-sm text-blue-400">Friends</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blue-600">10</span><span class="text-sm text-blue-400">Photos</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blue-600">89</span><span class="text-sm text-blue-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blue-700">
              Jenna Stones
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blue-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blue-400"></i>
              Los Angeles, California
            </div>
            <div class="mb-2 text-blue-600 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-blue-400"></i>Solution Manager - Creative Tim Officer
            </div>
            <div class="mb-2 text-blue-600">
              <i class="fas fa-university mr-2 text-lg text-blue-400"></i>University of Computer Science
            </div>
          </div>
          <div class="pb-10 text-center">
           <UserLibrary />
          </div>
        </div>
      </div>
    </div>
  </section>
        </section>
    );
}

export default userId;
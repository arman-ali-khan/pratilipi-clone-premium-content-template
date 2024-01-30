import Story from "../Home/Stories/Story";

function UserStories() {
    return (
        <section className="relative w-full">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {
          [...Array(12).keys()].map((story,i)=>{
            return <Story key={i} />
          })
        }
        </div>
       </section>
    );
}

export default UserStories;
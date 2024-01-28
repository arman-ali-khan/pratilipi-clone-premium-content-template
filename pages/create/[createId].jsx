import { useQuill } from 'react-quilljs';

import PostHeader from '@/components/shared/PostHeader';
import 'quill/dist/quill.bubble.css'; // Add css for snow theme
import { useEffect } from 'react';
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

 const createId= () => {


    const theme = 'bubble';
    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike','image','list','header','clean'],
        ],
      };
    
      const placeholder = 'লিখুন...';
    
      const formats = ['bold', 'italic', 'underline', 'strike','image','list','header','clean'];
    
      const { quill,quillRef } = useQuill({ theme, modules, formats, placeholder });


  console.log(quill);    // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  const defaultContent = typeof window !=='undefined' && JSON.parse(localStorage.getItem('content'))
  quill?.clipboard.dangerouslyPasteHTML(defaultContent);
  
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        
        // console.log(quill.getText()); // Get text only
        const content = quill.root.innerHTML
        // console.log(quill.getContents()); // Get delta contents
        typeof window !=='undefined' && localStorage.setItem('content',JSON.stringify(content))
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  return (
   <section className='container mx-auto'>
    <PostHeader />
     <div className='flex flex-col-reverse md:flex-row w-full gap-3 mt-12 mb-12'>
        {/* post box */}
        <div className='md:container bg-gradient-to-r from-[darkorchid] p-1 rounded-xl bg-opacity-50 to-[darkblue] md:ml-12 h-[400px] md:h-[600px] md:w-[700px] md:max-w-full md:min-w-[300px] md:min-h-[500px] md:max-h-[800px] ' >
      <div onChange={(e)=>console.log(e)} className='text-xs md:text-base bg-base-100 md:min-h-[500px] md:max-h-[800px] h-[400px] md:h-[600px] border rounded-lg' ref={quillRef} />
    </div>
    {/* aside */}
    <aside className='w-96 max-w-fit min-w-56 h-fit px-4 md:px-2 '>
        <div>
          
           <h2 className='font-bold text-xl'>নির্দেশনাঃ</h2>
            <div>
                <ul>
                    <li className='list-item list-inside list-decimal'>
                        গল্প সম্পুর্ন বাংলা ভাষায় লিখতে হবে । 
                    </li>
                    <li className='list-item list-inside list-decimal'>
                        লেখার সুবিধার্তে <a className='font-bold text-blue-600' href="https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab" target='_blank'>গুগল ইনপুট টুলস</a> ব্যবহার করতে পারেন । (<a className='font-bold text-blue-600' href="https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab" target='_blank'>ব্যবহারের নিয়ম</a>)
                    </li>
                    <li className='list-item list-inside list-decimal'>
                        ছবি আপলোড করার আগে যে কোন কিছু (দরকারি কিছু নয় এমন) লিখে সিলেক্ট করুন তার পর ছবির আইকনে ক্লিক করে ছবি বাছাই করুন । 
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    </div>
   </section>
  );
};

export default createId
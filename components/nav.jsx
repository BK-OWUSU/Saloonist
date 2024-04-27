
const Nav = () => {
  return (   
    <nav className="w-full sticky top-0 z-9 px-20 py-8 z-50">
        <div className='flex justify-between'>
            <a href="index.html">Logo</a>
            
            <ul className="flex gap-16">
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>    
  )
}

export default Nav
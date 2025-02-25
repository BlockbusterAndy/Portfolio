import { Send, Phone, Mail, Linkedin, Instagram, Twitter, Youtube, Twitch, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full min-h-[70vh] border-t border-secondaryText border-opacity-30">
        <div className="flex flex-col md:flex-row h-full w-full gap-4">
            <div className="px-[10vw] py-[8vh] md:w-1/2 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h6 className="text-2xl text-primaryText font-semibold">💡 Let’s Collaborate!</h6>
                    <p className="text-lg text-secondaryText">Have an idea or project in mind? I’d love to hear from you. Drop me a message, and let’s create something amazing together!</p>
                    <button className="flex items-center gap-2 ml-1 mt-4 px-4 py-2 w-fit border border-primaryText text-primaryText rounded-xl transition duration-300 ease-in-out hover:font-semibold hover-glow">
                        Send Email 
                        <Send size={20} />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="text-2xl text-primaryText font-semibold">Aniket D. Jadhav</h6>
                    <p className="text-base text-secondaryText">📍 Based in Pune, INDIA.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-secondaryText">
                            <Phone size={20} className="inline-block" /> <span className="text-secondaryText">+91 866 844 3754</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondaryText">
                            <Mail size={20} className="inline-block" /> <a href="mailto:aniketdj19@gmail.com"><span className="text-secondaryText">aniketdj19@gmail.com</span></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h6 className="text-2xl text-primaryText font-semibold">Socials</h6>
                    <div className="flex gap-12 mt-2 text-secondaryText">
                        <a href="https://www.linkedin.com/in/blockbusterandy/" target="_blank" rel="noopener noreferrer"><Linkedin size={50} className="inline-block" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Github size={50} className="inline-block" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Instagram size={50} className="inline-block" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Twitter size={50} className="inline-block" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Youtube size={50} className="inline-block" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Twitch size={50} className="inline-block" /></a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="flex justify-center items-center w-full h-16 bg-primaryText text-white text-lg text-center font-semibold">
            © 2024 Aniket D. Jadhav. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
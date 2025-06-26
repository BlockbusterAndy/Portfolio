import { Send, Phone, Mail, Linkedin, Instagram, Twitter, Youtube, Twitch, Github } from 'lucide-react'
import ContactForm from './ui/ContactForm'

const Footer = () => {
  return (
    <footer className="w-full min-h-[60vh] border-t border-secondaryText border-opacity-30" id="contact">
        <div className="flex flex-col md:flex-row h-full w-full gap-3">
            <div className="px-[8vw] py-[6vh] md:w-1/2 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <h6 className="text-xl text-primaryText font-semibold">💡 Let's Collaborate!</h6>
                    <p className="text-base text-secondaryText">Have an idea or project in mind? I'd love to hear from you. Drop me a message, and let's create something amazing together!</p>
                    <button className="flex items-center gap-2 ml-1 mt-3 px-3 py-1.5 w-fit border border-primaryText text-primaryText rounded-xl transition duration-300 ease-in-out hover:font-semibold hover-glow">
                        Send Email 
                        <Send size={18} />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="text-xl text-primaryText font-semibold">Aniket D. Jadhav</h6>
                    <p className="text-sm text-secondaryText">📍 Based in Pune, INDIA.</p>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-secondaryText">
                            <Phone size={18} className="inline-block" /> <span className="text-secondaryText">+91 866 844 3754</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondaryText">
                            <Mail size={18} className="inline-block" /> <a href="mailto:aniketdj19@gmail.com"><span className="text-secondaryText">aniketdj19@gmail.com</span></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h6 className="text-xl text-primaryText font-semibold">Socials</h6>
                    <div className="hidden md:flex gap-8 mt-2 text-secondaryText">
                        <a href="https://linkedin.com/in/blockbusterandy/" target="_blank" rel="noopener noreferrer"><Linkedin size={40} className="inline-block hover-icon" /></a>
                        <a href="https://github.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Github size={40} className="inline-block hover-icon" /></a>
                        <a href="https://instagram.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Instagram size={40} className="inline-block hover-icon" /></a>
                        <a href="https://x.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Twitter size={40} className="inline-block hover-icon" /></a>
                        <a href="https://youtube.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Youtube size={40} className="inline-block hover-icon" /></a>
                        <a href="https://twitch.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Twitch size={40} className="inline-block hover-icon" /></a>
                    </div>
                    <div className="flex flex-wrap gap-6 mt-2 text-secondaryText md:hidden">
                        <a href="https://linkedin.com/in/blockbusterandy/" target="_blank" rel="noopener noreferrer"><Linkedin size={22} className="inline-block hover-icon" /></a>
                        <a href="https://github.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Github size={22} className="inline-block hover-icon" /></a>
                        <a href="https://instagram.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Instagram size={22} className="inline-block hover-icon" /></a>
                        <a href="https://x.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Twitter size={22} className="inline-block hover-icon" /></a>
                        <a href="https://youtube.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Youtube size={22} className="inline-block hover-icon" /></a>
                        <a href="https://twitch.com/blockbusterandy" target="_blank" rel="noopener noreferrer"><Twitch size={22} className="inline-block hover-icon" /></a>
                    </div>
                </div>            </div>
            <div className="px-[8vw] py-[6vh] md:w-1/2">
                <ContactForm />
            </div>
        </div>
        <div className="flex justify-center items-center w-full h-12 bg-primaryText text-white text-base text-center font-semibold">
            © 2024 Aniket D. Jadhav. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
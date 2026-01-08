import { Phone, Mail, Linkedin, Instagram, Twitter, Github, ArrowUpRight } from 'lucide-react'
import ContactForm from './ui/ContactForm'

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-10" id="contact">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">

                    {/* Left Side: Call to Action & Info */}
                    <div className="flex-1 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                                Let's build something <br />
                                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">extraordinary.</span>
                            </h2>
                            <p className="text-secondaryText text-lg max-w-md leading-relaxed">
                                Have an idea or project in mind? I'm always open to discussing new opportunities and creative collaborations.
                            </p>

                            <a
                                href="mailto:aniketdj19@gmail.com"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-transform hover:scale-105 duration-300"
                            >
                                Start a Conversation
                                <ArrowUpRight size={20} />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Contact Details</h6>
                                <div className="space-y-3">
                                    <a href="mailto:aniketdj19@gmail.com" className="flex items-center gap-3 text-secondaryText hover:text-white transition-colors group">
                                        <Mail size={18} className="group-hover:text-blue-400 transition-colors" />
                                        aniketdj19@gmail.com
                                    </a>
                                    <a href="tel:918668443754" className="flex items-center gap-3 text-secondaryText hover:text-white transition-colors group">
                                        <Phone size={18} className="group-hover:text-green-400 transition-colors" />
                                        +91 866 844 3754
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Follow Me</h6>
                                <div className="flex gap-4 flex-wrap">
                                    <SocialLink href="https://linkedin.com/in/blockbusterandy" icon={<Linkedin size={20} />} />
                                    <SocialLink href="https://github.com/blockbusterandy" icon={<Github size={20} />} />
                                    <SocialLink href="https://twitter.com/blockbusterandy" icon={<Twitter size={20} />} />
                                    <SocialLink href="https://instagram.com/blockbusterandy" icon={<Instagram size={20} />} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-[450px]">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondaryText/60">
                    <p>© 2025 Aniket Jadhav. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondaryText hover:bg-white hover:text-black hover:border-white transition-all duration-300"
    >
        {icon}
    </a>
)

export default Footer
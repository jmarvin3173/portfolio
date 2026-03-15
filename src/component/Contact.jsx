function Contact() {

    return (
        <section id="contact" className="py-24 px-6 bg-gradient-to-t from-forest-green via-sage-green to-light-green">

            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl">
                    Get In Touch
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                    Ready to build something amazing together? Let's discuss your next project!
                </p>
                <div className="w-20 sm:w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

                {/* Contact Info */}
                <div className="space-y-8 text-white">
                    <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold drop-shadow-lg">Let's Connect</h3>
                        <p className="text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
                            I'm always interested in new opportunities and exciting projects.
                            Send me a message and let's talk Java!
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: "📧", title: "Email", desc: "johnmarvinpino7@gmail.com" },
                            { icon: "💼", title: "LinkedIn", desc: "linkedin.com/in/yourprofile" },
                            { icon: "📱", title: "Phone", desc: "+63 963 875 4500" },
                            { icon: "🌐", title: "GitHub", desc: "github.com/yourusername" }
                        ].map((contact, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 text-center"
                            >
                                <div className="text-2xl mb-3">{contact.icon}</div>
                                <h4 className="text-lg font-semibold mb-2">{contact.title}</h4>
                                <p className="text-white/90 text-sm sm:text-base">{contact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20">
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-lg"
                            required
                        />
                        <textarea
                            rows="5"
                            placeholder="Tell me about your project..."
                            className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-lg resize-vertical"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-white to-gray-100 text-forest-green font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-lg sm:text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-gray-50 hover:to-white transition-all duration-300 border-2 border-white/20"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
function Home() {

    return (
        // <!-- Home Section -->
        <section id="home" class="min-h-screen flex items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
            <div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent mb-6 leading-snug sm:leading-tight md:leading-tight">
                    Java & Spring Boot
                </h1>

                {/* Subheading */}
                <div className="text-xl sm:text-2xl md:text-3xl text-sage-green font-semibold mb-6">
                    Clean Code • Fast APIs • Reliable Systems
                </div>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Passionate about building secure, maintainable systems and delivering production-ready solutions that perform at scale.
                </p>

                {/* <!-- Button --> */}
                <a href="#projects"
                    class="inline-block bg-gradient-to-r from-forest-green to-sage-green text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg">
                    View My Projects
                </a>

            </div>
        </section>

    );
}

export default Home;
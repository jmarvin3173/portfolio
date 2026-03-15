function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent mb-6">
                    About Me
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-forest-green to-sage-green mx-auto"></div>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8">

                    {/* Intro */}
                    <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-green">
                            Java Developer
                        </h3>
                        <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">
                            3+ years of experience building scalable web applications using modern Java technologies.
                        </p>
                    </div>

                    {/* Stats */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 text-center">
                            <h4 className="text-2xl font-bold text-forest-green mb-2">100+</h4>
                            <p className="text-gray-600 font-medium">Projects Delivered</p>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 text-center">
                            <h4 className="text-2xl font-bold text-forest-green mb-2">50+</h4>
                            <p className="text-gray-600 font-medium">Happy Clients</p>
                        </div>
                    </div> */}

                    {/* What I Do Section */}
                    <div className="bg-gradient-to-r from-forest-green/5 to-sage-green/5 p-6 sm:p-8 rounded-2xl border border-forest-green/20">
                        <h4 className="text-2xl font-bold text-forest-green mb-4">What I Do</h4>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            {[
                                "Java & Spring Boot Development",
                                "RESTful APIs",
                                "Database Design & Optimization (MySQL, PostgreSQL, Microsoft SQL)",
                                "Object-Oriented Programming (OOP)",
                                "JPA & Hibernate ORM",
                                "API Integration & Testing (Postman)",
                                "Agile & Scrum Workflow",
                                "Clean Code & Refactoring"
                            ].map((skill, i) => (
                                <li key={i} className="flex items-center">
                                    <span className="w-2 h-2 bg-forest-green rounded-full mr-3 flex-shrink-0"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Code Illustration */}
                <div className="relative group w-full">
                    <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-6 sm:p-12 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 border-4 border-white/50">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8 rounded-2xl relative overflow-auto">

                            {/* Window bar */}
                            <div className="flex gap-2 mb-4 pb-2 border-b border-gray-700">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>

                            {/* Code block */}
                            <div className="text-xs sm:text-sm font-mono text-green-400 leading-relaxed overflow-x-auto bg-gray-900/50 p-2 sm:p-4 rounded-xl">
                                <div className="text-blue-400">public</div>
                                <div className="text-yellow-400 inline ml-1">class</div>
                                <div className="text-purple-400 inline ml-1">AboutMe</div> <span>{"{"}</span>

                                <div className="ml-4 mt-2">
                                    <span className="text-blue-400">private</span>
                                    <span className="text-yellow-400 ml-1">String</span> passion = <span className="text-red-400 ml-1">"Java"</span>;
                                </div>

                                <div className="ml-4 mt-1">
                                    <span className="text-orange-400">@Autowired</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-yellow-400">RestTemplate</span> restTemplate;
                                </div>

                                <div className="ml-4 text-green-400 text-xs italic">// Building scalable apps</div>

                                <div className="ml-4 mt-2">
                                    <span className="text-orange-400">@PostMapping</span>
                                    <span className="text-red-400 ml-1">"/api/projects"</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-blue-400">public</span>
                                    <span className="text-yellow-400 ml-1">ResponseEntity</span>
                                    <span className="text-purple-400 ml-1">createSuccess</span>() {"{"}
                                </div>
                                <div className="ml-8">
                                    <span className="text-blue-400">return</span>
                                    <span className="text-yellow-400 ml-2">ResponseEntity</span>.
                                    <span className="text-orange-400 ml-1">ok</span>
                                    <span className="text-red-400 ml-1">"Ready to code!"</span>;
                                </div>
                                <div className="ml-4">{"}"}</div>
                                <div className="text-gray-500">{"}"}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
import img1 from '../assets/cozy.jpg';
import img2 from '../assets/night.jpg';
import img3 from '../assets/snow.jpg';

function Project() {
    return (
        <section id="projects" className="py-24 px-6 bg-gradient-to-b from-green-50 to-emerald-50">

            {/* Section Header */}
            <div className="text-center mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent mb-6">
                    My Projects
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-forest-green to-sage-green mx-auto"></div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {/* Project Card Template */}
                {[
                    {
                        title: "E-Commerce API",
                        desc: "Full-stack e-commerce backend with Spring Boot, JWT authentication, payment integration, and PostgreSQL database.",
                        tags: ["Spring Boot", "PostgreSQL", "Docker"],
                        bg: img1
                    },
                    {
                        title: "Task Management System",
                        desc: "Real-time task management app with WebSocket, microservices architecture, Redis caching, and React frontend.",
                        tags: ["Spring Cloud", "Redis", "WebSocket"],
                        bg: img2
                    },
                    {
                        title: "Inventory Management",
                        desc: "Enterprise inventory system with barcode scanning, real-time stock updates, reporting dashboard, and AWS deployment.",
                        tags: ["Spring Boot", "AWS", "Kafka"],
                        bg: img3
                    }
                ].map((project, i) => (
                    <div
                        key={i}
                        className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-4 transition-all duration-500 border border-emerald-100 hover:border-sage-green flex flex-col"
                    >
                        {/* Project Image / Background */}
                        <div
                            className="w-full h-48 sm:h-56 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.bg})` }}
                        ></div>

                        {/* Title & Description */}
                        <h3 className="text-xl sm:text-2xl font-bold text-forest-green mb-3 group-hover:text-sage-green transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                            {project.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${tag.includes("Docker") ? "bg-light-green/10 text-light-green" : tag.includes("Redis") ? "bg-sage-green/10 text-sage-green" : "bg-forest-green/10 text-forest-green"}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <a
                                href="#"
                                className="flex-1 text-center bg-gradient-to-r from-forest-green to-sage-green text-white py-3 px-6 rounded-xl font-semibold hover:-translate-y-1 transition-all duration-300"
                            >
                                Live Demo
                            </a>
                            <a
                                href="#"
                                className="flex-1 text-center border-2 border-forest-green text-forest-green py-3 px-6 rounded-xl font-semibold hover:bg-forest-green hover:text-white transition-all duration-300"
                            >
                                Code
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Project
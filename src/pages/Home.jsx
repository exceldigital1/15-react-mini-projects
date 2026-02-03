import ProjectCard from "../component/ProjectCard";


const projects = [
    { title: "Counter App", path: "/counter", image: "" },
    { title: "To-Do List", path: "/todo", image: ""},
    { title: "OTP Generator", path: "/otp", image: "" },
    { title: "Quiz App", path: "/quiz", image: "" },
    // add all 15
];

function Home() {
    return (
        <div className="home">
            <h1>15 Days · 15 React Projects 🚀</h1>
            <p>Mini apps built to sharpen my React fundamentals.</p>

            <div className="grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Home;
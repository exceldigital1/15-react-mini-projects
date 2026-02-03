import { Link } from "react-router-dom";

function ProjectCard({ title, path }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src="" alt="" />
            <Link to={path}>View Project →</Link>
        </div>
    );
}

export default ProjectCard;
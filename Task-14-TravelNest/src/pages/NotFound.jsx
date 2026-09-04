import { Link } from "react-router-dom";
function NotFound(){return <section className="page-section not-found"><div className="container"><span className="eyebrow">LOST YOUR WAY?</span><h1>404</h1><h2>This page wandered off.</h2><p>The destination you are looking for does not exist.</p><Link to="/" className="btn primary">Back to home <span>→</span></Link></div></section>}
export default NotFound;

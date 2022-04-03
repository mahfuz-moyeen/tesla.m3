import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
                style={{ 
                    color: match ? "rgb(251 146 60)" : "",
                    borderBottomColor: match ? "rgb(251 146 60)" : ""
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink;
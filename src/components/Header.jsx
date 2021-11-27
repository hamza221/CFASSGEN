import React from 'react'

export default function Header() {
    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
                <h1 className="text-primary">The social network</h1>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/add_new_post" className="nav-link px-2 primary-secondary">New Post</a></li>
                        <li><a href="/" className="nav-link px-2 primary-secondary">Browse Posts</a></li>
                </ul>
        </header>
        </div>
    )
}

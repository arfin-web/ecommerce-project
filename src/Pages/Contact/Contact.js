import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <h2 className="fw-bold text-primary opacity-75 mb-4">Get In Touch</h2>
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Your Email" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="floatingTextarea2" className="form-label">Message</label>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary opacity-75 rounded-pill">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;
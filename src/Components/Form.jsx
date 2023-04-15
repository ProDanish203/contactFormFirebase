import React, { useState } from 'react'

export const Form = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    let name, value
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value})
    }

    
    const submitForm = async (e) => {
        e.preventDefault();

        const { name, email, phone } = user;

        if(name && email && phone){

            const res = await fetch("https://searchapi-5cb49-default-rtdb.firebaseio.com/contactForm.json", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                })
            })
    
            if(res){
                setUser({
                    name: "",
                    email: "",
                    phone: ""
                })
    
                alert("Your Response Has Been Submitted")
    
            }
        }
        else{
            alert("Please Fill All the fields");
        }

        

    }

  return (
    <>
    <section className="contact" id="contact">

    <h2 className="heading"> <span>Contact</span> </h2>

    <div className="row">

        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.519431127744!2d67.05606851481626!3d24.91436884923106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0e21c1611f%3A0x19c57d875b1f8643!2sSir%20Adamjee%20Institute%20of%20Management%20Sciences!5e0!3m2!1sen!2s!4v1660579387366!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <form action="#" method="POST">

            <h3>get in touch</h3>

            <div className="inputBox">
                <span className="fa-solid fa-user"></span>
                <input type="text" id="name" className="input-field" value={user.name} onChange={getUserData} autoComplete="off" placeholder="Name" name="name" required/>
                <label htmlFor="name" className="label"></label>
            </div>

            <div className="inputBox">
                <span className="fa-solid fa-envelope"></span>
                <input type="email" id="email" className="input-field" value={user.email} onChange={getUserData}autoComplete="off" placeholder="Email" name="email" required/>
                <label htmlFor="email" className="label"></label>
            </div>

            <div className="inputBox">
                <span className="fa-solid fa-phone"></span>
                <input type="tel" id="phone" className="input-field" value={user.phone} onChange={getUserData} autoComplete="off" placeholder="Phone" name="phone" required/>
                <label htmlFor="phone" className="label"></label>
            </div>

            <input type="submit" className="btn" value="Contact Now" onClick={(e) => submitForm(e)} />

        </form>

    </div>

    </section>
    </>
  )
}

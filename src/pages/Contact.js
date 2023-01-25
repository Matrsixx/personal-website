import './Contact.css';

function Contact(){

    return (
        <div>
            <h1 id="Contact-Title">CONTACT</h1>
            <div id="Contact-Title-p">
                <p>Lorem ipsum, or lipsum as it is sometimes known, 
                is dummy text used in laying out print, graphic or web designs. 
                The passage is attributed to an unknown typesetter in the 15th 
                </p>
            </div>
            <br></br>
            
            <section className="center-contact">
                <div id="contact-div">     
                    <img src="https://cdn.discordapp.com/attachments/524461320314028052/1067852750907510957/Whatsapp.png" id="img-mail"></img>
                    <br></br>
                    <br></br>
                    <a href="whatsapp://send?text=Hello&phone=+6285931036288" id="img-text">+62 859 31036288</a>
                </div>

                <div id="contact-div">     
                    <img src="https://cdn.discordapp.com/attachments/524461320314028052/1067852276800176230/Mail.png" id="img-mail"></img>
                    <br></br>
                    <br></br>
                    <a href="mailto:vincent.aldiandra@gmail.com" id="img-text">vincent.aldiandra@gmail.com</a>
                </div>

                <div id="contact-div">     
                    <img src="https://cdn.discordapp.com/attachments/524461320314028052/1067852276225540216/Instagram.png" id="img-mail"></img>
                    <br></br>
                    <br></br>
                    <a href="https://www.instagram.com/vincentaldiandra/" id="img-text">@vincentaldiandra</a>
                </div>
            </section>     

            <footer>
                <p>COPYRIGHT &#169; 2023 VINCENT ALDIANDRA GAUTAMA MARTANU</p>
            </footer>
        </div>
    )
}

export default Contact;
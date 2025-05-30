import './ContactsHeader.css';

export default function ContactsHeader() {
    return (
        <>
        {/*Start Header section*/}
        <section className="header-contact sticky z-20">
            <div className="header-email">
            <img
                width={20}
                height={20}
                src="https://img.icons8.com/ios-filled/50/545454/new-post.png"
                alt="new-post"
            />
            <p>info@motokrastev.bg</p>
            </div>
            <div className="header-phones">
            <img
                width={20}
                height={20}
                src="https://img.icons8.com/ios-filled/50/545454/apple-phone.png"
                alt="apple-phone"
            />
            <p>+359 88 888 8888 / +359 88 666 6666</p>
            </div>
            <div className="header-work-time">
            <img
                width={20}
                height={20}
                src="https://img.icons8.com/ios-filled/50/545454/present.png"
                alt="present"
            />
            <p>Mon - Sat - 10:00 - 18:00 / Sunday - rest day</p>
            </div>
            <div className="header-social">
            <img
                width={30}
                height={30}
                src="https://img.icons8.com/ios-glyphs/30/545454/facebook.png"
                alt="facebook"
            />
            <img
                width={30}
                height={30}
                src="https://img.icons8.com/ios-glyphs/30/545454/instagram-new.png"
                alt="instagram-new"
            />
            <img
                width={28}
                height={28}
                src="https://img.icons8.com/ios-filled/50/545454/twitterx.png"
                alt="twitterx"
            />
            </div>
        </section>
        {/*End Header section*/}
        </>
    )
};